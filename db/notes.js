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
        return makeNote('db/db.json', JSON.stringify(note));
    }
    getNotes() {
        return this.read().then((notes) => {
        return [].concat(notes.parse(JSON));
        });
    }
    addNote(note) {
        let note = {title, text}
        const newNote = {title, text, id:()}
}

