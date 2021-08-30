const express = require("express");
const morgan = require("morgan");

const hostname = "localhost";
const port = 3000;

const app = express();

app.use(morgan("dev"));

const dishRouter = require("./dishRouter");
app.use("/dishes", dishRouter.router);

const promoRouter = require("./promoRouter");
app.use("/promotions", promoRouter.router);

const leaderRouter = require("./leaderRouter");
app.use("/leadership", leaderRouter.router);

app.use(express.static(__dirname + "/public"));

app.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
