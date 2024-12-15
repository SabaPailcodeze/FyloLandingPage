import { useNavigate } from "react-router-dom";
import FyloImg from "../../../assets/Fylo.svg";

const Header = () => {
  const navigate = useNavigate();
  const changeRoute = (path: string) => {
    navigate(path);
  };
  return (
    <div className="flex items-center justify-between p-6 md:px-20 md:py-16">
      <div className="cursor-pointer max-w-20 max-h-6 md:max-w-40 md:max-h-12">
        <img src={FyloImg} alt="Fylo icon" />
      </div>
      <ul className="flex text-xs gap-7 md:gap-14 md:text-base font-raleway">
        <li
          className="cursor-pointer text-[#07043B] font-normal "
          onClick={() => changeRoute("/features")}
        >
          Features
        </li>
        <li
          className="cursor-pointer text-[#07043B] font-normal"
          onClick={() => changeRoute("/team")}
        >
          Team
        </li>
        <li
          className="cursor-pointer text-[#07043B] font-normal"
          onClick={() => changeRoute("/signin")}
        >
          Sign In
        </li>
      </ul>
    </div>
  );
};

export default Header;
