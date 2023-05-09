const Router = require('express').Router();
const { Router, request } = require('express');
const saveNotes = require('../db/notes.js');

Router.get("/notes", function (req, res) {
    saveNotes
    .getNotes()
    .then(notes =>  {
        return res.json(notes);
    })
    .catch(err => {request.statusCode(500).json(err);});
})

Router.post("/notes", (req, res) => {
    saveNotes
    .newNote(req.body)
    .then((notes) => {
        res.json(notes)
        .catch(err => {request.statusCode(500).json(err)});
    }
    )
})

Router.delete("/notes", (req, res) => {
    saveNotes
        .deleteNote(req.body.params.id)
        .then((() => res.json({ alert: "Successfully deleted"}))
        .catch(err => {request.statusCode(500).json(err)}));
})




module.exports = Router;