import mongoose, { Schema } from "mongoose";
import passport_local_mongoose from 'passport-local-mongoose';
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
    auth_type: { type: String, required:true },
    username: { type: String, default: '', unique: true },
    password: { type: String, default: '' },
    email: {type: String, default: '', unique: true},
    credits: { type: Number, default: 0 },
  });
  user_schema.plugin(passport_local_mongoose, { usernameField: 'username' });
  // Save schema under model named "users".
  mongoose.model("users", user_schema);
};

export { new_user_schema };
