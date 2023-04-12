import mongoose, { Schema } from "mongoose";

const new_surveys_schema = () => {
  const Recipients_schema = new Schema({
    email: String,
    responded: { type: Boolean, default: false },
  });

  const surveys_schema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [Recipients_schema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: "users" },
    date_sent: Date,
    last_responded: Date,
  });

  mongoose.model("surveys", surveys_schema);
};

export default new_surveys_schema;
