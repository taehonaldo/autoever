import styled from "styled-components";
import { centerBox } from "../../styles/common.styled";

export interface ChipOption {
  value: string;
  label: string | JSX.Element;
}

interface ChipProps {
  options: ChipOption[];
  selected: string | null;
  onSelect?: (value: string) => void;
}

const Chips = ({ options, selected, onSelect }: ChipProps) => {
  const handleClick = (value: string) => {
    onSelect && onSelect(value);
  };

  return (
    <ChipContainer>
      {options.map((option) => (
        <Chip
          key={option.value}
          $selected={selected === option.value}
          onClick={() => handleClick(option.value)}
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
  gap: 2px;
`;

const Chip = styled.div<{ $selected: boolean }>`
  ${centerBox};
  cursor: pointer;
  height: var(--btn-md);
  padding: 0 var(--space-sm);
  font-weight: bold;
  color: ${(props) => (props.$selected ? "#ffffff" : "var(--midnight-900)")};
  background-color: ${(props) =>
    props.$selected ? "var(--mint-900)" : "#ffffff"};
  border-radius: calc(var(--btn-md) / 2);
`;

export default Chips;
