const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    title: "JB's Coin Assistant",
    icon: path.join(__dirname, "assets/667.jpg"),
    backgroundColor: "#000000", // preload color
    titleBarStyle: "hidden",
    frame: true,
    width: 900,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  console.log(`pass`);
  win.loadURL("http://localhost:1999");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
