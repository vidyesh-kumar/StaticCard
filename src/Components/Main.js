import React from "react"
import About from "./About.js"
import Interest from "./Interest.js"
import Profile from "./Profile.js"
import Footer from "./Footer.js"

export default function App(){
    return  (<main className="main">
                <img src="https://i.ibb.co/G98gR6L/abcd.jpg" className="nav-profile-pic" alt="Profile Pic"/>
                <div className="info">
                <Profile/>
                <About/>
                <Interest/>
                </div>
                <Footer/>
             </main>)
}