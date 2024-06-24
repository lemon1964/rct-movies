import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Category } from './pages/Category';
import { NotFound } from './pages/NotFound';
import { Movie } from './components/Movie';

function App() {
    return (
        <>
            <Router basename='/django-react-movies'>
                <Header />
                <main className='container content'>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/about' component={About} />
                        <Route path='/contacts' component={Contact} />
                        <Route path='/category/:id' component={Category} />
                        <Route path='/movie/:id' component={Movie} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
