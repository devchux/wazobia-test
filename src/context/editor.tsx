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
import { EditorStateValue, IEditorContext, ISocials } from "../constants/type";
import { useFile } from "../hooks/useFile";

const initialState: EditorStateValue = {
  editorState: EditorState.createEmpty(),
  count: 0,
  max: 1000,
};

const initialSocials = {
  url: "",
  code: "",
};

export const EditorContext = createContext<IEditorContext>({
  controls: initialState,
  fileName: "",
  video: "",
  handleImageChange: () => null,
  handleVideoChange: () => null,
  onEditorStateChange: () => null,
  onEmbedImage: () => null,
  onEmbedVideo: () => null,
  handleSocialChange: () => null,
  socials: initialSocials,
  onEmbedSocials: () => null,
});

const EditorProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [video, setVideo] = useState("");
  const [socials, setSocials] = useState<ISocials>(initialSocials);
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

  const handleSocialChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    setSocials({
      ...socials,
      [name]: value,
    });
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

    const image = `<img src="${filePreview}" alt="${fileName}" width="100%" height="202" />`;
    getHTML(image);
  };

  const onEmbedVideo = () => {
    if (!video) return;

    const frame = `<iframe width="100%" height="202" src="${video}"></iframe>`;
    getHTML(frame);
  };

  const onEmbedSocials = () => {
    if (!socials.code) return;

    const frame = `<a href="${socials.url}" target="_blank">${socials.code}</a>`;
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
        handleSocialChange,
        socials,
        onEmbedSocials,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
