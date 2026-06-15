const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

// Home Page with Form
app.get("/", (req, res) => {

    res.send(`

        <h2>User Feedback Form</h2>

        <form action="/submit" method="get">

            Name :
            <input type="text" name="name">
            <br><br>

            Email :
            <input type="email" name="email">
            <br><br>

            Message :
            <textarea name="message"></textarea>
            <br><br>

            Rating :

            <input type="radio" name="rating" value="Bad"> Bad

            <input type="radio" name="rating" value="Average"> Average

            <input type="radio" name="rating" value="Good"> Good

            <input type="radio" name="rating" value="Very Good"> Very Good

            <input type="radio" name="rating" value="Excellent"> Excellent

            <br><br>

            <button type="submit">Submit Feedback</button>

        </form>

    `);

});

// Process Form and Store Cookie
app.get("/submit", (req, res) => {

    const {name,email,message,rating} = req.query
    const feedback = {name,email,message,rating}

    // Store feedback cookie for 10 seconds
    res.cookie("feedback",JSON.stringify(feedback), {
        maxAge: 10000
    });

    res.send(`

        <h2 style="color:green;">
            Feedback Submitted Successfully
        </h2>

        <a href="/showfeedback">
            View Feedback Details
        </a>

    `);

});

// Display Feedback Details
app.get("/showfeedback", (req, res) => {

    const data = req.cookies.feedback;

    if (!data) {

        res.send(`
            <h3 style="color:red;">
                Feedback Cookie Expired
            </h3>

            <a href="/">Go Home</a>
        `);

    } else {

        const feedback = JSON.parse(data);

        res.send(`

            <h2>Feedback Details</h2>

            Name : ${feedback.name} <br><br>

            Email : ${feedback.email} <br><br>

            Message : ${feedback.message} <br><br>

            Rating : ${feedback.rating}

            <br><br>

            <a href="/logout">
                Logout
            </a>

        `);

    }

});

// Logout Route
app.get("/logout", (req, res) => {

    // Clear Cookie
    res.clearCookie("feedback");

    // Redirect to Home Page
    res.redirect("/");

});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});