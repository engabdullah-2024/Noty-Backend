const express = require("express");
const noteModel = require("../model/NoteModel");

const router = express.Router();


// API to create a new note
router.post("/note/create", async (req, res) => {
    const newNote = noteModel(req.body);
    const saveNote = await newNote.save();
    if (saveNote) {
        res.send("Note has been created successfully");
    } else {
        res.status(500).send("Error creating note");
    }
});
router.delete("/note/delete/:id" , async (req, res) =>{
    const deleteResult =     await  noteModel.deleteOne({_id: req.params.id})
    if(deleteResult){
        res.send("Result has been deleted successifully")
    }
})

// API to get all notes
router.get("/note", async (req, res) => {
    const notes = await noteModel.find();
    if (notes) {
        res.send(notes);
    } else {
        res.status(404).send("No notes found");
    }
});

// API to update a note
router.put("/note/update/:id" ,  async(req, res) =>{
    const updateData =  await  noteModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(updateData){
        res.send("Note has been successfully updated")
    }
})

// API to delete a note
router.delete("/note/delete/:id" , async (req, res) =>{
    const deleteResult =     await  noteModel.deleteOne({_id: req.params.id})
    if(deleteResult){
        res.send("Result has been deleted successifully")
    }
})
router.get ("/note/single/:id" , async (req, res) =>{
    const getSingleData= await noteModel.findOne({_id: req.params.id})
    if(getSingleData){
        res.send(getSingleData)
    }
})

module.exports = router;