/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

describe("DOM Test", () => {
    beforeEach(() => {
        document.body.innerHTML = '<p id="par"></p>'; // Load only this part of the DOM to test
    });

    afterEach(() => {
        document.body.innerHTML = ''; // Clean up the DOM after each test
    });

    test("expect p content to change", () => {
        buttonClick(); // calls the button click function
        expect(document.getElementById('par').innerHTML).toEqual("You Clicked");
    });
});