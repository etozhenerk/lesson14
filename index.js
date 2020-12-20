"use strict";
window.addEventListener("DOMContentLoaded", () => {
  function DomElement(selector, height, width, bg, fontSize, top = 0, left = 0) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.top = top;
    this.left = left;
    this.fontSize = fontSize;
  }
  DomElement.prototype.create = function () {
    if (this.selector[0] === "#") {
      let block = document.createElement("p");
      block.id = this.selector.slice(1);
      block.style.cssText = `
      position: fixed;
      margon: 0;
      transition: all 1s;
      height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize};`;
      document.querySelector("body").append(block);
    } else if (this.selector[0] === ".") {
      let block = document.createElement("div");
      block.style.cssText = `
      position: fixed;
      transition: all 1s;
      height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize};`;
      block.classList.add(this.selector.slice(1));
      document.querySelector("body").append(block);
    }
  };

  DomElement.prototype.move = function (e) {
    const elem = document.querySelector(this.selector);
    let key = e.key;
    if (key === "ArrowUp") {
      this.top -= 10;
    } else if (key === "ArrowDown") {
      this.top += 10;
    } else if (key === "ArrowLeft") {
      this.left -= 10;
    } else if (key === "ArrowRight") {
      this.left += 10;
    }
    elem.style.top = this.top + "px";
    elem.style.left = this.left + "px";
  };

  let elem = new DomElement(".class", "100", "100", "#00D", "30px");
  elem.create();

  document.addEventListener("keydown", elem.move.bind(elem));
});
