const express = require("express");
const app = express();

app.get("/health", (req, res, next) => {
	res.status(200).send("Hello!");
});

app.listen(8080, () => {
	console.log("Server running on port 8080");
});
