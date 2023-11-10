export default function ButtonIcon({ icon, onClick, children }) {
  return (
    <button className="btn-icon" onClick={onClick}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
