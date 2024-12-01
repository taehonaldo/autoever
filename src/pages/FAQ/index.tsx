import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import Tabs, { TabItem } from "../../components/Tabs";
import styled from "styled-components";
import { columnBox } from "../../styles/common.styled";
import FAQInput from "./components/FAQInput";
import FAQContent from "./components/FAQContent";

const tabItems: TabItem[] = [
  { label: "서비스 도입" },
  { label: "서비스 이용" },
];

const tabs = ["USAGE", "CONSULT"] as const;

const FAQPage = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [keyword, setKeyword] = useState<string>("");
  const [dataLength, setDataLength] = useState<number>(0);

  return (
    <PageWrapper>
      <PageTitle
        title="자주 묻는 질문"
        description="궁금하신 내용을 빠르게 찾아보세요."
      />
      <Tabs
        tabItems={tabItems}
        getActiveTab={(activeTab) => setCurrentTab(activeTab)}
      />
      <FAQInput
        tab={tabs[currentTab]}
        category={currentCategory}
        setCategory={setCurrentCategory}
        keyword={keyword}
        setKeyword={setKeyword}
        dataLength={dataLength}
      />
      <FAQContent
        tab={tabs[currentTab]}
        category={currentCategory}
        keyword={keyword}
        getDataLength={(length: number) => setDataLength(length)}
      />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  ${columnBox}
  align-items: center;
`;

export default FAQPage;
