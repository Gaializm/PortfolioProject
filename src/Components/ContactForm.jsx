import { useState } from "react";

import style from "../styles/ContactForm.module.css";


const ContactForm = () => {
    const [data, setData] = useState({ name: "", phoneNumber: "", email: "", inquiry: ""});
    const [errors, setErrors] = useState({ general: "" });
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
       
         setData({ ...data, [e.target.name]: e.target.value });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData();
        formData.append("name", data.name.trim());
        formData.append("phoneNumber", data.phoneNumber.trim());
        formData.append("email", data.email.trim());
        formData.append("inquiry", data.inquiry.trim());


        try {
            const response = await fetch("https://web.ics.purdue.edu/placeholder.php", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            if (result.success) {
                setData({ name: "", phoneNumber: "", email: "", inquiry: "" });
                setErrors({ general: "" });
                setSuccessMessage("Data submitted successfully.");
                setTimeout(() => {
                    setSuccessMessage("");
                }, 1000);

            } else {
                setErrors({ general: result.message });
                setSuccessMessage("");
            }

        } catch (error) {
            setErrors({ general: error });
        } finally {
            setSubmitting(false);
        }

    };
    return (
        <form onSubmit={handleSubmit} className={style["contact-form"]}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={data.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                required
                value={data.phoneNumber}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={data.email}
                onChange={handleChange}
            />
            <textarea
                name="inquiry"
                placeholder="What is your inquiry?"
                maxLength={200}
                required
                value={data.inquiry}
                onChange={handleChange}
            ></textarea>
            <p>{data.inquiry.length}/200</p>
            <button type="submit" disabled={submitting || data.name.trim() === "" || data.phoneNumber.trim() === "" || data.email.trim() === "" || data.inquiry.trim() === "" }>Submit</button>
            {errors.general && <p className={style['error']}>{errors.general}</p>}
            {successMessage && <p className={style['success']}>{successMessage}</p>}
        </form>
    );
};

export default ContactForm;