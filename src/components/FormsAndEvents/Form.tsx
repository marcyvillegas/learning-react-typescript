import { useState } from "react";

type FormDataType = {
  firstName: string;
  lastName: string;
};

const initialFormData: FormDataType = {
  firstName: "",
  lastName: "",
};

function Form() {
  const [formData, setFormData] = useState<FormDataType>(initialFormData);
  const [showSubmission, setShowSubmission] = useState<boolean>(false);
  const { firstName, lastName } = formData;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setShowSubmission(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      {showSubmission && <p>Hello {firstName}!</p>}
    </div>
  );
}

export default Form;
