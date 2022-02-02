const root = document.querySelector("#root");

const header = document.createElement("header");
header.className = "header container";
root.append(header);

function createLogo(name) {
  const logo = document.createElement("div");
  logo.className = "logo";

  const logoName = document.createElement("h2");
  logoName.innerText = name;
  logo.append(logoName);
  header.append(logo);
}

function createNav(objList) {
  const nav = document.createElement("nav");
  nav.className = "nav";
  const ul = document.createElement("ul");
  ul.className = "nav-ul";

  for (let key in objList) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    li.className = "nav-li";
    a.innerText = key;
    a.href = objList[key];
    li.append(a);
    ul.append(li);
  }

  nav.append(ul);
  header.append(nav);
  // return   header.append(nav);  verevi te returnov toxy grel?
}

const objList = {
  First: "https://www.google.com/",
  Second: "https://javascript.info/",
  Third: "https://www.w3schools.com/",
};

createLogo("CompanyName");
createNav(objList);

