import { GENERATE_AURAL_UPDATE, generateAuralUpdate, restartGame, makeGuess,  RESTART_GAME,  MAKE_GUESS } from "./actions";

describe('Generate an Aural Update', () => {
    it('Should return the action', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});


describe('Restart Game', () => {
    it('Should restart the game', () => {
        const action = restartGame(34);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(34);
    });
});




describe('Make Guess', () => {
    it('Should make a Guess', () => {
        const action = makeGuess(12);
        expect(action.guess).toEqual(12);
        expect(action.type).toEqual(MAKE_GUESS);
    });
});