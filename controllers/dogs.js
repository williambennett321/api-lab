import { Dog } from "../models/dog.js"



function index(req,res) {
  Dog.find({})
  .then(dogs => {
    res.status(200).json(dogs)
  })
.catch(err => {
  res.json(err)
  })
}

function show(req, res) {
  Dog.findById(req.params.id)
  .then(dog => {
    res.json(dog)
  })
}

function create(req,res) {
  Dog.create(req.body)
  .then(dog => {
    res.json(dog)
  })
  .catch(err => {
    res.json(err)
  })
}

function update(req,res) {
  Dog.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((dog) => {
    res.json(dog)
  })
}

function deleteDog(req, res) {
  Dog.findByIdAndDelete(req.params.id)
  .then(dog => {
    res.json(dog)
  })
}
export {
  index,
  show,
  create,
  update,
  deleteDog as delete
}