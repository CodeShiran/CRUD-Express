import express, { urlencoded } from "express";
const app = express();
import mongoose from "mongoose";
import { Product } from "./model/product.model.js";
import { router } from "./routes/product.route.js";


app.use(express.json())
app.use(urlencoded({extended: true}))


app.use('/api/products', router)

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(
    "mongodb+srv://shiran:shiran@cluster0.cyqoegt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to the db");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((error) => console.log(error));

