import { createContext, FC, ReactNode, useReducer } from "react";
import { EditorState } from "draft-js";
import { EditorStateValue } from "../constants/type";

const initialState: EditorStateValue = {
  editorState: EditorState.createEmpty(),
  count: 0,
  max: 1000,
};

export const EditorContext = createContext({
  controls: initialState,
  onEditorStateChange: (editorState: EditorState) => {
    console.log(editorState);
  },
});

const EditorProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [controls, setControls] = useReducer(
    (prev: EditorStateValue, next: Partial<EditorStateValue>) => ({
      ...prev,
      ...next,
    }),
    initialState
  );

  const onEditorStateChange = (editorState: EditorState) => {
    const count = editorState.getCurrentContent().getPlainText().length;
    setControls({ editorState, count });
  };

  return (
    <EditorContext.Provider value={{ controls, onEditorStateChange }}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
