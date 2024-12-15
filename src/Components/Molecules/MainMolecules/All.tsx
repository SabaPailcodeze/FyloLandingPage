import ilustration from "../../../assets/illustration.svg";
import { useState } from "react";

const All = () => {
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errorMessage) {
      setErrorMessage(false);
    }
  };

  return (
    <div className="container m-auto flex flex-col-reverse lg:flex-row items-center justify-between px-7 py-20 gap-10 mb-2 lg:mb-48 lg:py-3 lg:gap-6 lg:px-20 pb-20 md:pb-36">
      <div className="flex flex-col flex-1 justify-between gap-5">
        <h1 className="text-[#07043B] text-[24px] text-center lg:text-left font-bold leading-9 md:text-4xl md:font-raleway md:leading-[60px]">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-[#07043B] text-[14px] font-normal leading-5 text-center md:text-[17px] md:left-6 lg:text-left font-sans">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className="flex flex-col justify-between md:flex-row gap-4 md:relative">
          <input
            type="text"
            placeholder="Enter your email…"
            onChange={handleInputChange}
            value={email}
            className={`md:w-3/5 text-[#c2c2c2] font-sans text-[14px] font-normal py-3 px-5 border rounded-md ${
              errorMessage ? "border-[red]" : "border-[#07043B]"
            }`}
          />
          {errorMessage && (
            <p className=" text-[12px] md:absolute md:top-12 p-1 text-[#EF4877]">
              Please check your email
            </p>
          )}

          <button
            className="md:w-2/5 bg-[#2F65F8] text-white shadow-lg drop-shadow-[2px_3px_6px_rgba(0,_0,_0,_0.16)] p-3 rounded hover:bg-[#6C9BFF]"
            onClick={validateEmail}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src={ilustration} alt="ilustration of fylo" />
      </div>
    </div>
  );
};

export default All;
