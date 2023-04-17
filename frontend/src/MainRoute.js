import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Register from './components/Register';


const MainRoute = () => {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path='/register' component={Register}/>
            </Switch>
        </div>
    )
}

export default MainRoute;