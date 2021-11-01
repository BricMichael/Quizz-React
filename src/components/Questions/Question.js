import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import style from './question.module.css';
import { correctAnswerAction } from '../../redux/action/questionsActions';



const Question = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const questions = useSelector(state => state.question.questionsAndAnswer);
    const [valueRadioBox, setValueRadioBox] = useState('');
    const [index, setIndex] = useState(0)

    const onChange = ({ target }) => setValueRadioBox(target.value)

    const condition = index === questions.length - 1;

    const checkAnswerAndSubmit = () => {
        !condition && setIndex(prev => prev + 1); // si no es la ultima pregunta pasar a la siguiente

        questions[index].answer === valueRadioBox && dispatch(correctAnswerAction());

        condition && history.push('/score-questions') // si es la ultima preguna mandar al score
    }

    return (
        <div className={style.contentQuestions}>
            <p className={style.question}>{questions[index]?.question}</p>

            <div className={style.opciones}>
                <div className="optionsGroup">
                    <label htmlFor="1">{questions[index].options[0]}</label>
                    <input type='radio' name='options' onChange={onChange} value={questions[index].options[0]} id='1' />
                </div>

                <div className="optionsGroup">
                    <label htmlFor="2">{questions[index].options[1]}</label>
                    <input type='radio' name='options' onChange={onChange} value={questions[index].options[1]} id='2' />
                </div>

                <div className="optionsGroup">
                    <label htmlFor="3">{questions[index].options[2]}</label>
                    <input type='radio' name='options' onChange={onChange} value={questions[index].options[2]} id='3' />
                </div>

                <div className="optionsGroup">
                    <label htmlFor="4">{questions[index].options[3]}</label>
                    <input type='radio' name='options' onChange={onChange} value={questions[index].options[3]} id='4' />
                </div>

                <button type='submit' className={style.siguiente} onClick={checkAnswerAndSubmit}>
                    Siguiente
                </button>
            </div>
        </div>
    )
}

export default Question;
