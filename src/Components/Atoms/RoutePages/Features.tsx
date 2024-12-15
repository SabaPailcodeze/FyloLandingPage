import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Features = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="w-ful justify-center items-center flex flex-col gap-3">
      <h1 className="text-blue-700">This is features page</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <button
          className="bg-[#2F65F8] hover:bg-[#6C9BFF] text-white px-6 py-2 rounded-lg transition-all"
          onClick={goHome}
        >
          Go Home!
        </button>
      </motion.div>
    </div>
  );
};

export default Features;
