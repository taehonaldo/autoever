import { Category, Tab } from '../../../types/faq';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../../apis';
import Chips, { ChipOption } from '../../../components/ui/Chips';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { centerBox, Row, rowBox } from '../../../styles/common.styled';
import searchIcon from '../../../assets/icons/ic_search.svg';
import clearIcon from '../../../assets/icons/ic_clear.svg';
import refreshIcon from '../../../assets/icons/ic_refresh.svg';

interface FAQContentProps {
	tab: Tab;
	category: string | null;
	setCategory: (newCategory: string | null) => void;
	keyword: string;
	setKeyword: (newKeyword: string) => void;
	dataLength: number;
}

const FAQInput = ({ tab, category, setCategory, keyword, setKeyword, dataLength }: FAQContentProps) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['categories', tab],
		queryFn: () => getCategories(tab),
	});

	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		setCategory(null);
	}, [tab]);

	const handleChangeCategory = (value: string) => {
		setCategory(value);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const clearInput = () => {
		setInputValue('');
	};

	const handleSearch = () => {
		setKeyword(inputValue);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	const handleClickInit = () => {
		clearInput();
		setKeyword('');
	};

	if (isLoading) return <div>now loading</div>;
	if (isError) return <div>Error</div>;
	if (data)
		return (
			<>
				<InputWrapper>
					<InputContainer>
						<input
							type='text'
							value={inputValue}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
							placeholder='찾으시는 내용을 입력해 주세요'
						/>
						{inputValue && (
							<img
								src={clearIcon}
								className='clear-icon'
								onClick={clearInput}
							/>
						)}
						<img
							src={searchIcon}
							onClick={handleSearch}
						/>
					</InputContainer>
				</InputWrapper>
				{keyword !== '' && (
					<SearchResult>
						<span>
							검색결과 총 <strong>{dataLength}</strong>건
						</span>
						<Row onClick={handleClickInit}>
							<img src={refreshIcon} />
							<button>검색초기화</button>
						</Row>
					</SearchResult>
				)}
				<ChipsContainer>
					<Chips
						options={[
							{ value: null, label: '전체' },
							...data.map(
								(item: Category) =>
									({
										value: item.categoryID,
										label: item.name,
									} as ChipOption)
							),
						]}
						selected={category}
						onSelect={handleChangeCategory}
					/>
				</ChipsContainer>
			</>
		);
};

const ChipsContainer = styled.div`
	width: 100%;
	margin-bottom: var(--px-md);
`;

const InputWrapper = styled.div`
	${centerBox}
	width: 100%;
	background-color: var(--gray-10);
	margin-bottom: var(--px-md);
	padding: var(--px-md);

	@media (max-width: 743px) {
		padding: 0;
	}
`;

const InputContainer = styled.div`
	position: relative;

	@media (max-width: 743px) {
		width: 100%;
	}

	> input {
		width: var(--search-bar-width);
		border-color: var(--midnight-900);
		border-width: 1px;
		font-size: 1rem;
		height: var(--btn-xlg2);
		padding-left: 16px;
		padding-right: calc(var(--ic-sm) + var(--clear-space) + var(--btn-xlg2) - 2px);
	}

	> img {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;

		&.clear-icon {
			right: calc(11px + var(--clear-space) + var(--ic-md));
			width: var(--ic-sm);
			height: var(--ic-sm);
		}

		&:not(.clear-icon) {
			right: 11px;
			width: var(--ic-md);
			height: var(--ic-md);
		}
	}
`;

const SearchResult = styled.div`
	${rowBox}
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin-bottom: var(--px-md);

	font-size: var(--heading-info);
	line-height: var(--line-height-sm);
	font-weight: bold;

	strong {
		color: var(--mint-900);
	}

	button {
		font-size: 1rem;
	}
`;

export default FAQInput;
