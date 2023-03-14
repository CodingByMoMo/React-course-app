import mongoose, { Schema } from "mongoose";
/**
 * @author CodingByMoMo
 * @description This function creates new schema for mongoDB Database.
 *
 */
const new_user_schema = () => {
  /**
   * @type {Schema}
   * @description Crate new Schema for user.
   *
   */
  const user_schema = new Schema({
    googleId: String,
  });
  // Save schema under model named "users".
  mongoose.model("users", user_schema);
};

export { new_user_schema };
