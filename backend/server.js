const express = require("express")
const router = require("./routes/auth");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use("/api/v1",router);


app.listen(PORT,()=>{
	console.log(`App is runnin' on port ${PORT}`);
})
