import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useLocation, useNavigate } from "react-router";
import logoImg from "../assets/icons/logo_wible_lg.svg";
import { centerBox, columnBox, rowBox } from "../styles/common.styled";
import Spacing from "../components/ui/Spacing";

const menuItems = [
  { path: "/Guide", label: "서비스 소개" },
  { path: "/FAQ", label: "자주 묻는 질문" },
  { path: "/News", label: "새소식" },
  { path: "/Counsel", label: "상담문의" },
];

interface HeaderProps {
  useFullScreen: boolean;
  setUseFullScreen: (flag: boolean) => void;
}

const Header = ({ useFullScreen, setUseFullScreen }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setUseFullScreen(false);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 600);
    } else {
      setIsMenuOpen(true);
      setUseFullScreen(true);
    }
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <HeaderContainer $scrolled={isScrolled}>
      <HeaderContents>
        <Logo
          src={logoImg}
          onClick={() => {
            navigate("/");
          }}
        />
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
        <Hamburger onClick={toggleMenu} $animate={useFullScreen}>
          <span />
          <span />
          <span />
        </Hamburger>
      </HeaderContents>
      {isMenuOpen && (
        <FullscreenMenu $isClosing={isClosing}>
          <SlideInMenu>
            <SlideMenuHeader>
              <LogoInMenu
                src={logoImg}
                onClick={() => {
                  handleNavigate("/");
                }}
              />
            </SlideMenuHeader>
            <Spacing size={80} />
            <MenuList>
              {menuItems.map((item) => (
                <MenuItem
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  $selected={location.pathname.startsWith(item.path)}
                >
                  {item.label}
                </MenuItem>
              ))}
            </MenuList>
          </SlideInMenu>
        </FullscreenMenu>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  ${centerBox}
  height: var(--header-height);
  box-shadow: ${(props) =>
    props.$scrolled && "0 4px 32px 0 rgba(0, 0, 0, .08)"};
  z-index: 100;
  background-color: #fff;
`;

const HeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
  height: 100%;

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }
`;

const Logo = styled.img`
  cursor: pointer;
`;

const NavContainer = styled.nav`
  ${rowBox}
  gap: 32px;
  height: 100%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.div<{ $selected: boolean }>`
  ${centerBox}
  height: 100%;
  position: relative;
  font-size: 1rem;
  font-weight: 600;
  padding: 0 4px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${(props) => (props.$selected ? "100%" : "0")};
    height: 4px;
    background-color: var(--mint-900);
    transition: width 0.4s var(--cubic-bezier-primary),
      opacity 0.4s var(--cubic-bezier-primary);
    opacity: ${(props) => (props.$selected ? "1" : "0")};
  }

  &:hover {
    &::after {
      width: 100%;
      opacity: ${(props) => !props.$selected && "0.4"};
    }
  }
`;

const Hamburger = styled.div<{ $animate: boolean }>`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  z-index: 112;

  & > span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: #333;
  }

  :first-child {
    transform: ${(props) =>
      props.$animate && "rotate(-45deg) translate(-25%, 75%)"};
    transition: transform 0.4s var(--cubic-bezier-primary);
  }

  :nth-child(2) {
    transform: ${(props) => props.$animate && "translateX(100px)"};
    transition: transform 0.4s var(--cubic-bezier-primary);
  }

  :last-child {
    transform: ${(props) =>
      props.$animate && "rotate(45deg) translate(-33%, -174%)"};
    transition: transform 0.4s var(--cubic-bezier-primary);
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const FullscreenMenu = styled.div<{ $isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  z-index: 111;
  display: flex;
  align-items: flex-start;
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} 0.8s
    var(--cubic-bezier-primary);
`;

const SlideInMenu = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const SlideMenuHeader = styled.div`
  ${rowBox}
  padding: 0 var(--side-padding);
  width: 100%;
  height: 3.5rem;
  align-items: center;
  justify-content: space-between;
`;

const LogoInMenu = styled.img`
  cursor: pointer;
`;

const MenuList = styled.div`
  ${columnBox}
  gap: 3rem;
  text-align: center;
`;

const MenuItem = styled.div<{ $selected: boolean }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) =>
    props.$selected ? "var(--mint-900)" : "var(--midnight-900)"};
  cursor: pointer;
`;

export default Header;
