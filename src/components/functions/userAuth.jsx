import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate()
    

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (input.username !== "" && input.password !== "") {
            //dispatch action from hooks
        }
        alert("please provide a valid input");
    };


    // Helper function to validate email format
    const validateEmail = (email) => {
        const re = /^[^\s@]+@(.com)$/;
        return re.test(String(email).toLowerCase());
    };
    const handleEmail = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            console.log("Invalid email format");
            return;
        }

        await createUserWithEmail(auth, email)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    return {
        handleInput,
        handleEmail,
        handleSubmitEvent,
    }
}