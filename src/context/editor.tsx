import { createContext, FC, ReactNode, useReducer } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
import { EditorStateValue } from "../constants/type";
import { useFile } from "../hooks/useFile";

const initialState: EditorStateValue = {
  editorState: EditorState.createEmpty(),
  count: 0,
  max: 1000,
};

export const EditorContext = createContext({
  controls: initialState,
  fileName: "",
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onEditorStateChange: (editorState: EditorState) => {
    console.log(editorState);
  },
  onEmbedImage: () => {
    console.log("");
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

  const { handleImageChange, fileName, filePreview } = useFile();

  const onEditorStateChange = (editorState: EditorState) => {
    const count = editorState.getCurrentContent().getPlainText().length;
    if (count > controls.max) return;
    setControls({ editorState, count });
  };

  const convertToDraft = (html: string) => {
    const { contentBlocks, entityMap } = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const editorState = EditorState.createWithContent(contentState);
    setControls({ editorState });
  };

  const onEmbedImage = () => {
    if (!filePreview) return;

    const textToHtml = draftToHtml(
      convertToRaw(controls.editorState.getCurrentContent())
    );
    const image = `<img src="${filePreview}" alt="${fileName}" />`;
    const html = `${textToHtml}${image}`;
    convertToDraft(html);
  };

  return (
    <EditorContext.Provider
      value={{
        controls,
        onEditorStateChange,
        handleImageChange,
        fileName,
        onEmbedImage,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
