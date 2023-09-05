import { Main } from 'pages/Main';
import { About } from 'pages/About';
import { Work } from 'pages/Work';
import { Dishes } from 'pages/Dishes';
import { Chefs } from 'pages/Chefs';
import { Recipes } from 'pages/Recipes';
import { Social } from 'pages/Social';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Main/>
                <About/>
                <Work/>
                <Dishes/>
                <Chefs/>
                <Recipes/>
                <Social/>
            </div>
        </div>
    );
}

export default App;
