import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from '../components/Home/Welcome';
import Question from '../components/Questions/Question';
import Score from '../components/Score/Score';



const Routes = () => {
    return (
        <Router>
            <Switch>

                <Route path='/score-questions' exact component={Score} />
                <Route path='/questions' exact component={Question} />
                <Route path='/' exact component={Welcome} />
            </Switch>
        </Router>
    )
}

export default Routes;
