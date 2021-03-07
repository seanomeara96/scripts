const axios = require("axios"),
  fs = require("fs"),
  { JSDOM } = require("jsdom");
let count = 0;
/**
 * Gets posts from specified url and writes them to a file
 */
function getPosts() {
  axios
    .get(`https://www.mrmoneymustache.com/blog/page/${count}/`)
    .then((res) => writeFile(res));
}
/**
 * Parses html and writes necessary info to file
 * @param {string} data is a string of html recived from the req res
 */
function writeFile({ data }) {
  fs.appendFile(
    "mmmPosts.txt",
    [...new JSDOM(data).window.document.querySelectorAll(".post_box")]
      .map(
        (el) =>
          `${el.children[0].textContent}\t${el.children[2].textContent}\t${el.children[2].firstChild.href}\n`
      )
      .join(""),
    (err) => {
      if (err) throw err;
      if (count < 44) {
        count++;
        getPosts();
      }
    }
  );
}

getPosts();
