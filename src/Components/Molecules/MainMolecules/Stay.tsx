import StayImg from "../../../assets/ilustration2.svg";
import arrow from "../../../assets/arrow.svg";
import StayCard from "../../Atoms/StayCard/StayCard";
const Stay = () => {
  return (
    <div className="bg-background bg-cover bg-no-repeat">
      <div className="container m-auto flex flex-col-reverse gap-20 lg:gap-10 items-center justify-between px-7 lg:px-20 lg:flex-row py-20 md:py-24">
        <div className="flex flex-col flex-1 gap-10">
          <h1 className="text-#07043B font-raleway md:text-[33px] text-[24px] font-bold text-center lg:text-left">
            Stay productive, wherever you are
          </h1>
          <div className="flex gap-4 flex-col">
            <p className="text-#07043B font-sans leading-5 md:leading-6 font-normal text-[14px] md:text-[16px]  text-center lg:text-left">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-#07043B font-sans leading-5 md:leading-6 font-normal text-[14px] md:text-[16px] text-center lg:text-left ">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <span className="flex justify-center lg:justify-start cursor-pointer gap-2 ">
              <p className="text-[#3DA08F] font-sans font-normal border-b-[1px] border-[#3DA08F] hover:border-[#71DFCC] md:text-[16px] text-[12px]">
                See how Fylo works
              </p>
              <img src={arrow} alt="" />
            </span>
          </div>
          <StayCard />
        </div>
        <div className="flex-1">
          <div>
            <img src={StayImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stay;
