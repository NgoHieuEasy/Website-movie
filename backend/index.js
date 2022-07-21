const express= require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRoute=require("./routes/auth")
const userRoute=require("./routes/user")
const movieRoute=require("./routes/movies")
const listRoute=require("./routes/list")
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    .then(()=>console.log("connect DB successfull"))
    .catch((err)=>console.log(err));
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8700,()=>{
    console.log("Backend server running...");
})