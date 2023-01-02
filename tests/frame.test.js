const Frame = require('../lib/frame.js')

describe("Frame", () => {
  it ("stores roll total as three", () => {
    const frame = new Frame(1)
    frame.firstRoll = 1
    frame.secondRoll = 2

    expect(frame.frameScore()).toEqual(3);
  })

  it ("stores roll total as ten", () => {
    const frame = new Frame(1)
    frame.firstRoll = 4
    frame.secondRoll = 6

    expect(frame.frameScore()).toEqual(10);
  })
});