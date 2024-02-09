const assert = require("assert");
const { Given, When, Then } = require("cucumber");

const  isItFriday = today => {
    return today === 'Friday' ? 'TGIF' : 'Nope';
}

Given('today is Sunday', function () {
    this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (string) {
    assert.equal(this.actualAnswer, string);
});

Given('today is Friday', () => {
    this.today = 'Friday';
})
