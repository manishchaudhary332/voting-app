import { useNavigate } from "react-router-dom";
import api from "../api";

const options = ["Option A", "Option B", "Option C"];

export default function Voting() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleVote = async (option) => {
    try {
      await api.post("/votes", { userId: user._id, option });
      alert("Vote cast successfully!");
      navigate("/results");
    } catch (error) {
      alert(error.response?.data?.message || "Voting failed");
    }
  };

  if (!user) return <p className="text-center mt-10">Please login first</p>;

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Cast Your Vote</h2>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => handleVote(opt)}
          className="w-full bg-green-600 text-white py-2 rounded mb-2"
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
