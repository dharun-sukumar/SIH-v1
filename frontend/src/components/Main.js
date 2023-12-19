import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Main() {
    const navigate = useNavigate()
    const [district, setDistrict] = useState('');

    const handleInputChange = (event) => {
        setDistrict(event.target.value);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/search/', {
                params: { input: district }
            });
    
            if (response.status === 200) {
                console.log('Response data:', response.data);
                navigate('/map', { state: { polygonData: response.data } });
                console.log(response.data.data.polygon);
            } else {
                console.error('Failed to retrieve data. Status code:', response.status);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="main">
            <div className="background">
                <div className="glass">
                    <div className="text">
                        Let's Analyze the place you like
                    </div>
                </div>
                <div className="search-container">
                    <div className="search-box">
                        Place Name :
                        <input type="text" name="search" placeholder="Search" onChange={handleInputChange} />
                    </div>
                    <button className="search-btn" onClick={fetchData}>
                        Search
                    </button>
                </div>
            </div>
            {/* <Map polygonData={responseData} /> */}
        </div>
    );
}

export default Main;
