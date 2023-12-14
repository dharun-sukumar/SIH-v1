import React, {useState} from "react";
import Map from "./Map";
import axios from "axios";


function Main() {
    const [postData, setPostData] = useState({data: ''});
    const [fetchedData, setFetchedData] = useState({});
    
    const handleChange = (e) => {
        const data = e.target.value;
        setPostData({
            ...postData,
            data: data
        });
    };

    const postDataToServer = async () => {
        try {
            const url = 'http://localhost:8000/input/';
            const data = postData;
    
            const responseGet = await axios.get(url);

            
            const csrftoken = responseGet.headers['set-cookie']
                .map(cookie => cookie.split('; ')[0])
                .find(cookie => cookie.startsWith('csrftoken='));
    
            const responsePost = await axios({
                method: 'post',
                url: url,
                data: data,
                headers: {
                    'X-CSRFToken': csrftoken
                }
            });
    
            setFetchedData(responsePost.data);
            console.log(responsePost);
            console.log(responsePost.data);
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
            <Map data={fetchedData.data}/>
        </div>
    )
}
export default Main;