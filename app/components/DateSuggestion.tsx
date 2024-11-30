import { motion } from "framer-motion";

interface DateSuggestionProps {
  suggestion: string;
}

export default function DateSuggestion({ suggestion }: DateSuggestionProps) {
  if (!suggestion) return null;

  return (
    <motion.div
      className="p-6 bg-softYellow rounded-lg shadow-lg mt-6 text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Here’s Your Idea:</h2>
      <p className="text-lg">{suggestion}</p>
    </motion.div>
  );
}
