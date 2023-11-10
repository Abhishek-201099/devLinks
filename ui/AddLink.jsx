export default function AddLink({ onClick, children }) {
  return (
    <button onClick={onClick} className="add-link-btn">
      {children}
    </button>
  );
}
