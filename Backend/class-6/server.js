const express = require ("express");//common js method
require('dotenv').config();
const userRoutes = require("./routes/userRoutes");
const connection = require("./config/db")

const app = express();
app.use(express.json());



// connection to db
connection();

// routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.status(201).send({ msg: "It's working" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 
 