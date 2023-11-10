export default function ShowCaseLink({
  index,
  showCaseLinkColor,
  showCaseIcons,
  link,
}) {
  return (
    <li
      className="showcase-link"
      key={index}
      style={{ backgroundColor: showCaseLinkColor[link.platform] }}
    >
      {link.platform && showCaseIcons[link.platform]}
      <span>{link.platform}</span>
      &rarr;
    </li>
  );
}
