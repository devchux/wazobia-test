import { EditorState } from "react-draft-wysiwyg";

export interface EditorStateValue {
  editorState: EditorState;
  count: number;
  max: number;
}
