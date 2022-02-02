let footer = document.createElement("footer");
let row = document.createElement("div");
row.className = "row container";
footer.append(row);
root.append(footer);

function createRowItems(str, obj) {
  let rowItems = document.createElement("div");
  rowItems.className = "row-items";
  const heading = document.createElement("h4");
  heading.innerText = str;
  rowItems.append(heading);

  for (let key in obj) {
    const a = document.createElement("a");
    a.innerText = key;
    a.href = obj[key];
    rowItems.append(a);
  }
  return rowItems;
}

function createRowSocial(str, obj) {
  let rowItems = document.createElement("div");
  rowItems.className = "row-items row-social";
  const heading = document.createElement("h4");
  heading.innerText = str;

  const socialMedia = document.createElement("div");
  socialMedia.className = "social-media";

  for (let key in obj) {
    const a = document.createElement("a");
    const i = document.createElement("i");
    a.href = obj[key];
    i.className = key;
    a.append(i);
    socialMedia.append(a);
  }
  rowItems.append(heading, socialMedia);
  return rowItems;
}

const socialRow = {
  "fab fa-facebook-f": "https://www.facebook.com/",
  "fab fa-instagram": "https://www.instagram.com/",
  "fab fa-telegram": "https://web.telegram.org/z/",
};
const firstRow = {
  Home: "https://www.google.com/",
  About: "https://javascript.info/",
  Store: "https://www.w3schools.com/",
};
const secondRow = {
  First: "https://www.google.com/",
  Second: "https://javascript.info/",
  Third: "https://www.w3schools.com/",
};

let row1 = createRowItems("Company", firstRow);
let row2 = createRowItems("Contact", secondRow);
let row3 = createRowSocial("Follow Us", socialRow);

row.append(row1);
row.append(row2);
row.append(row3);
