import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor as ReactDraftEditor } from "react-draft-wysiwyg";
import { toolbarOptions } from "../constants/constant";
import { useContext } from "react";
import { EditorContext } from "../context/editor";

const Editor = () => {
  const { controls, onEditorStateChange } = useContext(EditorContext);

  return (
    <ReactDraftEditor
      editorClassName="custom-editor"
      toolbarClassName="custom-toolbar"
      editorState={controls.editorState}
      onEditorStateChange={onEditorStateChange}
      localization={{
        locale: "en",
        translations: { "components.controls.blocktype.normal": "Paragraph" },
      }}
      toolbar={toolbarOptions}
    />
  );
};

export default Editor;
