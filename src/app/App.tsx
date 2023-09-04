import { Main } from 'pages/Main';
import { About } from 'pages/About';
import { Work } from 'pages/Work';
import { Dishes } from 'pages/Dishes';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Main/>
                <About/>
                <Work/>
                <Dishes/>
            </div>
        </div>
    );
}

export default App;
