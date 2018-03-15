import reducer from './reducer';
import {MAKE_GUESS, GENERATE_AURAL_UPDATE} from './actions';



it('Should return the correct feedback when you make a guess', () => {
    const initialState = {
        guesses: [],
        correctAnswer: 7
    };
    const state = reducer(initialState, {
        type: MAKE_GUESS,
        guess: 13
    });
    expect(state).toEqual({
        feedback: "You're Hot!",
        guesses: [13],
        correctAnswer: 7
    });
});



it('produces the correct Aural Status Update', () => {
    const initialState = {
        guesses: [5, 6],
        correctAnswer: 7,
        guess: 2,
        auralStatus: '',
        feedback: ''
    };

    const state = reducer(initialState, {
        type: GENERATE_AURAL_UPDATE,
        guess: 2,
        guesses: [5, 6],
        correctAnswer: 7,
        feedback: ''
    });

    expect(state).toEqual({
        correctAnswer: 7,
        guess: 2,
        auralStatus: "Here's the status of the game right now:  You've made 2 guesses. In order of most- to least-recent, they are: 6, 5",
        guesses: [6, 5],
        feedback: state.feedback
    });

})

it('it should only let you enter a valid number', () => {
    const initialState = {
        guesses: [],
        correntAnswer: 5,
        guess: null,
    };
    const state = reducer(initialState, {
        type: MAKE_GUESS,
        guess: "guess",
        guesses: [],
        correntAnswer: 5,
    });
    expect(state).toEqual({
        correntAnswer: 5,
        guess: null,
        feedback: "Please enter a valid number.",
        guesses: [NaN],
    });
})