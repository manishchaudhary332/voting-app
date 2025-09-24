import { useEffect, useState } from "react";
import api from "../api";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function Results() {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const res = await api.get("/votes/results");
    setResults(res.data);
  };

  useEffect(() => {
    fetchResults();
    const interval = setInterval(fetchResults, 5000); // auto refresh every 5s
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: results.map((r) => r.option),
    datasets: [
      {
        label: "Votes",
        data: results.map((r) => r.count),
        backgroundColor: ["#3b82f6", "#22c55e", "#f59e0b"],
      },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Live Results</h2>
      <Bar data={data} />
    </div>
  );
}
