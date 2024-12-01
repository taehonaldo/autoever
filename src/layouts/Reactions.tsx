import styled from "styled-components";
import downloadIcon from "../assets/icons/ic_download.svg";
import writeIcon from "../assets/icons/ic_write.svg";
import talkIcon from "../assets/icons/ic_talk.svg";
import { centerBox } from "../styles/common.styled";

const Reactions = () => {
  return (
    <ReactionsContainer>
      <ReactionItem>
        <Icon src={downloadIcon} alt="Download Icon" />
        <TextContainer>
          <Title>상품제안서 다운로드</Title>
        </TextContainer>
      </ReactionItem>
      <ReactionItem>
        <Icon src={writeIcon} alt="Register Icon" />
        <TextContainer>
          <Title>상담문의 등록하기</Title>
        </TextContainer>
      </ReactionItem>
      <ReactionItem>
        <Icon src={talkIcon} alt="Chat Icon" />
        <TextContainer>
          <Title>카톡으로 문의하기</Title>
          <SubText>ID: Wible Biz(위블 비즈)</SubText>
        </TextContainer>
      </ReactionItem>
    </ReactionsContainer>
  );
};

const ReactionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1024px) {
    justify-content: space-between;
  }

  @media (max-width: 744px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ReactionItem = styled.div<{ $highlighted?: boolean }>`
  ${centerBox}
  flex: 1 1 calc(33.333% - 1rem);
  width: 100%;
  border: 1px solid var(--midnight-900);
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-50);
  }

  @media (max-width: 1024px) {
    flex: 1 1 calc(50% - 1rem);
  }

  @media (max-width: 744px) {
    flex: 1 1 100%;
    max-width: 100%;
    justify-content: flex-start;
    padding: 14px;
  }
`;

const Icon = styled.img`
  width: var(--ic-lg);
  height: var(--ic-lg);
  margin-right: 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: var(--midnight-900);
`;

const SubText = styled.div`
  font-size: 0.875rem;
  color: var(--gray-500);
  margin-top: 0.5rem;
`;

export default Reactions;
