import { useContext } from "react";
import Input from "../inputs/input";
import Select from "../inputs/select";
import { EditorContext } from "../../context/editor";

const EmbedVideo = () => {
    const { video, handleVideoChange } = useContext(EditorContext)

  return (
    <div className="embed-video">
      <div>
        <p>VIDEO PROVIDER</p>
        <Select options={[{ title: "Youtube", value: "Youtube" }]} />
      </div>
      <div>
        <p>URL</p>
        <Input type="url" onChange={handleVideoChange} value={video} />
      </div>
    </div>
  );
};

export default EmbedVideo;
