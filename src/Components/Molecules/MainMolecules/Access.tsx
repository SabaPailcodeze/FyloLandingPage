import React, { useState } from "react";

const Access = () => {
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
    <div className="bg-[#575988] w-full">
      <div className=" container m-auto flex flex-col gap-8 lg:gap-56 items-center justify-between px-7 lg:px-20 lg:flex-row py-20 md:py-24">
        <div className=" flex gap-4 flex-col max-w-[533px] flex-1">
          <p className="text-center lg:text-left font-raleway text-[18px] md:text-[32px] font-bold leading-[24px] md:leading-[48px] text-white">
            Get early access today
          </p>
          <p className="font-sans text-white text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] text-center lg:text-left">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className=" flex flex-col gap-5 flex-1 relative">
          <input
            type="text"
            value={email}
            onChange={handleInputChange}
            placeholder="email@example.com"
            className={`text-[#c2c2c2] font-sans text-[14px] font-normal py-3 px-5 border rounded-md ${
              errorMessage ? "border-[#EF4877]" : "border-[#07043B]"
            }`}
          />
          {errorMessage && (
            <p className=" text-[12px] md:absolute md:top-11 p-1 text-[#EF4877]">
              Please check your email
            </p>
          )}
          <button
            className="lg:w-[40%] bg-[#2F65F8] text-white shadow-lg drop-shadow-[2px_3px_6px_rgba(0,_0,_0,_0.16)] p-3 rounded hover:bg-[#6C9BFF]"
            onClick={validateEmail}
          >
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Access;
