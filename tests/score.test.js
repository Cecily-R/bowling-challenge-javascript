const Score = require('../lib/score.js');
const Frame = require('../lib/frame.js');

describe("Score", () => {
  it ("combines the scores of two frames and returns a total score of 14", () => {
    const firstFrame = new Frame(1);
    firstFrame.firstRoll = 4
    firstFrame.secondRoll = 5

    const secondFrame = new Frame(2);
    secondFrame.firstRoll = 1
    secondFrame.secondRoll = 4

    const frames = [firstFrame, secondFrame];
    const score = new Score(frames);

    expect(score.totalScore()).toEqual(14);
  })

  it("returns a value of 36 when player scores a strike", ()  => {
    const firstFrame = new Frame(1)
    firstFrame.firstRoll = 10

    const secondFrame = new Frame(2)
    secondFrame.firstRoll = 2
    secondFrame.secondRoll = 6

    const frames = [firstFrame, secondFrame];
    const score = new Score(frames);

    expect(score.totalScore()).toEqual(36);
  });
});