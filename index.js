import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "Type in your URL: ",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;

    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qrcode.png'));

    fs.writeFile('log.txt', url, (err) => {
        if (err) throw err;

        console.log("the file has been saved!");
    })
    
  })
  .catch((error) => {
    if (error.isTtyError) {
        // ...
    } else {
      // ...
    }
  });