import React, {useState} from "react";
import axios from "axios";

function Main() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
      };

    const handleSubmit = async () => {
        try {
          const response = await fetch('http://localhost:8000/input/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input: parseInt(input) }),
          });
          const data = await response.json();
          setOutput(data.output);
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return(
        <div className="main">
             <div className="background">
                <div className="glass">
                    <div className="text">
                        Lets Analyse the place you like
                    </div>
                </div>
                <div className="search-container">
                    <div className="search-box">
                            Place Name : 
                            <input type="text" name="search" placeholder="Search" onChange={handleInputChange}/>
                    </div>
                    <button className="search-btn" onClick={handleSubmit}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Main;