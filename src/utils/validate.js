export const checkValidData = (emailRef, passwordRef) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    emailRef
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwordRef);

  // const isNameValid = nameRef?.length >= 3;

  
  // if (!isNameValid) return "Name is too short";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
//   export const checkValidData = (name, email, password) => {Z
//     const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
//       email
//     );
//     const isPasswordValid =
//       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

//     // Assuming name should be at least 2 characters long
//     const isNameValid = name.length >= 2;

//     if (!isNameValid) return "Name is too short";
//     if (!isEmailValid) return "Email ID is not valid";
//     if (!isPasswordValid) return "Password is not valid";

//     return null;
//   };
