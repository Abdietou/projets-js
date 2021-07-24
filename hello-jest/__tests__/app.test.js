//const app = require('../app.js');

import app from '../app.js';

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

describe('Moderator', () => {
    it('contains forbidden words', () => {
        expect(app.containsForbiddenWords('Vous êtes tous des truffes')).toEqual(true);
    });

    // todo permet de pas execueter ce TU pas complet qui faits sauter tous les autres
    it.todo('remove forbidden words');

    it('remove all forbidden words', () => {
        expect(app.removeForbiddenWords('Vous êtes tous des débiles')).toEqual('Vous êtes tous des xxx');
    });

    it('return the same sentence is no forbidden words detected', () => {
        expect(app.removeForbiddenWords('Vous êtes des anges')).toEqual('Vous êtes des anges');
    });
});