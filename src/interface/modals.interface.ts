export interface ModalGenericProps {
  visible: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  contactName?: string | undefined;
}

export interface ModalContactInfoProps{
  visible: boolean;
  onClose: () => void;
  id: number;
  name: string;
  number: string | undefined;
  role: string | undefined;
  secondNumber: string | undefined;
  email: string | undefined;
  address: string | undefined;
  img: string | undefined;
}