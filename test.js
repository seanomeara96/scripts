const axios = require("axios");
const { JSDOM } = require("jsdom");
let count = 0;
let links;
axios
  .get("https://beautyfeatures.ie/the-ordinary/")
  .then((res) => {
    let dom = new JSDOM(res.data);
    links = new Array(...dom.window.document.querySelectorAll("a"));
    links = links.map((a) => a.href);
    console.log(links.length);
    logLinkInfo();
  })
  .catch((err) => {
    console.error(err);
  });
async function logLinkInfo() {
  let href = links[count];
  let res;
  if (href.startsWith("http") || href.startsWith("/")) {
    if (href.startsWith("/")) {
      href = "https://www.beautyfeatures.ie" + href;
    }
    try {
      res = await axios.get(href);
    } catch (err) {
      console.log(err);
    }
  }
  if (count < links.length) {
    console.log(count, href, res ? res.status : null);
    count++;
    logLinkInfo();
  }
}
