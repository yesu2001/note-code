import { Schema, model, models } from "mongoose";

const codeSchema = new Schema({
  code_id: {
    type: String,
    required: true,
    unique: true,
  },
  code_text: {
    type: String,
    required: true,
  },
});

const codeModel = models.noteCode || model("noteCode", codeSchema);

export default codeModel;
