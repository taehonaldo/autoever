import styled from 'styled-components';

export interface ChipOption {
	value: string;
	label: string;
}

interface ChipProps {
	options: ChipOption[];
	selected?: string;
	onSelect?: (value: string) => void;
}

const Chips = ({ options, selected, onSelect }: ChipProps) => {
	return (
		<ChipContainer>
			{options.map((option) => (
				<Chip
					key={option.value}
					$selected={selected === option.value}
					onClick={() => {
						onSelect && onSelect(option.value);
					}}
				>
					{option.label}
				</Chip>
			))}
		</ChipContainer>
	);
};

const ChipContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Chip = styled.div<{ $selected: boolean }>`
	cursor: pointer;
	padding: 8px 16px;
	font-size: 14px;
	font-weight: ${(props) => (props.$selected ? 'bold' : 'normal')};
	color: ${(props) => (props.$selected ? '#ffffff' : 'var(--midnight-900')};
	background-color: ${(props) => (props.$selected ? 'var(--mint-900)' : '#ffffff')};
	border-radius: calc(var(--btn-md) / 2);
`;

export default Chips;
