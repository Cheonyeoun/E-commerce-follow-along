const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });  // Load environment variables

const app = require("./App");
const connectDatabase = require("./db/Database"); // Ensure correct import

// Connect Database
connectDatabase();

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to an uncaught exception`);
});

// Create Server
const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 5000}`);
});
