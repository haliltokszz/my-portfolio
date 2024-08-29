import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaCog, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: FaLightbulb,
    title: "Ideation",
    description: "Brainstorming and concept development",
  },
  {
    icon: FaCode,
    title: "Development",
    description: "Coding and implementation",
  },
  {
    icon: FaCog,
    title: "Testing",
    description: "Quality assurance and refinement",
  },
  {
    icon: FaRocket,
    title: "Deployment",
    description: "Launch and maintenance",
  },
];

export default function DevelopmentProcess() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Development Process
        </h2>
        <div className="relative w-80 h-80 mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="absolute w-32 h-32 flex flex-col items-center justify-center"
              style={{
                top: `${50 - 40 * Math.cos((index * Math.PI) / 2)}%`,
                left: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-2">
                <step.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-white text-center">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 text-center mt-1">
                {step.description}
              </p>
            </motion.div>
          ))}
          <div className="absolute inset-0 border-4 border-blue-500 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}