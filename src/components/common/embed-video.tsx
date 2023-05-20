import Input from "../inputs/input";
import Select from "../inputs/select";

const EmbedVideo = () => {
  return (
    <div className="embed-video">
      <div>
        <p>VIDEO PROVIDER</p>
        <Select options={[{ title: "Youtube", value: "Youtube" }]} />
      </div>
      <div>
        <p>URL</p>
        <Input type="url" />
      </div>
    </div>
  );
};

export default EmbedVideo;
