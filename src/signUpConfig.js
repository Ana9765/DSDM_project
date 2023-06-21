const signUpConfig = {
  header: "Customized Sign Up",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Nume",
      key: "family_name",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Prenume",
      key: "given_name",
      required: true,
      displayOrder: 2,
      type: "string",
    },
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 3,
      type: "string",
    },
    {
      label: "Username",
      key: "username",
      required: true,
      displayOrder: 4,
      type: "string",
    },
    {
      label: "Parola",
      key: "password",
      required: true,
      displayOrder: 5,
      type: "string",
    },
  ],
};
