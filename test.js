const axios = require("axios");
const fs = require("fs");
let offset = 0;
let url = `https://asgard.thehut.net/infinite`;

function queryBlogPosts() {
  axios
    .post(url, {
      offset,
      exclude: [
        "102074",
        "102205",
        "102506",
        "33908",
        "102674",
        "102749",
        "102689",
        "37459",
        "24015",
      ],
      link: "https://www.lookfantastic.com/blog",
      token:
        "309ec20fbb98225e0bc04ae52030e5c23de8025732ddecd70f783b8a7255bef8630165e888cc5ff199e66e9a82a3a204dc3501fde3b66a2b79f3f085e26ff396",
      currency: "GBP",
    })
    .then((res) => {
      if (res.data.data.length) {
        let string = res.data.data
          .map((element) => {
            return `${element.title}\t${element.date}\t${element.titleLink}\n`;
          })
          .join("");
        console.log(string);
        fs.appendFile("lookfantasticPosts.txt", string, (err) => {
          if (err) throw err;
          offset += 5;
          queryBlogPosts();
        });
      } else {
        console.log("finished?");
      }
    });
}

queryBlogPosts();
