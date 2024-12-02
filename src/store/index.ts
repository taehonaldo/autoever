import { create } from "zustand";

type ModalState = {
  open: boolean;
  content: React.ReactNode | null;
  backdropClose: boolean;
  onClose?: () => void;
};

type ModalActions = {
  openModal: (
    content: ModalState["content"],
    backdropClose?: ModalState["backdropClose"],
    onClose?: ModalState["onClose"]
  ) => void;
  closeModal: () => void;
};

export const modalStore = create<ModalState & ModalActions>((set) => ({
  open: false,
  content: null,
  backdropClose: true,
  onClose: undefined,
  openModal: (content, backdropClose, onClose) =>
    set({
      open: true,
      content,
      backdropClose,
      onClose,
    }),
  closeModal: () =>
    set({
      open: false,
      content: null,
      onClose: undefined,
    }),
}));
