"use strict";

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}
DomElement.prototype.create = function () {
  if (this.selector[0] === "#") {
    let block = document.createElement("p");
    block.id = this.selector.slice(1);
    block.style.cssText = `
    height: ${this.height};
    width: ${this.width};
    background: ${this.bg};
    font-size: ${this.fontSize};`;
    block.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorem hic incidunt! Non, dignissimos iusto sit aperiam neque vitae ad illum praesentium provident laborum excepturi ex dicta explicabo cum fugiat?";
    document.querySelector("body").append(block);
  } else if (this.selector[0] === ".") {
    let block = document.createElement("div");
    block.style.cssText = `
    height: ${this.height};
    width: ${this.width};
    background: ${this.bg};
    font-size: ${this.fontSize};`;
    block.classList.add(this.selector.slice(1));
    block.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolorem hic incidunt! Non, dignissimos iusto sit aperiam neque vitae ad illum praesentium provident laborum excepturi ex dicta explicabo cum fugiat?";
    document.querySelector("body").append(block);
  }
};

let elem = new DomElement("#class", "20%", "80%", "url('https://mdn.mozillademos.org/files/11983/starsolid.gif') #00D repeat-y fixed", "120px");
console.log(elem);
elem.create();
