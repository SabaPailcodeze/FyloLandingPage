import profile from "../../../assets/profilepicture.svg";

const StayCard = () => {
  return (
    <div className="w-full flex justify-center lg:justify-start">
      <div className="flex flex-col bg-white rounded-md shadow-custom-shadow md:max-w-sm max-w-[280px] pt-9 pb-5 px-6 relative gap-5 md:pb-7 md:pt-11 md:px-8">
        <p className="text-[#07043B] text-[35px] md:text-[45px] font-nunito absolute top-0">
          “
        </p>
        <p className="font-sans text-[10px] md:text-[13px] font-normal text-[#07043B]">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="flex gap-2.5 ">
          <div className="max-w-8 max-h-8">
            <img src={profile} alt="" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#07043B] font-sans text-[9px] font-bold md:text-[11px]">
              Kyle Burton
            </h3>
            <p className="text-[#07043be2] font-sans text-[6px] font-normal md:text-[8px]">
              Founder & CEO, Huddle
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayCard;
