let main = require("../public/main.js");

let expect = require("chai").expect;
let re = require("../public/song.js");

describe("song",function () {
    it("print all song word", function () {

        let num = 99;
        let result = main(num);
        let expectWord = re();
        expect(result).to.equal(expectWord)
    });

});