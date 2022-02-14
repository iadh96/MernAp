const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("db connected");
  } catch (error) {
    console.log({ msg: "db is not connected", error });
  }
};

module.exports = connectDb;