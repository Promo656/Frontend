import React from 'react';
import './App.css'

function App() {
    return (
        <div className='container'>
            <header className='header'>
                <img src="https://cdn.pixabay.com/photo/2014/04/02/17/01/logo-307673_1280.png" alt=""/>
            </header>
            <nav className='nav'>
                <ul className='ul'>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
            <main className='content'>
                <div className='top-back'>
                    <img
                        src="https://avatars.mds.yandex.net/get-pdb/1773776/61bb1562-80ed-4c77-951d-8c929fb0308f/s1200?webp=false"
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
        </div>
    )
}

export default App;
