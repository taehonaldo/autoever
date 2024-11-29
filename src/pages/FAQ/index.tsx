import { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import Tabs, { TabItem } from '../../components/Tabs';
import styled from 'styled-components';
import { columnBox, pageBox } from '../../styles/common.styled';
import FAQInput from './components/FAQInput';
import FAQContent from './components/FAQContent';

const tabItems: TabItem[] = [{ label: '서비스 도입' }, { label: '서비스 이용' }];
const tabs = ['USAGE', 'CONSULT'] as const;

const FAQPage = () => {
	const [currentTab, setCurrentTab] = useState(0);

	return (
		<PageWrapper>
			<PageTitle
				title='자주 묻는 질문'
				description='궁금하신 내용을 빠르게 찾아보세요.'
			/>
			<Tabs
				tabItems={tabItems}
				getActiveTab={(activeTab) => setCurrentTab(activeTab)}
			/>
			<FAQInput tab={tabs[currentTab]} />
			<hr />
			<FAQContent />
		</PageWrapper>
	);
};

const PageWrapper = styled.div`
	${pageBox}
	${columnBox}
`;

export default FAQPage;
