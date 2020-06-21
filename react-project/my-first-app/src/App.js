import React from 'react';
import './App.css'

function App() {
    return (
        <div className="container">
            <header>
                <img src="https://cdn.pixabay.com/photo/2014/04/02/17/01/logo-307673_1280.png" alt=""/>
            </header>
            <nav>
                <ul className='ul'>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
            <main>
                <article>
                    <section className="personBackgroundPhoto">
                    </section>
                    <section className="aboutPerson">
                        <div className="photo">
                        </div>
                        <div className="description">
                            <ul>
                                <li className="name">Egor P.</li>
                                <li>Date of Birth: 1994</li>
                                <li>City: Moscow</li>
                                <li>Education: MSU</li>
                                <li>Website: github</li>

                            </ul>
                        </div>
                    </section>
                </article>
            </main>
        </div>
    )
}

export default App;
