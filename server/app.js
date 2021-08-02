const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

//import routers
const debugRouter = require("./routers/debug.js");
const userRouter = require("./routers/user.js");
const globalErrorHandler = require("./routers/errors");
const questionRouter = require("./routers/question.js");
const messageRouter = require("./routers/message.js");

//parsing request body
app.use(express.json());
app.use(cookieParser());
if (process.env.NODE_ENV === "development") app.use(debugRouter);

app.get("/api/hello", (req, res) => {
  res.status(200).json({ hello: "world" });
});

app.use("/users", userRouter);
app.use('/api/questions', questionRouter);
app.use('/messages', messageRouter);
// //route handler for main page
// app.get('/', (req,res) => {
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });

app.use(globalErrorHandler); // Added global error middlware
app.listen(3000, () => {
  console.log("Express server listening on port 3000.");
});
