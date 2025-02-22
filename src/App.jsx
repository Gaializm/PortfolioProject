import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Wrapper from "./components/Wrapper";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import "./App.css";
import React, { useState } from 'react';
import image from './assets/outlined-placeholder-blank.svg';
import projectImage from './assets/placeholderProjectImage.jpg';



const App = () => {


    const myProjects = [
        {
            id: 1,
            photo: projectImage,
            projectName: 'Project 1',
            description: 'ABC'
        },
        {
            id: 2,
            photo: projectImage,
            projectName: 'Project 2',
            description: 'DEF'
        },
        {
            id: 3,
            photo: projectImage,
            projectName: 'Project 3',
            description: 'GHI'
        }
    ]

    const testimonialQuotes = [
        {
            id: 1,
            icon: image,
            name: 'Sandy',
            testimonial: 'Gaia did a good job!'
        },
        {
            id: 2,
            icon: image,
            name: 'Bob',
            testimonial: 'Gaia did a great job!'
        },
        {
            id: 3,
            icon: image,
            name: 'Patrick',
            testimonial: 'Gaia did an awesome job!'
        }
    ]

    const [formDisplay, setFormDisplay] = useState(false);

    const handleDisplayForm = () => {
        setFormDisplay(!formDisplay);
    }


    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Wrapper>
                    <Banner formStatus={formDisplay} displayForm={ handleDisplayForm } />
                </Wrapper>
                <Wrapper>
                    <h1>Portfolio Project</h1>
                </Wrapper>
                <Wrapper>
                   <Carousel />
                </Wrapper>
                <section id="about"> 
                <Wrapper>
                  <About />
                    </Wrapper>
                </section>
                <section id="projects">
                <Wrapper>
                        {myProjects.map(myProject => <ProjectCard key={myProject.id} {...myProject} />)}
                </Wrapper>
                </section>
                <section id="testimonials">
                <Wrapper>
                        {testimonialQuotes.map(testimonialQuote => <Quote key={testimonialQuote.id} {...testimonialQuote} />)}
                    </Wrapper>
                </section>
                <section id="contact">
                <Wrapper>
                   <Contact />
                    </Wrapper>
                </section>
                <Wrapper>
                  <Footer />
                </Wrapper>
            </main>
        </>
    )
}

export default App;
