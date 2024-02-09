const assert = require("assert");
const {Given,When, Then } = require("@cucumber/cucumber");

const  isItFriday = today => {
    return today === 'Friday' ? 'TGIF' : 'Nope';
}


When("I ask whether it's Friday yet", () => {
  this.actualAnswer = isItFriday(this.today);
});


Given('today is Friday', () => {
    this.today = 'Friday';
})


Given('today is Sunday', () => {
  this.today = 'Sunday';
})

Then('I should be told {string}', (s) => {
    assert.strictEqual(this.actualAnswer, s);
})
