import {fileOpen, directoryOpen,fileSave,supported} from 'https://unpkg.com/browser-fs-access';

async function pahatexty() {
        
  var userInput = document.getElementById("myText").value;
  var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
      const fileHandle = await window.showSaveFilePicker();
      // const fileHandle = await window.chooseFileSystemEntries();
      const fileStream = await fileHandle.createWritable();
      await fileStream.write(blob);
      await fileStream.close();
}

window.pahatexty=pahatexty;