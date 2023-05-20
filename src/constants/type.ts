import { ButtonHTMLAttributes, ReactNode } from "react";
import { EditorState } from "react-draft-wysiwyg";

export interface EditorStateValue {
  editorState: EditorState;
  count: number;
  max: number;
}

export interface EmbedModalProps {
  isOpen: boolean;
  toggle: () => void;
  children: ReactNode;
  onEmbed: () => void;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
}

export interface GroupedButtonProps {
  options: ButtonProps[];
}

export type EmbedState = "picture" | "video" | "social";

export type IModalContent = Record<
  EmbedState,
  { node: JSX.Element; onEmbed: () => void }
>;
