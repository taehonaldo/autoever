import styled from "styled-components";
import kiaLogo from "../assets/icons/logo_kia.svg";
import { centerBox, columnBox, rowBox } from "../styles/common.styled";
import { forwardRef } from "react";

const Footer = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <FooterContainer ref={ref}>
      <FooterContent>
        <LogoSection>
          <Logo src={kiaLogo} alt="KIA Logo" />
          <span>© 2023 KIA CORP. All Rights Reserved.</span>
        </LogoSection>
        <InfoAndLinks>
          <LinksSection>
            <FooterLink href="/privacy-policy">개인정보 처리방침</FooterLink>
            <FooterLink href="/terms-of-service">이용약관</FooterLink>
          </LinksSection>
          <InfoSection>
            <span>서울특별시 서초구 헌릉로 12 기아㈜</span>
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
});

const FooterContainer = styled.footer`
  ${centerBox}
  height: var(--footer-height);
  width: 100%;
  background-color: var(--midnight-900);
  color: var(--gray-400);
  padding: 0 var(--side-padding);

  margin-top: auto;
`;

const FooterContent = styled.div`
  ${rowBox}
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  font-size: var(--font-md);
`;

const LogoSection = styled.div`
  ${columnBox}
  align-items: flex-start;
  text-align: left;
`;

const Logo = styled.img`
  height: 56px;
  margin-bottom: 2px;
`;

const InfoAndLinks = styled.div`
  ${columnBox}
  align-items: center;
  gap: 10px;
  align-items: flex-end;
  text-align: right;
`;

const InfoSection = styled.div`
  text-align: right;
  word-break: keep-all;

  span {
    display: inline-block;
    margin-left: 12px;
  }

  a {
    color: inherit;
  }
`;

const LinksSection = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  font-size: var(--font-lg);

  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
