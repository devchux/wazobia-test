import { IoVideocam } from "react-icons/io5";
import { AiFillPicture } from "react-icons/ai";
import UploadButton from "../buttons/upload";
import SocialIcon from "../common/social-icon";
import { useContext, useState } from "react";
import EmbedModal from "./modal";
import EmbedImage from "../common/embed-image";
import { EmbedState, IModalContent } from "../../constants/type";
import EmbedVideo from "../common/embed-video";
import EmbedSocial from "../common/embed-social";
import { EditorContext } from "../../context/editor";

const EmbedDropdown = () => {
  const [show, setShow] = useState<boolean>(false);
  const [modalPrompt, setModalPrompt] = useState<boolean>(false);
  const [content, setContent] = useState<EmbedState>("picture");
  const { onEmbedImage } = useContext(EditorContext);

  const toggle = () => setShow(!show);

  const toggleModal = () => setModalPrompt(!modalPrompt);

  const openEmbedModal = (type: EmbedState) => {
    setContent(type);
    setModalPrompt(true);
    setShow(false);
  };

  const dropdownOptions = [
    {
      title: "Picture",
      subtitle: "Jpeg, png",
      icon: <AiFillPicture />,
      onClick: () => openEmbedModal("picture"),
    },
    {
      title: "Video",
      subtitle: "Embed a YouTube video",
      icon: <IoVideocam />,
      onClick: () => openEmbedModal("video"),
    },
    {
      title: "Social",
      subtitle: "Embed a Facebook link",
      icon: <SocialIcon />,
      onClick: () => openEmbedModal("social"),
    },
  ];

  const modalContent: IModalContent = {
    picture: {
      node: <EmbedImage />,
      onEmbed: onEmbedImage,
    },
    video: {
      node: <EmbedVideo />,
      onEmbed: () => null,
    },
    social: {
      node: <EmbedSocial />,
      onEmbed: () => null,
    },
  };

  return (
    <div className="embed-dropdown-wrapper">
      <UploadButton onClick={toggle} />
      <div
        className={`embed-dropdown-list-wrapper ${
          show ? "embed-dropdown-list-wrapper-active" : ""
        }`}
      >
        <h3>EMBEDS</h3>
        <div>
          {dropdownOptions.map((item) => (
            <div
              className="embed-dropdown-item-wrapper"
              key={item.title}
              onClick={item.onClick}
            >
              <div className="icon">{item.icon}</div>
              <div className="text">
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <EmbedModal
        isOpen={modalPrompt}
        toggle={toggleModal}
        onEmbed={modalContent[content].onEmbed}
      >
        {modalContent[content].node}
      </EmbedModal>
    </div>
  );
};

export default EmbedDropdown;
