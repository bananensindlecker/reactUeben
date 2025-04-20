import {app, BrowserWindow} from "electron";
import path from "path"
import { isDev } from "./util.js";
import { pollResources } from "./gettingServerInfo.js";

app.on("ready",()=>{
    const mainWindow = new BrowserWindow({})
    if (isDev()) {
        mainWindow.loadURL("http://localhost:5173")
    }else{
        mainWindow.loadFile(path.join(app.getAppPath(),"/distReact/index.html"));
    }
   pollResources();
})