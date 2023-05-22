import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
} from "react";
import { EditorState } from "react-draft-wysiwyg";

export interface EditorStateValue {
  editorState: EditorState;
  count: number;
  max: number;
}

export interface ISocials {
  url: string;
  code: string;
}

export interface IEditorContext {
  controls: EditorStateValue;
  fileName: string;
  video: string;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleVideoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSocialChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEditorStateChange: (editorState: EditorState) => void;
  onEmbedImage: () => void;
  onEmbedVideo: () => void;
  onEmbedSocials: () => void;
  socials: ISocials;
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

export interface InpputProps extends InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  wrapperClassName?: string;
  options: { title: string; value: string }[];
}
