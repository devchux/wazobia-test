import { useContext } from "react";
import File from "../inputs/file";
import { EditorContext } from "../../context/editor";

const EmbedImage = () => {
  const { fileName, handleImageChange } = useContext(EditorContext);
  return (
    <div className="embed-image-wrapper">
      <h4>Upload Image</h4>
      <p>FILE UPLOAD {fileName ? `- ${fileName}` : null}</p>
      <File onChange={handleImageChange} />
    </div>
  );
};

export default EmbedImage;
