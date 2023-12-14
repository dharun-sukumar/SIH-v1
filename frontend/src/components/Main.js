import React, {useState} from "react";
import axios from "axios";
import Cookies from 'js-cookie';

function Main() {
    const [postData, setPostData] = useState({data: ''});
    
    const handleChange = (e) => {
        const data = e.target.value;
        setPostData({
            ...postData,
            data: data
        });
    };

    const postDataToServer = async () => {
        try {
            const url = 'http://localhost:8000/input/'; // Replace with your API endpoint
            const data = postData; // Your POST data
    
            // First, make a GET request to an endpoint that sets the CSRF cookie
            const responseGet = await axios.get(url);
            
            // Then, get the CSRF token from the 'csrftoken' cookie
            const csrftoken = responseGet.headers['set-cookie']
                .map(cookie => cookie.split('; ')[0])
                .find(cookie => cookie.startsWith('csrftoken='));
    
            // Finally, make the POST request with the CSRF token
            const responsePost = await axios({
                method: 'post',
                url: url,
                data: data,
                headers: {
                    'X-CSRFToken': csrftoken
                }
            });
    
            console.log(responsePost); // Use responsePost instead of response
            console.log(responsePost.data); // Use responsePost instead of response
        } catch (error) {
            console.log(error);
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
                            <input type="text" name="search" placeholder="Search" onChange={handleChange}/>
                    </div>
                    <button className="search-btn" onClick={postDataToServer}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Main;