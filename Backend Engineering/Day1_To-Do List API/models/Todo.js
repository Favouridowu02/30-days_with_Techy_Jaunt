const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/todo-app", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDb connected successfully"))
    .catch((err) => console.error("Mongodb Connection error:", err))

const todoSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        completed: {type: Boolean, default: false}
    },
    {timestamps: true}
)

module.exports = mongoose.model("Todo", todoSchema);