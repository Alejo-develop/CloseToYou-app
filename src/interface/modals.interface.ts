export interface ModalGenericProps {
  visible: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  contactName?: string | undefined;
  text?: string
}

export interface ModalContactInfoProps{
  visible: boolean;
  onClose: () => void;
  id: string;
  name: string;
  seconName: string | undefined;
  lastName: string | undefined;
  phone: string | undefined;
  role: string | undefined;
  secondPhone: string | undefined;
  email: string | undefined;
  address: string | undefined;
  latitude?: number | null,
  longitude?: number | null,
  img?: string;
}

export interface ModalPhoto{
  visible: boolean;
  onClose: () => void;
  takePhoto?: () => void;
  galery: () => void
}