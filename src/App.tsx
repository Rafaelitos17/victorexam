import React, {useState} from 'react';
import './App.css';
import {Table} from "./Table/Table";

function App() {
    let [resultNum, setResultNum] = useState(0)

    const counterNum = () => {
        if(resultNum < 5) setResultNum(++resultNum)
    }

    const removeNum = () => {
        setResultNum(0)
    }

    return (
        <div className="App">
            <Table
                resultNum={resultNum}
                counterNum={counterNum}
                removeNum={removeNum}
            />
        </div>
    );
}

export default App;
