import mongoose from "mongoose";
const { Schema } = mongoose;

const new_user_schema = () => {
  const user_schema = new Schema({
    google_ID: String
  });

  mongoose.model("users", user_schema);
};

export { new_user_schema };
