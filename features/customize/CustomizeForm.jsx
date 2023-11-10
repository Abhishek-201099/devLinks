import AddLink from "../../ui/AddLink";
import Form from "../../ui/Form";
import FormLinkRow from "./FormLinkRow";
import ButtonIcon from "../../ui/ButtonIcon";
import { useForm, useFieldArray } from "react-hook-form";

export default function CustomizeForm() {
  const { register, formState, handleSubmit, control } = useForm({
    defaultValues: {
      devLinks: [{ platform: "", link: "" }],
    },
  });
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "devLinks",
    control,
    rules: {
      required: "Add at least one field item",
    },
  });

  function onSubmit(data) {
    console.log("Form Data ", data);
  }

  return (
    <div className="customize-form-container">
      <AddLink onClick={() => append({ platform: "github", link: "" })}>
        + Add new link
      </AddLink>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <FormLinkRow
            key={field.id}
            currentIndex={index}
            register={register}
            remove={remove}
            errors={errors}
            control={control}
          />
        ))}

        <div>
          <ButtonIcon>Save</ButtonIcon>
        </div>
      </Form>
    </div>
  );
}
