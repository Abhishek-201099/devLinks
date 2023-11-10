import { HiOutlineTrash } from "react-icons/hi2";
import { IoLogoGithub, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import FormRow from "../../ui/FormRow";
import Select, { components } from "react-select";
import { Controller } from "react-hook-form";

export default function FormLinkRow({
  register,
  errors,
  currentIndex,
  remove,
  control,
}) {
  const optionsList = [
    {
      value: "github",
      label: "Github",
      icon: <IoLogoGithub />,
    },
    {
      value: "linkedin",
      label: "LinkedIn",
      icon: <IoLogoLinkedin />,
    },
    {
      value: "youtube",
      label: "Youtube",
      icon: <IoLogoYoutube />,
    },
  ];

  const { Option } = components;

  function customSelectOption(props) {
    return (
      <Option {...props}>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          {props.data.icon && props.data.icon}
          <span>{props.data.label}</span>
        </div>
      </Option>
    );
  }

  // function customSelectValue(props) {
  //   return props.data.label;
  // }

  return (
    <div className="formlinkrow-container">
      <div className="formlinkrow-header">
        <p>Link #{currentIndex + 1}</p>
        <button
          className="formlinkrow-removebtn"
          onClick={() => remove(currentIndex)}
        >
          <HiOutlineTrash />
          <span>Remove</span>
        </button>
      </div>

      <div className="formlinkrow-body">
        <FormRow label="Platform" error={errors?.platform?.message}>
          <Controller
            control={control}
            name={`devLinks.${currentIndex}.platform`}
            render={({ field }) => {
              return (
                <Select
                  id="platform"
                  options={optionsList}
                  isSearchable={false}
                  {...field}
                  placeholder={
                    <div>
                      <IoLogoGithub /> Github
                    </div>
                  }
                  components={{
                    Option: customSelectOption,
                  }}
                />
              );
            }}
          />
        </FormRow>
        <FormRow label="Link" error={errors?.link?.message}>
          <input
            type="url"
            id="link"
            {...register(`devLinks.${currentIndex}.link`, {
              required: "This field is required",
            })}
          />
        </FormRow>
      </div>
    </div>
  );
}
