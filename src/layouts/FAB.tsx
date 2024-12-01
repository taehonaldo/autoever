import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import topIcon from "../assets/icons/ic_top.svg";

interface FABProps {
  footerElement: HTMLDivElement | null;
}

const FAB = ({ footerElement }: FABProps) => {
  const [bottomOffset, setBottomOffset] = useState(16);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const footerRect = footerElement?.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (footerRect) {
      const overlap = windowHeight - footerRect.top;
      setBottomOffset(overlap > 0 ? overlap + 16 : 16);
    }

    setIsVisible(window.scrollY > 1);
  };

  const handleClickFAB = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    console.log(footerElement);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerElement]);

  return (
    isVisible && (
      <ComponentWrapper
        src={topIcon}
        onClick={handleClickFAB}
        style={{ bottom: `${bottomOffset}px` }}
      />
    )
  );
};

// FAB가 작았다가 커지며 위로 등장하는 애니메이션
const growUp = keyframes`
  from {
    transform: scale(0.5) translateY(20px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`;

const ComponentWrapper = styled.img`
  position: fixed;
  z-index: 9999;
  right: 16px;

  background-color: #fff;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 28px;
  border-radius: 50%;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  font-size: 0;
  height: 48px;
  width: 48px;
  cursor: pointer;

  animation: ${growUp} 0.4s ease-out;
  transition: bottom 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export default FAB;
