import mongoose from 'mongoose';
//schema will define how we will save our data user*/
const userSchema =new mongoose.Schema({
    name:{type: String, required: true},
    email: {type: String, required: true, unique: true, dropDups: true},
    password: { type: String, required: true},
    isAdmin: { type: Boolean, required: true, default: false}
});

const userModel = mongoose.model("User", userSchema);

export default userModel;