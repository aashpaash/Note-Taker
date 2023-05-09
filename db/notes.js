const fs = require("fs");
const util = require("util");

const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');

const readNote = util.promisify(fs.readFile);
const makeNote = util.promisify(fs.writeFile);


class saveNotes {
    read() {
        write(note){
            return readNote("db.db.json", "utf8")
        ;}
    }
    write(note) {
        return makeNote(('db/db.json', JSON.stringify(note)));
    }
    getNotes(note) {
        return this.read().then((notes) => {
        return [].concat(notes.parse(JSON));
        });
    }
    addNote(note) {
        const {title, text}  = note;

        const newNote = {title, text, id:uuidv4()};

        return this.getNotes() 
        .then(note => {
            note.push(newNote);
            return note;
        })
        .then(note => {
            (updateNote => this.write(note, updateNote))
        }
        .then(() => newNote)

    }
    deleteNote(id) {
        return this.getNotes()
        .then(note => { return this.getNotes()
            .then (note => note.filter(note => note.id === id))
        })
        .then(filteredNotes => this.write(filteredNotes, filteredNotes));

    }


};

module.exports = new saveNotes();
