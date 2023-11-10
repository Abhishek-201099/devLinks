import CustomizeForm from "../features/customize/CustomizeForm";

export default function CustomizeProfile() {
  return (
    <div className="section-customize">
      <h2 className="customize-heading">Customize your links</h2>
      <p className="customize-text">
        Add/edit/remove links below and then share your profiles with the world
      </p>

      <CustomizeForm />
    </div>
  );
}
