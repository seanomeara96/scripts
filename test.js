const axios = require("axios");
const fs = require("fs");
const { JSDOM } = require("jsdom");
let count = 0;
function getPosts() {
  axios
    .get(`https://www.mrmoneymustache.com/blog/page/${count}/`)
    .then((res) => writeFile(res));
}
getPosts();

function writeFile(res) {
  const dom = new JSDOM(res.data);
  let write = [...dom.window.document.querySelectorAll(".post_box")]
    .map(
      (el) =>
        `${el.children[0].textContent}\t${el.children[2].textContent}\t${el.children[2].firstChild.href}\n`
    )
    .join("");
  console.log(write);
  fs.appendFile("mmmPosts.txt", write, (err) => {
    if (err) throw err;
    if (count < 44) {
      count++;
      getPosts();
    }
  });
}
