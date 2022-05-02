const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },
  addLink(value) { 
    this.result.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || isNaN(position) || position > this.getLength() || position < 1) {
      this.result = [];
      throw new Error('You can\'t remove incorrect link!');
    } 
    else {
      this.result.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let str = this.result.join("~~");
    this.result = [];
    return str;
  }
}

module.exports = {
  chainMaker
};
