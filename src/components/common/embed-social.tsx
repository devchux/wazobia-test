import Toggle from "../buttons/toggle";
import Input from "../inputs/input";
import Select from "../inputs/select";

const EmbedSocial = () => {
  return (
    <div className="embed-video embed-social">
      <div>
        <p>SOCIAL MEDIA PLATFORM</p>
        <Select options={[{ title: "Facebook", value: "Facebook" }]} />
      </div>
      <div>
        <p>URL</p>
        <Input type="url" />
      </div>
      <div>
        <p>CODE</p>
        <Input type="code" />
      </div>
      <div className="disable-caption">
        <p>Disable caption</p>
        <Toggle />
      </div>
    </div>
  );
};

export default EmbedSocial;
