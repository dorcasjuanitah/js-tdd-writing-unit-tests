// Your tests here
import {pointsForWord} from "../utils";

describe ("pointForWord", () => {
    it("calculates the total points for a word (1 point per vowel, 2 per Consonant)", () => {

        const word = "test";

        const points = pointsForWord(word);

        expect(points).toBe(7);
    });
});

// The key here is that we're using the expect function and passing in an "expected" value to test, and we're using the .toBe matcherLinks to an external site. to check that points is exactly 7.