
// making the instances of export object

// module.eports = {} this is the standard formate to export the file . in the same way we are directly exporting the file and
module.exports = function(){                             // here the exports is working as object and export function also when we make an object we give name 
    console.log('print main function');                   // we give name to it instead of doing this here export is the name of object and it work as object
}
module.exports.abc = function(){                     // adding new property or new method to the export object
    console.log('new method is added');
}
