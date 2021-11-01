import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { resetStateAction } from "../../redux/action/questionsActions";
import style from './score.module.css';


const Score = () => {
    const dispatch = useDispatch();

    const score = useSelector(state => state.question.score);

    const resetStateReducer = () => dispatch(resetStateAction());
    return (
        <div className={style.contentScore}>
            <h3 className={style.contentScore__title}>Respuestas correctas: {score}</h3>

            <Link className={style.restart} to='/' onClick={resetStateReducer} >Regresar</Link>
        </div>
    )
}

export default Score
