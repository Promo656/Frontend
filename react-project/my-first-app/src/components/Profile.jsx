import React from "react";

function Profile() {
    return (
        <main className='content'>
            <div className='top-back'>
                <img
                    src="https://vatars.mds.yandex.net/get-pdb/1773776/61bb1562-80ed-4c77-951d-8c929fb0308f/s1200?webp=false"
                    alt=""/>
            </div>
            <div className='profiles-logo'>
                <img
                    src="https://avatars.mds.yandex.net/get-pdb/750514/dd070fae-d858-41e6-a955-01b8a68b79a2/s1200?webp=false"
                    alt=""/>
            </div>
            <div className='about'>
                <ul>
                    <li>Date of Birth:</li>
                    <li>City:</li>
                    <li>Education:</li>
                    <li>Website:</li>
                </ul>
            </div>
        </main>
    )
}

export default Profile