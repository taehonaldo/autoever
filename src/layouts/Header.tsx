import { useState } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const Header = () => {
	const [selected, setSelected] = useState('faq');
	const menuItems = [
		{ path: '/Guide', label: '서비스 소개' },
		{ path: '/FAQ', label: '자주 묻는 질문' },
		{ path: '/News', label: '새소식' },
		{ path: '/Counsel', label: '상담문의' },
	];

	return (
		<HeaderContainer>
			<LogoContainer>
				<Logo>Wible</Logo>
				<LogoSub>BIZ</LogoSub>
			</LogoContainer>
			<NavContainer>
				{menuItems.map((item) => (
					<NavItem
						key={item.path}
						$selected={selected === item.path}
						onClick={() => setSelected(item.path)}
					>
						<Link to={item.path}>{item.label}</Link>
					</NavItem>
				))}
			</NavContainer>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: #ffffff;
	border-bottom: 1px solid #e5e5e5;
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: baseline;
	font-family: 'Arial', sans-serif;
`;

const Logo = styled.div`
	font-size: 24px;
	font-weight: bold;
	color: #001222;
`;

const LogoSub = styled.div`
	font-size: 16px;
	font-weight: normal;
	margin-left: 4px;
	color: #001222;
`;

const NavContainer = styled.nav`
	display: flex;
	gap: 30px;
`;

const NavItem = styled.div<{ $selected: boolean }>`
	position: relative;
	font-size: 16px;
	color: ${(props) => (props.$selected ? '#001222' : '#666666')};
	font-weight: ${(props) => (props.$selected ? 'bold' : 'normal')};
	cursor: pointer;

	&:hover {
		color: #001222;
	}
`;

export default Header;
