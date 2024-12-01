import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import topIcon from "../assets/icons/ic_top.svg";

const FAB = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1 && !isVisible) {
      setIsAnimatingOut(false);
      setIsVisible(true);
    } else if (window.scrollY <= 1 && isVisible) {
      setIsAnimatingOut(true);
      setTimeout(() => setIsVisible(false), 400); // 애니메이션 시간 후 비활성화
    }
  };

  const handleClickFAB = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    isVisible && (
      <ComponentWrapper>
        <Floating
          src={topIcon}
          onClick={handleClickFAB}
          $isAnimatingOut={isAnimatingOut}
        />
      </ComponentWrapper>
    )
  );
};

const growUp = keyframes`
  from {
    transform: scale(0) translateY(40px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  to {
    transform: scale(0) translateY(40px);
    opacity: 0;
  }
`;

const ComponentWrapper = styled.div`
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
`;

const Floating = styled.img<{ $isAnimatingOut: boolean }>`
  position: absolute;
  z-index: 9999;
  right: calc(var(--size) / 2);
  bottom: calc(var(--size) / 2);
  background-color: #fff;
  padding: 12px;
  border-radius: 50%;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  height: var(--size);
  width: var(--size);
  cursor: pointer;

  animation: ${(props) => (props.$isAnimatingOut ? fadeOut : growUp)} 0.4s
    var(--cubic-bezier-primary);

  &:active {
    padding-bottom: 8px;
  }

  transition: bottom 0.3s var(--cubic-bezier-primary);
  transition: padding-bottom 0.3s var(--cubic-bezier-primary);
`;

export default FAB;
