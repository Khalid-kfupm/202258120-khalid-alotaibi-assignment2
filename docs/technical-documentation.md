# Technical Documentation

## Project Overview
This project is an interactive personal portfolio website developed as a continuation of Assignment 1. The purpose of Assignment 2 is to improve the original portfolio by adding interactivity, dynamic behavior, and better user feedback using JavaScript.

## Implemented Features

### 1. Theme Toggle
A dark/light theme toggle button was added to the navigation bar. JavaScript is used to switch between themes, and the selected theme is saved in localStorage so the preference remains after refreshing the page.

### 2. Greeting Message
A greeting message is displayed in the hero section based on the current time of day. The message changes automatically between morning, afternoon, and evening.

### 3. Responsive Mobile Menu
A mobile navigation menu was implemented for smaller screens. Users can open and close the menu using a button, and the menu closes automatically after selecting a link.

### 4. Live Project Search
The projects section includes a search input that filters project cards while the user types. This makes the content dynamic and improves usability. If no projects match the entered keyword, an empty-state message is shown.

### 5. Contact Form Validation
The contact form validates user input before submission. JavaScript checks:
- if the name field is empty
- if the email field is empty
- if the email format is valid
- if the message field is empty
- if the message is too short

If the input is invalid, the user sees an error message. If the input is valid, a success message is displayed.

## User Feedback and Error Handling
The project provides clear feedback to the user in multiple cases:
- error messages for invalid or missing form inputs
- success message after valid form submission
- empty-state message when no projects match the search
- stored theme preference for a more personalized experience

## Animation and Styling
The website uses CSS transitions and hover effects to improve the user experience. Buttons, cards, and inputs respond visually to user interaction. The layout is responsive and adapts to smaller screens.

## Technologies Used
- HTML5 for page structure
- CSS3 for styling, layout, and transitions
- JavaScript for interactivity and validation
- localStorage for saving theme preference

## File Responsibilities
- `index.html` contains the structure of the portfolio website
- `css/styles.css` contains styling, layout, responsive design, and visual effects
- `js/script.js` contains the theme toggle, greeting logic, mobile menu behavior, project filtering, and contact form validation