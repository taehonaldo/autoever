import styled from "styled-components";
import { centerBox, rowBox } from "../styles/common.styled";
import { useLocation, useNavigate } from "react-router";
import logoImg from "../assets/icons/logo_wible_lg.svg";

const menuItems = [
  { path: "Guide", label: "서비스 소개" },
  { path: "FAQ", label: "자주 묻는 질문" },
  { path: "News", label: "새소식" },
  { path: "Counsel", label: "상담문의" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderContents>
        <Logo src={logoImg} onClick={() => navigate("/")} />
        <NavContainer>
          {menuItems.map((item) => (
            <NavItem
              key={item.path}
              onClick={() => navigate(item.path)}
              $selected={location.pathname.startsWith(item.path)}
            >
              {item.label}
            </NavItem>
          ))}
        </NavContainer>
      </HeaderContents>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  ${centerBox};
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid #e5e5e5;

  z-index: 2;
`;

const HeaderContents = styled.div`
  ${rowBox}
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  padding: 0 3rem;
`;

const Logo = styled.img`
  cursor: pointer;
`;

const NavContainer = styled.nav`
  display: flex;
  height: 100%;
  gap: 2rem;
`;

const NavItem = styled.div<{ $selected: boolean }>`
  ${centerBox}
  height: 100%;
  position: relative;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${(props) => (props.$selected ? "100%" : "0")}; /* 선택 시 100% */
    height: 4px;
    background-color: var(--min-900);
    transition: width 0.4s var(--cubic-bezier-primary), opacity 0.4s ease;
    opacity: ${(props) => (props.$selected ? "1" : "0")}; /* 선택 시 보임 */
  }

  &:hover {
    ::after {
      width: 100%; /* 호버 시 밑줄 확장 */
      opacity: 0.4; /* 호버 시 약간 투명도 추가 */
    }
  }
`;

export default Header;
