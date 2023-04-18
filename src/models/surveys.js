import mongoose, { Schema } from "mongoose";

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
  _user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  dateSent: Date,
  lastResponded: Date,
});

const Survey = mongoose.model("surveys", surveys_schema);

export default Survey;
