import { useEffect, useState } from "react";
import styled from "styled-components";
import { centerBox } from "../styles/common.styled";

// TabItem 타입 정의
export interface TabItem {
  label: string | JSX.Element;
  content?: JSX.Element;
}

interface TabsProps {
  tabItems: TabItem[];
  getActiveTab?: (activeTab: number) => void;
}

const Tabs = ({ tabItems, getActiveTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    getActiveTab && getActiveTab(activeTab);
  }, [activeTab, getActiveTab]);

  return (
    <TabsWrapper>
      <TabHeader>
        {tabItems.map((tab, index) => (
          <TabButton
            key={index}
            $isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabHeader>
      {tabItems[activeTab].content && (
        <TabContent>{tabItems[activeTab].content}</TabContent>
      )}
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  width: 100%;
  margin-bottom: var(--px-lg);
`;

const TabHeader = styled.div`
  display: flex;
  background-color: #f8f9fa;
  border: 1px solid var(--midnight-100);
`;

const TabButton = styled.div<{ $isActive: boolean }>`
  ${centerBox}
  width: 100%;
  padding: 8px;
  font-size: var(--tab-fsize);
  min-height: var(--btn-xlg2);
  font-weight: ${(props) => (props.$isActive ? "bold" : "normal")};
  background-color: ${(props) =>
    props.$isActive ? "var(--midnight-900)" : "#fff"};
  color: ${(props) => props.$isActive && "#ffffff"};
  cursor: pointer;
`;

const TabContent = styled.div`
  padding: 20px;
`;

export default Tabs;
