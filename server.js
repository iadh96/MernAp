const express = require("express");
const connectDb = require("./config/connectDb");
const AuthRoute = require("./routes/auth");
const ProductRoutes = require("./routes/Products");
const UsersRoutes= require ("./routes/Users")



require("dotenv").config();
const app = express();
connectDb();


app.use(express.json());
app.use("/api/auth", AuthRoute);
app.use('/api/product',ProductRoutes)
app.use('/api/Users',UsersRoutes)

app.listen(process.env.port, () =>
  console.log(`Server is running on port ${process.env.port}`)
);