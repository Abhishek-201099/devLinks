import ShowCaseLink from "./ShowCaseLink";

export default function ShowCaseLinks({
  showCaseLinks,
  showCaseIcons,
  showCaseLinkColor,
}) {
  return (
    <ul className="showcase-links">
      {showCaseLinks.map((link, index) => (
        <ShowCaseLink
          key={index}
          showCaseIcons={showCaseIcons}
          showCaseLinkColor={showCaseLinkColor}
          link={link}
        />
      ))}
    </ul>
  );
}
