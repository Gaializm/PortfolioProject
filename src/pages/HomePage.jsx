import Header from "../components/Header";
import SkillsCarousel from "../components/SkillsCarousel";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Wrapper from "../components/Wrapper";
import About from "../components/About";
import Projects from "../components/Projects";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import React, { useState } from 'react';

const HomePage = () => {
    const [formDisplay, setFormDisplay] = useState(false);

    const handleDisplayForm = () => {
        setFormDisplay(!formDisplay);
    };

    return (
        <>
            <Header />
            <main>
                <Wrapper>
                    <Banner formStatus={formDisplay} displayForm={handleDisplayForm} />
                </Wrapper>
                <section id="about">
                    <Wrapper>
                        <About />
                    </Wrapper>
                </section>
                <SkillsCarousel />
                <section id="projects">
                    <Projects />
                </section>
                <section id="testimonials">
                    <TestimonialsCarousel />
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
    );
};

export default HomePage;