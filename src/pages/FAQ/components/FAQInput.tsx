import { Category, Tab } from '../../../types/faq';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../../apis';
import { Row } from '../../../styles/common.styled';
import Chips, { ChipOption } from '../../../components/ui/Chips';
import { useEffect, useState } from 'react';

interface FAQContentProps {
	tab: Tab;
}

const FAQInput = ({ tab }: FAQContentProps) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['categories', tab],
		queryFn: () => getCategories(tab),
	});
	const [selectedCategory, setSelectedCategory] = useState<string>('');

	useEffect(() => {
		setSelectedCategory('');
	}, [tab]);

	const handleChangeCategory = (value: string) => {
		setSelectedCategory(value);
	};

	if (isLoading) return <div>now loading</div>;
	if (isError) return <div>Error</div>;
	if (data)
		return (
			<>
				<input type='text' />
				<Row>
					<Chips
						options={[
							{ value: '', label: '전체' },
							...data.map(
								(category: Category) =>
									({ value: category.categoryID, label: category.name } as ChipOption)
							),
						]}
						selected={selectedCategory}
						onSelect={handleChangeCategory}
					/>
				</Row>
			</>
		);
};

export default FAQInput;
