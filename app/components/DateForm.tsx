import { useState } from "react";

interface DateFormProps {
  onGenerate: (mood: string, weather: string, budget: string) => void;
}

export default function DateForm({ onGenerate }: DateFormProps) {
  const [mood, setMood] = useState<string>("");
  const [weather, setWeather] = useState<string>("");
  const [budget, setBudget] = useState<string>("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <label className="block mb-2">Mood</label>
      <select
        className="w-full p-2 border rounded mb-4"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      >
        <option value="">Select Mood</option>
        <option value="romantic">Romantic</option>
        <option value="adventurous">Adventurous</option>
        <option value="cozy">Cozy</option>
      </select>

      <label className="block mb-2">Weather</label>
      <select
        className="w-full p-2 border rounded mb-4"
        value={weather}
        onChange={(e) => setWeather(e.target.value)}
      >
        <option value="">Select Weather</option>
        <option value="sunny">Sunny</option>
        <option value="rainy">Rainy</option>
        <option value="snowy">Snowy</option>
      </select>

      <label className="block mb-2">Budget</label>
      <select
        className="w-full p-2 border rounded mb-4"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      >
        <option value="">Select Budget</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button
        onClick={() => onGenerate(mood, weather, budget)}
        className="w-full bg-warmRed text-white py-2 rounded-lg hover:bg-red-500 transition"
      >
        Surprise Me! 🎉
      </button>
    </div>
  );
}
