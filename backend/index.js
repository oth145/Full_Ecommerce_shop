import express from "express";
import mongoose from "mongoose";
import routes from "./routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://othmane:ottmmanee145@database_oth.zhrzthc.mongodb.net/?retryWrites=true&w=majority&appName=database_oth/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}).then(() => {
  console.log("connected");
}).catch((err) => {
  console.log('not connected:', err);
});

app.get('/', (req, res) => {
  res.send("Hello from NODE API");
});
routes(app);


const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log("server is running" );
});
