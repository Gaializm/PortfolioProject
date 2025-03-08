import Header from "./components/Header";
import SkillsCarousel from "./components/SkillsCarousel";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Wrapper from "./components/Wrapper";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";
import React, { useState } from 'react';
import project1Image from './assets/project1.png';
import project2Image from './assets/project2.jpg';
import project3Image from './assets/project3.png';


const App = () => {


    const myProjects = [
        {
            id: 1,
            photo: project1Image,
            projectName: 'Examining Trends in Educational Attainment',
            description: 'In this project I put to the test my data visualization skills and assembled a Tableau dashboard examining trends in educational attainment as measured by the U.S. Census Bureau, primarily within the Puertorican population.'
        },
        {
            id: 2,
            photo: project2Image,
            projectName: 'Realistic Landscape Digital Illustration',
            description: 'This digital illustration intends to recreate a real landscape from Pelicano Beach, Isabela, PR. I created it myself over the course of a week utilizing Krita, digital illustration software.'
        },
        {
            id: 3,
            photo: project3Image,
            projectName: 'Wearable Fitness Tracker App Wirefrane',
            description: 'Here is a screenshot of an interactive wireframe I created as part of a User Experience Design course. It is intended to be an innovative wearable fitness tracker application to gamify exercise and encourage users to view it as a more fun activity.'
        }
    ]

    const [formDisplay, setFormDisplay] = useState(false);

    const handleDisplayForm = () => {
        setFormDisplay(!formDisplay);
    }


    return (
        <>
                <Header />
            <main>
                <Wrapper>
                    <Banner formStatus={formDisplay} displayForm={ handleDisplayForm } />
                </Wrapper>
                <section id="about">
                    <Wrapper>
                        <About />
                    </Wrapper>
                </section>
                <Wrapper>
                <h2>My Skills</h2>
                   <SkillsCarousel />
                </Wrapper>
                <section id="projects">
                    <Wrapper>
                        <h1>My Projects</h1>
                        {myProjects.map(myProject => <ProjectCard key={myProject.id} {...myProject} />)}
                </Wrapper>
                </section>
                <section id="testimonials">
                    <Wrapper>
                        <h2>Testimonials</h2>   
                        <TestimonialsCarousel />
                    </Wrapper>
                </section>
                <section id="contact">
                <Wrapper>
                   <Contact />
                    </Wrapper>
                </section>
                  <Footer />

                {/* Contact Form Popup */}
                {formDisplay && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <button className="close-button" onClick={handleDisplayForm}>
                                &times; {/* Close button (X) */}
                            </button>
                            <ContactForm />
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}

export default App;
