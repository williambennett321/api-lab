import mongoose from "mongoose"


const Schema = mongoose.Schema


const dogSchema = new Schema({
  breed: {type: String, required: true},
  parent: {type: String, default: "Who knows"},
  siblings: {type: String, default: "No Siblings"}
})

const Dog = mongoose.model("Dog", dogSchema)

export {
  Dog
}