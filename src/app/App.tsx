import { Main } from 'pages/Main';
import { About } from 'pages/About';
import { Work } from 'pages/Work';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Main/>
                <About/>
                <Work/>
            </div>
        </div>
    );
}

export default App;
