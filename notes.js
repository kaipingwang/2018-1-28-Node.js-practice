const fs = require('fs');
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('test.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('test.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};
var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);//filter out will not stay and left items will be saved

  return notes.length !== filteredNotes.length;
};

var getNote =(title) =>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title == title);
  return filteredNotes[0];
}

var getAllNotes =()=>{
  return fetchNotes();
}

module.exports={
  removeNote,
  addNote,
  getNote,
  saveNotes,
  fetchNotes,
  getAllNotes
}
