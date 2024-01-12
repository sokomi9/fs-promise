// const fileSystem = require("node:fs/promises");

// async function palermo(){
//     try{ 
//         const data = await fileSystem.readFile("file.txt", "utf-8");
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// palermo();

const fileSystem = require("node:fs/promises");

fileSystem.readFile("./file.txt", "utf-8",)

.then((data)=> console.log(data))
.catch((error)=> console.log(error))
