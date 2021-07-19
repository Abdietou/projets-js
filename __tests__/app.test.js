const app = require('../app.js');

describe('Palindrom', () => {
    // it('should receive a entence', () => {
    //     expect(app.sentence.length).toBeGreaterThan(0);
    // });

    // it('should have a length of 11 letters', () => {
    //     expect(app.sentence.length).toEqual(11);
    // });

    // un palindrom est une phrase ou un mot qui se lit dans les deux sens
    it('should receive a palindrom', () => {
        expect(app.isPalindrom('kayak')).toEqual(true);
    });

    it('should not be a palindrom', () => {
        expect(app.isPalindrom('azerty')).toEqual(false);
    });

}); 