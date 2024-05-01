import './App.css';
import { Divider, Steps } from 'antd';
import { useState } from 'react';
const { Step } = Steps;

function App() {
    const [current, setCurrent] = useState(1);

    return (
        <div className="App">
            <header className="App-header">
                <Steps current={2}>
                    <Step title="Finish"></Step>
                    <Step title="In Progress"></Step>
                    <Step title="Waiting"></Step>
                </Steps>
                <Divider />
                <Steps
                    current={current}
                    labelPlacement="vertical"
                    onChange={(e) => {
                        console.log(e);
                        setCurrent(e);
                    }}
                >
                    <Step title="Finish"></Step>
                    <Step title="In Progress"></Step>
                    <Step title="Waiting"></Step>
                </Steps>
            </header>
        </div>
    );
}
export default App;
