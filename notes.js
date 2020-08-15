const chalk = require('chalk');
const fs = require('fs');
const addNotes = (title,body)=>{
    const notes= loadNotes();
    // console.log(notes);
    const duplicate = notes.filter(note=> note.title === title)
    if (duplicate.length === 0){
        console.log(chalk.green.inverse('Note added!'));
            notes.push({
                title : title,
                body : body
            })
            saveNotes(notes);
    }else{
        console.log(chalk.red.inverse("Title already taken!"));
    }

};
const saveNotes=(notes)=>{
    //console.log(JSON.stringify(notes));
    fs.writeFileSync('notes.json',JSON.stringify(notes));
}
const loadNotes=()=>{
    try{
        const databuffer=fs.readFileSync('notes.json');
        const dataJson = databuffer.toString();
        //console.log(dataJson);
        //console.log(JSON.parse(dataJson));
        return JSON.parse(dataJson);
    }catch(e){
        return [];
    }

}

const getNotes = ()=>{
    console.log("Your notes...");
};

const removeNote=(title)=>{
    const notes=loadNotes();
    const newNote =notes.filter(note => note.title !== title)
        if (newNote.length < notes.length){    
        console.log(chalk.green.inverse("Removing the note with title",title));
        }else{
        console.log(chalk.red.inverse("NOT FOUND!"));
        }
        saveNotes(newNote);
}
const listNotes=()=>{
    loadNotes().forEach(note =>{
        console.log(note.body);
    })
}

const readNote=(title)=>{
    var flag=0;
    loadNotes().find(note =>{ 
        if(note.title === title){
            flag +=1
            console.log(chalk.white.inverse(note.title));
            console.log(note.body);
        }
    
    })
    if(flag===0){
        console.log("NOTE NOT FOUND!");
    }
    
}
module.exports ={
    getNotes : getNotes,
    addNotes : addNotes,
    removeNote: removeNote,
    listNotes : listNotes,
    readNote : readNote
}

