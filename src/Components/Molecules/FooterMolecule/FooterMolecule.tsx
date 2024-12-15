import FyloImage from "../../../assets/FyloIcon.svg";
import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import twitter from "../../../assets/twitter.svg";
import phone from "../../../assets/phone.svg";
import gmail from "../../../assets/gmailsvg.svg";
import "../../../index.css";

const FooterMolecule = () => {
  return (
    <div className="w-full bg-[#07043B]">
      <div className=" py-20 flex flex-col container m-auto gap-9 justify-between px-7 lg:px-20 md:py-24">
        <div>
          <img src={FyloImage} alt="" />
        </div>
        <div className="flex flex-col text-white md:justify-between gap-8 md:flex-row ">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <img src={phone} alt="" />
              <p>Phone: +1-543-123-4567</p>
            </div>
            <div className="flex gap-4">
              <img src={gmail} alt="" />
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="cursor-pointer hover:text-[#6C9BFF] font-sans font-normal">
              About Us
            </p>
            <p className="cursor-pointer hover:text-[#6C9BFF] font-sans font-normal">
              Jobs
            </p>
            <p className="cursor-pointer hover:text-[#6C9BFF] font-sans font-normal">
              Press
            </p>
            <p className="cursor-pointer hover:text-[#6C9BFF] font-sans font-normal">
              Blog
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="cursor-pointer hover:text-[#6C9BFF] font-sans font-normal">
              Contact Us
            </p>
            <p className="cursor-pointer hover:text-[#6C9BFF] font-sans font-normal">
              Terms
            </p>
            <p className="cursor-pointer hover:text-[#6C9BFF] font-sans font-normal">
              Privacy
            </p>
          </div>
          <div className="flex gap-3 justify-center md:justify-start">
            <div>
              <img src={facebook} alt="" className="cursor-pointer facebook" />
            </div>
            <div>
              <img src={twitter} alt="" className="cursor-pointer twitter" />
            </div>

            <div>
              <img
                src={instagram}
                alt=""
                className="cursor-pointer instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMolecule;
