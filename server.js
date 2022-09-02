import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/user", (req, res) => {
  res.json({ msg: "Hello!!!" }).status(200);
});

app.listen(5000, ()=>{
    console.log('App Started')
})