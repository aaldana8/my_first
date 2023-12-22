import React from "react";


const Updates = () => {
    return (
    <div>
        <div className='updates-container'>
            <div className='updates-header'>Changelogs</div>
            <div className='updates-body'>
                <div className='updates-eachchange'>
                <h1>v0.1.4</h1>
                    <h2>Released Dec 21th, 2023</h2>
                    <h3>Added</h3>
                    <ul>
                        <li>AddQuestion - can manage questions</li>
                    </ul> 

                    <h1>v0.1.0-beta</h1>
                    <h2>Released Aug 12th, 2023</h2>
                    <h3>Added</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Updates</li>
                        <li>MajorChooser application</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Updates;