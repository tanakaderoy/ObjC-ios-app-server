const express = require("express");
const bodyParser = require("body-parser");

const app = express();

class Video {
  constructor(id, title, description, iframe, thumbnail) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.iframe = iframe;
    this.thumbnail = thumbnail;
  }
}
//

app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With",
    "Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST", "GET");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var videos = [
  new Video(
    1,
    "Apple M1 Mac Review: Time to Recalibrate!",
    "The Macbook with M1 chip is... different. Time to think a little different about laptops.\r\n\r\nThat shirt: http://shop.MKBHD.com\r\n\r\nTech I'm using right now: https://www.amazon.com/shop/MKBHD\r\n\r\nIntro Track: Equilibre by Hocus Pocus\r\nPlaylist of MKBHD Intro music: https://goo.gl/B3AWV5\r\n\r\nLaptop provided by Apple for review.\r\n\r\n~\r\nhttp://twitter.com/MKBHD\r\nhttp://instagram.com/MKBHD\r\nhttp://facebook.com/MKBHD",
    '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/f4g2nPY-VZc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
    "https://img.youtube.com/vi/f4g2nPY-VZc/0.jpg"
  ),
  new Video(
    2,
    "Why All Movies From 1999 Are The Same",
    "Check out CuriosityStream and get 30 days for free at https://curiositystream.com/nowyouseeit, with the promocode \u201Cnowyouseeit\"\r\n\r\nThe 90's were a fun, carefree time compared to the decades surrounding it. In 1999, movies critique this stable era, questioning the boring \"American\" life of the stable desk-job. Let's explore this concept and see how movies from 1999 are so 90's.\r\n\r\nTwitter: https://bit.ly/2JPgFT2\r\nPatreon: http://bit.ly/1UaO9MU\r\n\r\n#CubicleMovies",
    '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/RuZKG77vANU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
    "https://img.youtube.com/vi/RuZKG77vANU/0.jpg"
  ),
  new Video(
    3,
    "The Art of Overanalyzing Movies",
    "The first 500 people to click this link will get 2 months of Skillshare for free: https://skl.sh/nowyouseeit6\r\n\r\nWhen is analysis too much? Let's have a look at artistic intent and see when analyzing movies goes too far, and when it doesn't.\r\n\r\nKubrick Interview about 2001: https://bit.ly/2JQ8DtH\r\nTwitter: http://bit.ly/1QvLI0H\r\nPatreon: http://bit.ly/1UaO9MU\r\n\r\nMusic:\r\nWarm --- Joey Pecoraro; found thanks to @TheZenNico",
    '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/h67AHvHMtxY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
    "https://img.youtube.com/vi/h67AHvHMtxY/0.jpg"
  ),
  new Video(
    4,
    "Writing Women",
    'Check out CuriosityStream and get 30 days for free at https://curiositystream.com/nowyouseeit, with the promocode \u201Cnowyouseeit"\r\n\r\nThere isn\u2019t one right way to Write Women, so let\u2019s see how different outstanding filmmakers approach the female experience in different ways. \r\n\r\nTwitter: http://bit.ly/1QvLI0H\r\nPatreon: http://bit.ly/1UaO9MU\r\n\r\nA special thanks to my Patreon supporters!\r\nAlec Johnson\r\nAlyssa Garcia\r\nAmanda de Carvalho\r\nBeverly Paganucci\r\nCameron Edwards\r\nChris Abbott\r\nChristopher Nelson\r\nCristiano Oliveira\r\nDon Lindell\r\nFrank-Rune Sj\u00E5stad\r\nHannah Jones\r\nHenrik Lindhe\r\nHouston Paquette\r\nJeanne Nugent\r\nJosh Prezgay\r\nKristi Delasia\r\nlode desmet\r\nMax Shmorhun\r\nNorman Dorsch\r\nTheodore Aronson\r\nWilliam\r\nZachary Crabtree',
    '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/5asVUCGmmEE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
    "https://img.youtube.com/vi/5asVUCGmmEE/0.jpg"
  )
];

app.get("/videos", (req, res) => {
  console.log("GET from server");
  res.send(videos);
});

app.listen(8003, () => {
  console.log(`Videos available at http://localhost:8003/videos`);
  console.log("listenting to port: 8003");
});
