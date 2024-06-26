import React, { useEffect, useState } from 'react';
import Roadmap from './RoadMap';
import axiosInstance from "../Helper/axiosInstance"
function App() {
    const [techStack, setTechStack] = useState("");
    const [level, setLevel] = useState('');

    useEffect(() => {
        axiosInstance.post("/level/predict", {

        })
    }, [])
    return (
        <div className="App">
            <h1>Roadmap</h1>
            <Roadmap techStack={techStack} level={level} />
        </div>
    );
}

export default App;