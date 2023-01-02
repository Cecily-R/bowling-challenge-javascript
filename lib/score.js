const Frame = require('./frame.js')

class Score {
  constructor(frames) {
    this.frames = frames
  }

  totalScore() {
    return this.sumScore() + this.bonusScore();
  };

  sumScore() {
    const scores = this.frames.map((frame) => frame.frameScore())

    return scores.reduce((accumulator, currentValue) => {
       return accumulator + currentValue 
    }, 0);
  };

  bonusScore() {
    const bonusScore = 0
    this.frames.forEach(function (frame, index) {
      if (frame.firstRoll === 10) {
        return bonusScore =+ frame[index + 1].frameScore;
      } else if (frame.firstRoll + frame.secondRoll == 10) {
        return bonusScore =+ frame[index + 1]. firstRoll;
      }
    }
  )}
};

module.exports = Score;