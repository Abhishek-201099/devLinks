export default function FormRow({ label, children, error }) {
  return (
    <div className="form-row">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <p>{error}</p>}
    </div>
  );
}
