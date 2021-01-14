const axios = require("axios");
const { JSDOM } = require("jsdom");
const fs = require("fs");
let data = [];
let pageNumber = 1;
async function getPosts() {
  console.log("page", pageNumber);
  axios
    .get(`https://www.beautyfeatures.ie/blog/?page=${pageNumber}`)
    .then((res) => {
      const dom = new JSDOM(res.data);
      const blogPosts = [
        ...dom.window.document.querySelectorAll(".blog-title a"),
      ];
      console.log("blogPosts.length", blogPosts.length);
      if (blogPosts.length) {
        blogPosts.forEach((a) => data.push(`${a.innerHTML}\t${a.href}`));
        pageNumber++;
        getPosts();
      } else {
        fs.writeFile("./blogs.txt", data.join("\n"), "utf8", (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("success");
          }
        });
      }
    })
    .catch((err) => console.error(err));
}

getPosts();
