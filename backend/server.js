const app = require("./app");
const connectDatabase = require("./db/Database");

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to an uncaught exception...`);
});

// Load environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "./config/.env",
    });
}

// Connect to the database
connectDatabase();

// Start the server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

