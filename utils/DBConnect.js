var mongoose = require("mongoose");

const DBConnection = async () => {
  let db = await mongoose.connect(
    process.env.MONGO_URL,
    {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    },
    (err) => (err ? console.error(err) : console.log("Db connection success"))
  );
};
export default DBConnection;
