import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function createAccountForm() {
    const navigate = useNavigate();

    function showPassword() {
        const passwordField = document.getElementById("password");
        const confirmPassword = document.getElementById("confirm_password");
        const togglePassword = document.getElementById("toggle_password");

        if (passwordField.type === "password") {
            passwordField.type = "text";
            confirmPassword.type = "text";
            togglePassword.textContent = "Hide Password";
        } else {
            passwordField.type = "password";
            confirmPassword.type = "password";
            togglePassword.textContent = "Show Password";
        }
    }

    function validatePassword(e) {
        e.preventDefault();
        const username = document.getElementById("username");
        const usernameError = document.getElementById("username_error");
        const passwordField = document.getElementById("password");
        const passwordError = document.getElementById("password_error");
        const confirmPassword = document.getElementById("confirm_password");
        const confirmPasswordError = document.getElementById("confirmPassword_error");

        let isValid = true;

        if (username.value === "") {
            usernameError.classList.remove("hidden");
            usernameError.classList.add("block");
            usernameError.textContent = "Enter username"
            username.classList.add("border-red-400");
            isValid = false;
        } else {
            usernameError.classList.add("hidden");
            username.classList.remove("border-red-400");
        }

        if (passwordField.value === "" || confirmPassword.value === "") {
            passwordError.classList.remove("hidden");
            passwordError.classList.add("block");
            passwordError.textContent = "Fields cannot be empty.";
            confirmPasswordError.classList.remove("hidden");
            confirmPasswordError.classList.add("block");
            confirmPasswordError.textContent = "Fields cannot be empty.";
            passwordField.classList.add("border-red-400");
            confirmPassword.classList.add("border-red-400");
            isValid = false;
        } else {
            passwordError.classList.add("hidden");
            confirmPasswordError.classList.add("hidden");
            passwordField.classList.remove("border-red-400");
            confirmPassword.classList.remove("border-red-400");
        }

        if (passwordField.value !== confirmPassword.value) {
            confirmPasswordError.classList.remove("hidden");
            confirmPasswordError.classList.add("block");
            confirmPasswordError.textContent = "Passwords do not match.";
            confirmPassword.classList.add("border-red-400");
            isValid = false;
        } else if (passwordField.value.length < 8) {
            passwordError.classList.remove("hidden");
            passwordError.classList.add("block");
            passwordError.textContent = "Password must be at least 8 characters.";
            passwordField.classList.add("border-red-400");
            isValid = false;
        }

        if (isValid) {
            navigate('/');
        }
    }

    function changeUsername() {
        const username = document.getElementById("username");
        const usernameError = document.getElementById("username_error");
        usernameError.classList.add("hidden");
        username.classList.remove("border-red-400");
    }

    function changePassword() {
        const passwordField = document.getElementById("password");
        const passwordError = document.getElementById("password_error");
        passwordError.classList.add("hidden");
        passwordField.classList.remove("border-red-400");
    }

    function confirmPassword() {
        const confirmPassword = document.getElementById("confirm_password");
        const confirmPasswordError = document.getElementById("confirmPassword_error");
        confirmPasswordError.classList.add("hidden");
        confirmPassword.classList.remove("border-red-400");
    }

    return {
        showPassword,
        validatePassword,
        changeUsername,
        changePassword,
        confirmPassword,
    };
}
