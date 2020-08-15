const chalk= require('chalk');
const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');



yargs.command({
    command : 'add',
    describe: 'Writing Body Content...',
    builder: {
        title: {
            describe : 'Note title ',
            demandOption: true,
            type : 'string',
               },
        body: {
            describe : 'Note body ',
            demandOption: true,
            type : 'string',
               }
            },
    handler : function(argv){
        notes.addNotes(argv.title,argv.body);
    }
    
})

yargs.command({
    command : 'remove',
    describe : 'Removing a Note title',
    builder : {
        title : {
            describe : 'Removing title',
            demandOption: true ,
            type : 'string'
        }
    },
    handler : function(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command : 'read',
    describe : 'Reading a Note',
    builder : {
        title : {
            describe : 'Reading title ',
            demandOption: true ,
            type : 'string'
        }
    },
    handler : function(argv){
        notes.readNote(argv.title);
    }
})

yargs.command({
    command : 'list',
    describe : 'Listing all Your Notes',
    handler : function(){
        console.log(chalk.yellowBright.italic("Your notes..."));
        notes.listNotes();
    }
})
yargs.parse();

//to run this,just type in the terminal the following:
//node fun.js <command name> (--title/body in case of add and --title in case of read)   