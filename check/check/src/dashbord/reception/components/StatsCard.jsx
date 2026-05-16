import { motion } from "framer-motion";

const StatsCard = ({ title, value, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-5"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-zinc-400 text-sm">{title}</p>

          <h2 className="text-3xl font-bold text-white mt-2">{value}</h2>
        </div>

        <div className="bg-cyan-500/20 p-3 rounded-2xl">
          <Icon className="text-cyan-400" />
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;
