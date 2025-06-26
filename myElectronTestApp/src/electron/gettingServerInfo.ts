import osUtiles from "os-utils"
import fs from "fs";
import { BrowserWindow } from "electron";

export function pollResources(mainWindow:BrowserWindow) {
    setInterval(async()=>{
        let cpuUsage:any = await getCpuUsage();
        let ramUsage:any =  getRamUsage();
        let totalStorage = getStorage().total;
        let freeStorage = getStorage().unusage;
        cpuUsage = cpuUsage.toFixed(2) as unknown as number;
        ramUsage = ramUsage.toFixed(2) as unknown as number;
        totalStorage = totalStorage.toFixed(2) as unknown as number;
        freeStorage = freeStorage.toFixed(2) as unknown as number;

        mainWindow.webContents.send("statistics",{
            cpuUsage,
            ramUsage,
            totalStorage,
            freeStorage
        })
        console.log({cpuUsage,ramUsage,totalStorage,freeStorage})
    },500)
}
function getCpuUsage() {
    return new Promise(resolve =>{
        osUtiles.cpuUsage(resolve);
    } );
}
function getRamUsage() {
    return 1 - osUtiles.freememPercentage()
}
function getStorage() {
    const stats = fs.statfsSync(process.platform === "win32"?"C:///":"/")
    const total = stats.bsize *stats.blocks;
    const free = stats.bsize * stats.bfree;

    return {
        total: Math.floor(total / 1_000_000_000),
        unusage: free /total,
    };
}