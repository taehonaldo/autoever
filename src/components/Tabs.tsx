import { useState } from 'react';
import styled from 'styled-components';

// TabItem 타입 정의
export interface TabItem {
	label: string | JSX.Element;
	content: JSX.Element;
}

interface TabsProps {
	tabItems: TabItem[];
}

const Tabs = ({ tabItems }: TabsProps) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<TabsWrapper>
			<TabHeader>
				{tabItems.map((tab, index) => (
					<TabButton
						key={index}
						isActive={activeTab === index}
						onClick={() => setActiveTab(index)}
					>
						{tab.label}
					</TabButton>
				))}
			</TabHeader>
			<TabContent>{tabItems[activeTab].content}</TabContent>
		</TabsWrapper>
	);
};

const TabsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid #e5e5e5;
`;

const TabHeader = styled.div`
	display: flex;
	background-color: #f8f9fa;
	border-bottom: 1px solid #e5e5e5;
`;

const TabButton = styled.button<{ isActive: boolean }>`
	flex: 1;
	padding: 10px 20px;
	font-size: 16px;
	font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
	background-color: ${(props) => (props.isActive ? 'var(--midnight-900)' : '#fff')};
	color: ${(props) => (props.isActive ? '#ffffff' : '#001222')};
	border: none;
	cursor: pointer;
`;

const TabContent = styled.div`
	padding: 20px;
	background-color: #ffffff;
`;

export default Tabs;
