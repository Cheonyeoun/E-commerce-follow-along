const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDB successfully connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(`MongoDB Connection Error: ${err.message}`);
    });
};

module.exports = connectDatabase;
