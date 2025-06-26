import {app, BrowserWindow} from "electron";
import path from "path"
import { isDev } from "./util.js";
import { pollResources } from "./gettingServerInfo.js";
//@ts-ignore
import { getPreloadPath } from "./pathResolver.js";

app.on("ready",()=>{
    const mainWindow = new BrowserWindow({
        title:"Feuerwerk Controller",
        fullscreen:true,
        icon:undefined,
        webPreferences:{
            preload:getPreloadPath(),
        },
        autoHideMenuBar:true, 

    })
    if (isDev()) {
        mainWindow.loadURL("http://localhost:5173")
    }else{
        mainWindow.loadFile(path.join(app.getAppPath(),"/distReact/index.html"));
    }
   pollResources(mainWindow);
})