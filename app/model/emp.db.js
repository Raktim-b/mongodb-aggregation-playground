const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmpSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  skills: [
    {
      type: String,
    },
  ],
  address: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  projects: [
    {
      name: {
        type: String,
        required: true,
      },

      status: {
        type: String,
        required: true,
      },

      budget: {
        type: Number,
        required: true,
      },
    },
  ],
});
const empModel = mongoose.model("employee", EmpSchema);
module.exports = empModel;
