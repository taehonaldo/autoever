import PageTitle from '../../components/PageTitle';
import Tabs, { TabItem } from '../../components/Tabs';
import IntroductionTab from './components/IntroductionTab';
import ManualTab from './components/ManualTab';

const FAQPage = () => {
	const tabItems: TabItem[] = [
		{ label: '서비스 도입', content: <IntroductionTab /> },
		{ label: '서비스 이용', content: <ManualTab /> },
	];

	return (
		<>
			<PageTitle
				title='자주 묻는 질문'
				description='궁금하신 내용을 빠르게 찾아보세요.'
			/>
			<Tabs tabItems={tabItems} />
		</>
	);
};

export default FAQPage;
