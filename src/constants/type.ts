import { ReactNode } from "react";
import { EditorState } from "react-draft-wysiwyg";

export interface EditorStateValue {
  editorState: EditorState;
  count: number;
  max: number;
}

export interface EmbedModalProps {
    isOpen: boolean;
    toggle: () => void;
    children: ReactNode
}
