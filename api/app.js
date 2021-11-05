var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");
var getAPIResponseRouter = require("./routes/getApiResponse");
const api_helper = require("./API_helper");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);
//app.use("/getApiResponse", getApiResponseRouter);
app.get("/getAPIResponse/seasonalStats", (req, res) => {
  //res.set("Referer", "https://www.ea.com");
  api_helper
    .make_API_call(
      "https://proclubs.ea.com/api/fifa/clubs/seasonalStats?platform=ps4&clubIds=552898"
    )
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});
app.get("/getAPIResponse/memberStats", (req, res) => {
  //res.set("Referer", "https://www.ea.com");
  api_helper
    .make_API_call(
      "https://proclubs.ea.com/api/fifa/members/stats?platform=ps4&clubId=552898"
    )
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});
app.get("/getAPIResponse/clubInfo", (req, res) => {
  //res.set("Referer", "https://www.ea.com");
  api_helper
    .make_API_call(
      "https://proclubs.ea.com/api/fifa/clubs/info?matchType=gameType13&platform=ps4&clubIds=552898"
    )
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});
app.get("/getAPIResponse/clubInfo/:id", (req, res) => {
  //res.set("Referer", "https://www.ea.com");
  api_helper
    .make_API_call(
      `https://proclubs.ea.com/api/fifa/clubs/info?matchType=gameType13&platform=ps4&clubIds=${req.params.id}`
    )

    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
