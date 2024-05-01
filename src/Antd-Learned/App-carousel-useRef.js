import './App.css';
import { Carousel, Button } from 'antd';
import { useRef } from 'react';
import './override.scss';

function App() {
    const ref = useRef();
    return (
        <div className="App">
            <header className="App-header">
                <div style={{ width: '300px', height: '300px', backgroundColor: 'orange' }}>
                    <Carousel
                        autoplay
                        dots={true}
                        dotPosition="bottom"
                        effect="fade"
                        pauseOnHover={true}
                        pauseOnDotsHover={true}
                        draggable
                        ref={ref}
                    >
                        <div>
                            <h1 style={{ color: 'black', lineHeight: '300px', background: 'teal' }}>Slide 1</h1>
                        </div>
                        <div>
                            <h1 style={{ color: 'black', lineHeight: '300px', background: 'green' }}>Slide 2</h1>
                        </div>
                        <div>
                            <h1 style={{ color: 'black', lineHeight: '300px', background: 'pink' }}>Slide 3</h1>
                        </div>
                        <div>
                            <h1 style={{ color: 'black', lineHeight: '300px', background: 'blue' }}>Slide 4</h1>
                        </div>
                    </Carousel>
                    <Button onClick={() => ref.current.prev()}>Prev</Button>
                    <Button onClick={() => ref.current.goTo(0)}>Reset</Button>
                    <Button onClick={() => ref.current.next()}>Next</Button>
                </div>
            </header>
        </div>
    );
}
export default App;
