import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import Logo from "./Logo";
import { HiLink, HiOutlineEye, HiOutlineUserCircle } from "react-icons/hi2";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="section-header">
      <Logo>🔗DevLinks</Logo>
      <div className="main-links">
        <ButtonIcon icon={<HiLink />} onClick={() => navigate("/")}>
          Links
        </ButtonIcon>
        <ButtonIcon
          icon={<HiOutlineUserCircle />}
          onClick={() => navigate("/settings")}
        >
          Profile Details
        </ButtonIcon>
      </div>
      <div className="preview-link">
        <ButtonIcon
          icon={<HiOutlineEye />}
          onClick={() => navigate("/preview")}
        >
          Preview
        </ButtonIcon>
      </div>
    </header>
  );
}
