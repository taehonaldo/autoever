import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
			{tabItems[activeTab].content && <TabContent>{tabItems[activeTab].content}</TabContent>}
		</TabsWrapper>
	);
};

const TabsWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const TabHeader = styled.div`
	display: flex;
	background-color: #f8f9fa;
	border: 1px solid var(--midnight-100);
`;

const TabButton = styled.button<{ $isActive: boolean }>`
	flex: 1;
	padding: 10px 20px;
	font-size: 16px;
	font-weight: ${(props) => (props.$isActive ? 'bold' : 'normal')};
	background-color: ${(props) => (props.$isActive ? 'var(--midnight-900)' : '#fff')};
	color: ${(props) => (props.$isActive ? '#ffffff' : '#001222')};
	border: none;
	cursor: pointer;
`;

const TabContent = styled.div`
	padding: 20px;
	background-color: #ffffff;
`;

export default Tabs;
