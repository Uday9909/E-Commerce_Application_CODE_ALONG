const app = require("./app");
const connectDatabase = require("./db/Database");
const path = require("path");

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.error(`Error: ${err.message}`);
    console.error("Shutting down the server due to an uncaught exception...");
    process.exit(1);
});

// Load environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: path.resolve(__dirname, "./config/.env"), // Use absolute path for safety
    });
}

// Debug log to verify environment variables
console.log("Environment Variables:", process.env);

// Connect to the database
connectDatabase();

// Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.error(`Error: ${err.message}`);
    console.error("Shutting down the server due to an unhandled promise rejection...");
    server.close(() => {
        process.exit(1);
    });
});
