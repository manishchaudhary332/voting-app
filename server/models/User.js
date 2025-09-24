import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  hasVoted: { type: Boolean, default: false }
});

const User = mongoose.model("User", userSchema);
export default User;
