/// <reference types="react" />
declare type ModalProps = {
    title: string;
    content: string;
    onClick: () => void;
};
export default function Modal({ title, content, onClick }: ModalProps): JSX.Element;
export {};
