const links = require("./csvjson.json");
const fs = require("fs");
let data = [];
links.forEach((item) => {
  item["Internal outlinks"].split("\n").forEach((link) => {
    if (link.startsWith("http:")) {
      data.push(`${item["URL"]}, ${link}\n`);
    }
  });
});

fs.writeFile("./formatted.csv", data.join(""), "utf8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});
