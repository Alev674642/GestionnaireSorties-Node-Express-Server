const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

export interface IUser{
    _id : string,
    email: string, 
    password:string
    pseudo: string
    plugin(arg : any): any
}

const userSchema : IUser = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pseudo: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
