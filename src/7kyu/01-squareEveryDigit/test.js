const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(squareDigits(3212), 9414);
    assert.strictEqual(squareDigits(2112), 4114);
    assert.strictEqual(squareDigits(0), 0);
    })
  })
