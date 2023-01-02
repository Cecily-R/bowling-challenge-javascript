class Frame {
  constructor(frameNumber) {
    this.frameNumber = frameNumber;
    this.firstRoll = null;
    this.secondRoll = null;
  }

  rolls() {
    [this.firstRoll, this.secondRoll]
  };

  frameScore() {
   return parseInt(this.firstRoll + this.secondRoll)
  }

};

module.exports = Frame;