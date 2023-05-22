import {
  ChangeEvent,
  createContext,
  FC,
  ReactNode,
  useReducer,
  useState,
} from "react";
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
  video: "",
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  handleVideoChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onEditorStateChange: (editorState: EditorState) => {
    console.log(editorState);
  },
  onEmbedImage: () => {
    console.log("");
  },
  onEmbedVideo: () => {
    console.log("");
  },
});

const EditorProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [video, setVideo] = useState("");
  const [controls, setControls] = useReducer(
    (prev: EditorStateValue, next: Partial<EditorStateValue>) => ({
      ...prev,
      ...next,
    }),
    initialState
  );

  const { handleImageChange, fileName, filePreview } = useFile();

  const handleVideoChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setVideo(value);
  };

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

  const getHTML = (value: string) => {
    const textToHtml = draftToHtml(
      convertToRaw(controls.editorState.getCurrentContent())
    );
    const html = `${textToHtml}${value}`;
    convertToDraft(html);
  };

  const onEmbedImage = () => {
    if (!filePreview) return;

    const image = `<img src="${filePreview}" alt="${fileName}" />`;
    getHTML(image);
  };

  const onEmbedVideo = () => {
    if (!video) return;

    const frame = `<iframe width="100%" height="202" src="${video}"></iframe>`;
    getHTML(frame);
  };

  return (
    <EditorContext.Provider
      value={{
        controls,
        onEditorStateChange,
        handleImageChange,
        fileName,
        onEmbedImage,
        handleVideoChange,
        video,
        onEmbedVideo,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
