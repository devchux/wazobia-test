import { useContext } from "react";
import Toggle from "../buttons/toggle";
import Input from "../inputs/input";
import Select from "../inputs/select";
import { EditorContext } from "../../context/editor";

const EmbedSocial = () => {
  const { handleSocialChange, socials } = useContext(EditorContext);
  return (
    <div className="embed-video embed-social">
      <div>
        <p>SOCIAL MEDIA PLATFORM</p>
        <Select options={[{ title: "Facebook", value: "Facebook" }]} />
      </div>
      <div>
        <p>URL</p>
        <Input
          type="url"
          name="url"
          value={socials.url}
          onChange={handleSocialChange}
        />
      </div>
      <div>
        <p>CODE</p>
        <Input
          type="text"
          name="code"
          value={socials.code}
          onChange={handleSocialChange}
        />
      </div>
      <div className="disable-caption">
        <p>Disable caption</p>
        <Toggle />
      </div>
    </div>
  );
};

export default EmbedSocial;
