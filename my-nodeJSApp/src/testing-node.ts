//system info über os.

import os from "os"
let freeMemory = os.freemem();
console.log("freier arbeitsspeicher "+freeMemory)

//filesystem info /zugriff über fs
import fs from "fs"
import path from "path";

//nach datein filtern

const folderPath = "./src";
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile();
};

const datein =fs.readdirSync(folderPath)
                .map(fileName => path.join(folderPath, fileName))
                .filter(isFile);
console.log(datein)