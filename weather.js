const fs =require('fs');
const notes =require('./notes.js');
const _ =require('lodash');
const yargs =require('yargs');

//var note =notes.addNote(yargs.argv.title,yargs.argv.body);
/*var note =notes.removeNote(yargs.argv.title,yargs.argv.body);
if(note){
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}
  */
  /*
var allNotes = notes.getAllNotes();
  console.log(`length: ${allNotes.length}`);
allNotes.forEach((note)=>{
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
})
*/
var obj={
    color:'red',
    smell:'good',
    getColor:()=>{
      console.log(`${this.color}`);
    },
    getSmell(){
        console.log(arguments);
      console.log(`${this.smell}`);
    }
}
//obj.getColor();
obj.getSmell(1,2,4,2);
