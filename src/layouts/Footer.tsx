import styled from "styled-components";
import kiaLogo from "../assets/icons/logo_kia.svg";
import { centerBox, columnBox, rowBox } from "../styles/common.styled";
import { modalStore } from "../store";
import NoticeModal from "./NoticeModal";

const Footer = () => {
  const openModal = modalStore((state) => state.openModal);

  const handleClickModalContent = (
    type: "STARTADMIN_ADMIN_PRIVACY" | "JOIN_SERVICE_USE"
  ) => {
    openModal(<NoticeModal type={type} />, false);
  };

  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <Logo src={kiaLogo} alt="KIA Logo" />
          <span>© 2023 KIA CORP. All Rights Reserved.</span>
        </LogoSection>
        <InfoAndLinks>
          <LinksSection>
            <FooterLink
              onClick={() =>
                handleClickModalContent("STARTADMIN_ADMIN_PRIVACY")
              }
              style={{ fontWeight: "bold" }}
            >
              개인정보 처리방침
            </FooterLink>
            <FooterLink
              onClick={() => handleClickModalContent("JOIN_SERVICE_USE")}
            >
              이용약관
            </FooterLink>
          </LinksSection>
          <InfoSection>
            <span>
              서울특별시 서초구 헌릉로 12
              <span style={{ marginLeft: "12px" }}>기아㈜</span>
            </span>
            <span>대표: 송호성, 최준영</span>
            <span>사업자등록번호: 119-81-02316</span>
            <span>통신판매번호: 2006-07935</span>
            <span>고객센터: 1833-4964</span>
            <span>
              제휴문의: <a href="mailto:wible.biz@kia.com">wible.biz@kia.com</a>
            </span>
          </InfoSection>
        </InfoAndLinks>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  height: var(--footer-height);
  width: 100%;
  background-color: var(--midnight-900);
  color: var(--gray-400);
  padding: 0 var(--side-padding);

  margin-top: auto;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

const FooterContent = styled.div`
  ${centerBox}
  ${rowBox}
  gap: 1rem;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  width: var(--max-width);
  font-size: var(--font-md);

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    text-align: left;
    justify-content: center;
    width: 100%;
  }
`;

const LogoSection = styled.div`
  ${columnBox}
  align-items: flex-start;
  text-align: left;
`;

const Logo = styled.img`
  height: 56px;
  margin-bottom: 2px;

  @media (max-width: 1023px) {
    height: 32px;
    margin-bottom: 1px;
  }
`;

const InfoAndLinks = styled.div`
  ${columnBox}
  align-items: center;
  gap: 10px;
  line-height: var(--line-height);

  @media (min-width: 1024px) {
    align-items: flex-end;
  }

  @media (max-width: 1023px) {
    align-items: flex-start;
    gap: 14px;
  }
`;

const LinksSection = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: flex-end;
`;

const FooterLink = styled.div`
  color: #ffffff;
  font-size: var(--font-lg);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const InfoSection = styled.div`
  word-break: keep-all;
  text-align: right;

  span {
    display: inline-block;
    margin-left: 12px;
  }

  a {
    color: inherit;
  }

  @media (max-width: 1023px) {
    ${columnBox}
    width: 100%;
    align-items: flex-start;
    text-align: left;
  }
`;

export default Footer;
