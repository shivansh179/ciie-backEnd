const express = require("express")


const app = express();
app.use(express.json());
const UserModel = require("./Models/User");

const cors = require("cors");
app.use(cors());

require("./db/connection");
const User = require("./Models/User");

app.get("/getUsers", function (req, res) {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.post("/update", async(req, res)=>{
  const user = await User.updateOne({
    Registration_number: req.body.reg_no 
  },{
    status: req.body.status
  })
  res.send(user)
})

app.listen(4000, () => {
  console.log("App is running");
});
