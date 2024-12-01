import styled from "styled-components";
import { centerBox, columnBox, rowBox } from "../styles/common.styled";
import Spacing from "../components/ui/Spacing";
import googleLogo from "../assets/icons/logo_googleplay.svg";
import appleLogo from "../assets/icons/logo_appstore.svg";

const store = [
  {
    logo: googleLogo,
    name: "Google Play",
    url: "https://play.google.com/store/apps/details?id=kor.mop.user.app",
  },
  {
    logo: appleLogo,
    name: "App Store",
    url: "https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794",
  },
];

const StoreLink = () => {
  return (
    <StoreLinkContainer>
      <Title>
        <strong>위블 비즈 App</strong>&nbsp;지금 만나보세요!
      </Title>
      <Spacing size={4} />
      <StoresContainer>
        {store.map((el) => (
          <Store onClick={() => window.open(el.url)} key={el.name}>
            <img src={el.logo} />
            <span>{el.name}</span>
          </Store>
        ))}
      </StoresContainer>
    </StoreLinkContainer>
  );
};

const StoreLinkContainer = styled.div`
  ${columnBox}
  ${centerBox}
  width: 100%;
  background-color: var(--gray-10);
  padding: 2rem;
  border-radius: 16px;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  strong {
    color: var(--mint-900);
  }

  @media (min-width: 1440px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

const StoresContainer = styled.div`
  ${rowBox}
  gap: 32px;

  @media (max-width: 744px) {
    flex-direction: column;
  }
`;

const Store = styled.div`
  ${centerBox}
  ${rowBox}
  gap: 4px;
  font-size: 1rem;
  width: 296px;
  height: 60px;
  background-color: #fff;
  color: var(--midnight-900);
  border-radius: 8px;
  cursor: pointer;

  span {
    font-weight: 600;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    height: 64px;
    width: 392px;
  }

  @media (max-width: 744px) {
    font-size: 14px;
    height: 56px;
    width: 264px;
  }
`;

export default StoreLink;
