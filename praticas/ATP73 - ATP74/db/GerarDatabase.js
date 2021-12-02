import Database from "./Database.js";
import ClienteTable from "./ClienteTable.js";

Database
    .sync()
    .then( ()=> console.log('Sincronizado'))
    .catch( ()=> console.log('ERRO `.`'))