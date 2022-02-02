/* Attached background photo */


let section = document.createElement('section')
let attachedBck = document.createElement("div");
attachedBck.className = "img-attach";

let attachedBck_text = document.createElement("h1");
attachedBck_text.innerText =
  `Lorem ipsum dolor sit, 
   amet consectetur adipisicing elit. Esse, consectetur.`;

attachedBck.append(attachedBck_text)
section.append(attachedBck)
root.append(section)