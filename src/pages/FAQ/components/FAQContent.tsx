import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { FAQ, Tab } from "../../../types/faq";
import { useEffect, useState, useRef } from "react";
import { getFAQ } from "../../../apis";
import { centerBox, rowBox } from "../../../styles/common.styled";
import ArrowIcon from "../../../assets/icons/ic_arrow.svg";
import Empty from "../../../components/ui/Empty";

interface FAQContentProps {
  tab: Tab;
  category: null | string;
  keyword: string;
  getDataLength?: (length: number) => void;
}

const FAQContent = ({
  tab,
  category,
  keyword,
  getDataLength,
}: FAQContentProps) => {
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState<FAQ[]>([]);
  const [expandedItem, setExpandedItem] = useState<null | number>(null);
  const $answerContainer = useRef<Record<number, HTMLDivElement | null>>({});

  const { data, isLoading, isError } = useQuery({
    queryKey: ["faqs", tab, category, offset, keyword],
    queryFn: () => getFAQ(tab, offset, category, keyword),
  });

  useEffect(() => {
    if (data?.items) {
      getDataLength && getDataLength(data.items.length);
      setItems((prev) =>
        offset === 0 ? data.items : [...prev, ...data.items]
      );
    }
  }, [data, offset]);

  useEffect(() => {
    setOffset(0);
    setExpandedItem(null);
  }, [tab, category, keyword]);

  const toggleExpand = (id: number) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };

  const canLoadMore = data?.items.length === 10;
  const empty = data?.length === 0;

  if (isLoading && offset === 0) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  return (
    <ComponentWrapper>
      {items.map((faq) => (
        <FAQContainer key={faq.id}>
          <FAQHeader
            onClick={() => toggleExpand(faq.id)}
            $expanded={expandedItem === faq.id}
          >
            <FAQHeaderContents>
              <FAQCategoryContainer>
                {tab === "CONSULT" && (
                  <>
                    <Category>{faq.categoryName}</Category>
                    <RightArrow src={ArrowIcon} />
                  </>
                )}

                <SubCategory>{faq.subCategoryName}</SubCategory>
              </FAQCategoryContainer>
              <Question>{faq.question}</Question>
            </FAQHeaderContents>
            <Icon src={ArrowIcon} $expanded={expandedItem === faq.id} />
          </FAQHeader>
          <FAQAnswerContainer
            ref={(el) => ($answerContainer.current[faq.id] = el)}
            $expanded={expandedItem === faq.id}
            $maxHeight={$answerContainer.current[faq.id]?.scrollHeight || 0}
          >
            <FAQAnswer dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </FAQAnswerContainer>
        </FAQContainer>
      ))}
      {canLoadMore && (
        <LoadMore onClick={() => setOffset((prev) => prev + 10)}>
          + 더보기
        </LoadMore>
      )}
      {empty && (
        <Empty
          text="검색 결과가 없습니다."
          style={{ borderBottom: "1px solid var(--gray-200)" }}
        />
      )}
    </ComponentWrapper>
  );
};

const ComponentWrapper = styled.div`
  border-top: 2px solid var(--midnight-900);
  width: 100%;
`;

const FAQContainer = styled.div`
  border-bottom: 1px solid var(--gray-100);
`;

const FAQHeader = styled.div<{ $expanded: boolean }>`
  ${rowBox}
  align-items: center;
  cursor: pointer;
  padding: var(--faq-list-a-padding-v) 0;
  font-size: var(--faq-list-a-size);
  background-color: ${(props) =>
    props.$expanded ? "var(--gray-10)" : "white"};

  &:hover {
    background-color: var(--gray-50);
  }
`;

const FAQHeaderContents = styled.div`
  ${rowBox};
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const RightArrow = styled.img`
  transform: rotate(-90deg);
  width: 16px;
  height: 16px;
  opacity: 0.3;
  margin: 0 4px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const FAQCategoryContainer = styled.div`
  ${rowBox}
`;

const Category = styled.span`
  box-sizing: content-box;
  width: 8em;
  padding: 0 var(--faq-list-a-padding-h);
  text-align: center;
  font-size: var(--faq-list-a-size);
  color: var(--gray-500);

  @media (max-width: 1024px) {
    width: fit-content;
    padding: 0;
    font-size: calc(1em - 4px);
  }
`;

const SubCategory = styled.span`
  box-sizing: content-box;
  width: 6em;
  padding: 0 var(--faq-list-a-padding-h);
  text-align: center;
  font-size: var(--faq-list-a-size);
  color: var(--gray-500);

  @media (max-width: 1024px) {
    width: fit-content;
    padding: 0;
    font-size: calc(1em - 4px);
  }
`;

const Question = styled.strong`
  padding-left: var(--faq-list-a-padding-h);
  font-size: var(--faq-list-a-size);
  flex: 1;

  @media (max-width: 1024px) {
    padding: 0;
  }
`;

const Icon = styled.img<{ $expanded: boolean }>`
  margin-right: calc((var(--px-xlg) - var(--ic-md)) / 2);
  transform: ${(props) =>
    props.$expanded ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.6s ease;
  height: var(--ic-md);
  width: var(--ic-md);
`;

const FAQAnswerContainer = styled.div<{
  $expanded: boolean;
  $maxHeight: number;
}>`
  max-height: ${(props) => (props.$expanded ? `${props.$maxHeight}px` : "0")};
  overflow: hidden;
  transition: max-height 0.6s var(--cubic-bezier-primary);
`;

const FAQAnswer = styled.div`
  padding: var(--faq-list-q-padding);
  border-top: 1px solid var(--gray-100);
  overflow-x: scroll;
  overflow-y: hidden;
`;

const LoadMore = styled.div`
  ${centerBox};
  width: 100%;
  height: var(--btn-xlg2);
  cursor: pointer;
  margin-top: calc(var(--px-lg) - 8px);
  font-size: var(--list-more-size);

  &:hover {
    color: var(--primary-hover-color);
  }
`;

export default FAQContent;
