#!/usr/bin/node
const Squarefrom = require('./5-square');

class Square extends Squarefrom {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let index = 0; index < this.width; index++) {
      console.log(c.repeat(this.height));
    }
  }
}

module.exports = Square;
