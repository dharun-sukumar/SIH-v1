import React from "react";
import Test from './Test';
import PiChart from "./PiChart";

function Analytics() {

    return (
        <div className="main">
            <div className="analytics">
                <div className="railway">
                    <div className="text"><b>Railway</b></div>
                    <div className="disance"><span>7.649</span>Km</div>
                </div>
                <div className="airport">
                    <div className="text"><b>Airport</b></div>
                    <div className="disance"><span>7.045</span>Km</div>
                </div>
                <div className="bus">
                    <div className="text"><b>Bus</b></div>
                    <div className="disance"><span>3.534</span>Km</div>
                </div>
                <div className="total-area">
                    <div className="text"><b>Total Area</b></div>
                    <div className="area"><span>96532.69</span>Sq.ft</div>
                </div>
                <div className="population">
                    <div className="text"><b>Population</b></div>
                    <div className="population-number"><span>1200</span>Peoples</div>
                </div>
            </div>
            <div className="analytics-container">
            <Test/>
            <PiChart />
            </div>
            <div className="solution">
                <b>Our Suggestion : </b>
                <pre>This land is suitable to build <span>Hospital</span></pre>
            </div>
        </div>
    );
}

export default Analytics;