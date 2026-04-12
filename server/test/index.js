const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const FoodRouter = require("./routes/foodRouter")
const MenuRouter = require("./routes/menuRouter")
const EventRouter = require("./routes/eventRouter")
const UserRouter = require("./routes/userRouter")
const connectDatabase = require("./config/db")

dotenv.config();
connectDatabase();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", UserRouter);
app.use("/api/v1/group", FoodRouter);
app.use("/api/v1/menu", MenuRouter);
app.use("/api/v1/event", EventRouter);


app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
