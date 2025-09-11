const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { readdirSync } = require("fs");
const campingRoute = require("./route/camping");
const profileRoute = require("./route/profile");
const handleError = require("./middlewares/error");
require("dotenv/config");
const { clerkMiddleware } = require("@clerk/express");
const app = express();
const PORT = 5000;

//middleware
app.use(cors());
app.use(express.json({limit:"10mb"}));
app.use(morgan("dev"));
app.use(clerkMiddleware())

//route
readdirSync("./route").map((r) => app.use("/api", require("./route/" + r)));

app.use(handleError);

app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`);
});
