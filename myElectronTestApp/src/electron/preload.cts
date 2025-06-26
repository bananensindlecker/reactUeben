import electron from "electron"



electron.contextBridge.exposeInMainWorld("electron",{
    statistics:(callback:(statistics:any)=>void)=>{
        electron.ipcRenderer.on("statistics",(_,data)=>{
            callback(data);
        })
    },
    getStaticData: ()=> console.log("static"),
})