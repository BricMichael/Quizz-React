import { types } from "../types";

const initialState = {
    questionsAndAnswer: [
        {
            question: '¿Cuál es el país más grande del mundo por población?',
            options: ['India', 'EE. UU.', 'China', 'Rusia'],
            answer: 'China'
        },
        {
            question: '¿Cuándo terminó la Segunda Guerra Mundial?',
            options: ['1945', '1939', '1944', '1942'],
            answer: '1945'
        },
        {
            question: '¿Cuál fue el primer país en emitir papel moneda?',
            options: ['EE. UU.', 'Francia', 'Italia', 'China'],
            answer: 'China'
        },
        {
            question: '¿Qué ciudad fue sede de los Juegos Olímpicos de Verano de 1996?',
            options: ['Atlanta', 'Sydney', 'Atenas', 'Beijing'],
            answer: 'Atlanta'
        },
        {
            question: '¿Quién inventó el teléfono?',
            options: ['Albert Einstein', 'Alexander Graham Bell', 'Isaac Newton', 'Marie Curie'],
            answer: 'Alexander Graham Bell'
        }
    ],
    score: 0,
}

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.correctAnswer:
            return {
                ...state,
                score: state.score + 1
            }
        case types.resetScore:
            return {
                ...initialState,
            }
        default:
            return state;
    }
}


export default questionsReducer;