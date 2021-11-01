import { Link } from 'react-router-dom';
import style from './welcome.module.css';


const Welcome = () => {
    return (
        <div className={style.contentWelcome}>
            <h2 className={style.welcomeTitle}>Bienvenido al Quizz</h2>

            <Link to='/questions' className={style.start}>Iniciar prueba</Link>
        </div>
    )
}

export default Welcome;
