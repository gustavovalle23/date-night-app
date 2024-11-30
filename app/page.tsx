"use client"

import { useState } from "react";
import Layout from "./components/Layout";
import DateForm from "./components/DateForm";
import DateSuggestion from "./components/DateSuggestion";
import FloatingHearts from "./components/FloatingHearts";

export default function Home() {
  const [suggestion, setSuggestion] = useState<string>("Start by choosing your preferences!");

  const fetchSuggestion = async (mood: string, weather: string, budget: string) => {
    const res = await fetch(`/api/suggestion?mood=${mood}&weather=${weather}&budget=${budget}`);
    const data = await res.json();
    setSuggestion(data.suggestion);
  };

  return (
    <Layout>
      <FloatingHearts />
      <DateForm onGenerate={fetchSuggestion} />
      {suggestion && <DateSuggestion suggestion={suggestion} />}
    </Layout>
  );
}
