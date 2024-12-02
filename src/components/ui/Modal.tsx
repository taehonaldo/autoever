import styled from "styled-components";
import { modalStore } from "../../store";
import { GlobalPortal } from "../../GlobalPortal";
import { useStore } from "zustand";

function Modal() {
  const { open, content, backdropClose, onClose, closeModal } =
    useStore(modalStore);

  const handleClose = () => {
    onClose && onClose();
    closeModal();
  };

  if (!open) return null;

  return (
    <GlobalPortal.Consumer>
      <Overlay
        onClick={() => {
          backdropClose && handleClose();
        }}
      >
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          {content}
        </ModalContainer>
      </Overlay>
    </GlobalPortal.Consumer>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  & > * {
    min-width: 320px;
    max-height: calc(100vh - var(--side-padding) * 2);
    max-width: calc(100vw - var(--side-padding) * 2);
    margin: auto;
  }
`;

export default Modal;
