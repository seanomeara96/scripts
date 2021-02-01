const axios = require("axios");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const Path = require("path");
let count = 0;
axios
  .get("https://beautyfeatures.ie/the-ordinary/")
  .then((res) => {
    let dom = new JSDOM(res.data);
    let imgs = new Array(...dom.window.document.querySelectorAll("img"));
    imgs.forEach((item) => {
      axios
        .get(item.src, { responseType: "stream" })
        .then((img) => {
          const saveLocation = `./images/${count}.jpg`;
          const writer = fs.createWriteStream(saveLocation);
          img.data.pipe(writer);
          return new Promise((resolve, reject) => {
            writer.on("finish", resolve);
            writer.on("error", reject);
          });
        })
        .catch((err) => console.error(err));
      count++;
    });
  })
  .catch((err) => console.error(err));
