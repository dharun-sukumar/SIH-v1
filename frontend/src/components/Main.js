import React, {useState} from "react";
import axios from "axios";
// import Map from "./Map";

function Main() {
    const [district, setDistrict] = useState('');
    const [responseData, setResponseData] = useState(null);
  
    const handleInputChange = (event) => {
      setDistrict(event.target.value);
    };
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/search/', {
          params: { input: district }
        });
  
        if (response.status === 200) {
          setResponseData(response.data);
        } else {
          console.error('Failed to retrieve data. Status code:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
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
                    <button className="search-btn" onClick={fetchData}>
                        Search
                    </button>
                </div>
            </div>
            {responseData && (
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        )}
        </div>
    )
}
export default Main;