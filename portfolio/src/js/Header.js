import React, { Component } from 'react';
import Typed from 'typed.js';

class Header extends Component {
    render() {
        window.onload = () => {
                                  
            let randomNum = Math.floor(Math.random() * 2); 
            let randomNumPic = Math.floor(Math.random() * 4); 
            let timeString = () => {
                let date = new Date();
                if(date.getHours() <=12){
                    return "Morning"
                } else if(date.getHours() >=12 && date.getHours() <=17 ){
                    return "Afternoon"
                } else{
                    return "Evening"
                }
            }
            const messages = [
                              "Get in-touch ⬇",
                              "How's your " + timeString() + " ?",
                            ]    
            
            const bgImages = [
                           "bg-one",
                           "bg-two",
                           "bg-three",
                           "bg-four",
            ]

            let $header = document.querySelector('header')
            $header.classList.add(bgImages[randomNumPic])
            let options = {
                strings: ["It's nice to meet you ^1000","Scroll down to see my work.",messages[randomNum]],
                typeSpeed: 40,
                smartBackspace: true,
                backSpeed: 40,
            }
            let typed = new Typed(".intro-heading", options);
        }
        return (
            //   <!-- Header -->
            <header>
                <div className="container" id="page-top">
                    <div className="intro-text">
                        <div className="intro-lead-in">Welcome To My Online Profile</div>
                        <div style={{display:"inline-block"}} className="intro-heading"></div><br/>
                        <a  href="#contact" className="page-scroll btn btn-xl">Contact me</a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header
