import { IoLogoGithub, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";
import ShowCaseHeader from "../features/showcase/ShowCaseHeader";
import ShowCaseLinks from "../features/showcase/ShowCaseLinks";

export default function ShowCase() {
  const showCaseLinks = [
    {
      icon: <IoLogoGithub />,
      platform: "github",
      link: "https://www.github.com",
    },
    {
      icon: <IoLogoLinkedin />,
      platform: "linkedin",
      link: "https://www.linkedin.com",
    },
    {
      icon: <IoLogoYoutube />,
      platform: "youtube",
      link: "https://www.youtube.com",
    },
  ];

  const showCaseLinkColor = {
    github: "#2b3137",
    linkedin: "#0077b5",
    youtube: "#CD201F",
  };

  const showCaseIcons = {
    github: <FiGithub />,
    linkedin: <SiLinkedin />,
    youtube: <AiOutlineYoutube />,
  };

  return (
    <div className="showcase-container">
      <ShowCaseHeader />
      <ShowCaseLinks
        showCaseLinks={showCaseLinks}
        showCaseIcons={showCaseIcons}
        showCaseLinkColor={showCaseLinkColor}
      />
    </div>
  );
}
