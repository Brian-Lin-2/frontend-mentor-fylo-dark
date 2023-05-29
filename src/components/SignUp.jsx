import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  let emailStyle =
    "pt-3 pb-2 px-6 rounded-full text-2xs outline-none text-black w-full";

  let errorStyle = "hidden";

  if (error) {
    emailStyle =
      "pt-3 pb-2 px-6 rounded-full text-2xs text-black outline outline-2 outline-red-500 w-full";
    errorStyle = "text-xs text-red-500 text-start mx-5 mt-1 lg:absolute";
  }

  // Imported regex expression.
  const invalidEmail = (email) => {
    return !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = invalidEmail(email);
    setError(error);

    if (!error) {
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col gap-4 text-center px-6 py-8 mx-2 bg-dark-blue-1 rounded-lg relative z-10 lg:mx-48 lg:gap-6 lg:py-10">
      <h1 className="text-base font-bold lg:text-3xl">
        Get early access today
      </h1>
      <p className="font-raleway opacity-80 lg:mx-20">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form
        className="flex flex-col gap-4 pt-4 lg:flex-row lg:justify-center lg:items-center lg:p-0 lg:gap-6"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="lg:w-7/12">
          <input
            className={emailStyle}
            name="email"
            value={email}
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className={errorStyle}>Please enter a valid email address</p>
        </div>
        <button className="bg-gradient-to-r from-cyan to-blue font-bold p-3 rounded-full text-xs lg:w-1/4 hover:to-cyan">
          Get Started For Free
        </button>
      </form>
    </div>
  );
}
