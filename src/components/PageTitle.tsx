import styled from 'styled-components';
import { columnBox } from '../styles/common.styled';

interface PageTitleProps {
	title: string;
	description: string;
}

const PageTitle = ({ title, description }: PageTitleProps) => {
	return (
		<ComponentWrapper>
			<h1>{title}</h1>
			<span>{description}</span>
		</ComponentWrapper>
	);
};

const ComponentWrapper = styled.div`
	${columnBox}
`;

export default PageTitle;
