const express = require('express')
const nm = require('nodemailer')
const app = express()
app.get('/',(req,res)=>{
    res.send(`
        <form action='/sendmail' method = 'get'>
            EMail : <input type='email' name = 'email'><br><br>
            <button type='submit'>Submit</button>
        </form>
        `)
})
// Send Mail Route
app.get("/sendmail", async (req, res) => {

    const email = req.query.email;

    // Transporter
    const transporter = nodemailer.createTransport({

        service: "gmail",

        auth: {

            user: "youremail@gmail.com",
            pass: "your_app_password"

        }

    });

    // Mail Options
    const mailOptions = {

        from: "youremail@gmail.com",

        to: email,

        subject: "Exam Timetable",

        html: `

            <h3>L J University</h3>

            <table border="1" cellpadding="10">

                <tr>
                    <th>Date</th>
                    <th>Exam Name</th>
                </tr>

                <tr>
                    <td>21/05/25</td>
                    <td>FSD-2</td>
                </tr>

            </table>

        `

    };

    // Send Mail
    transporter.sendMail(mailOptions, (err, info) => {

        if (err) {

            res.send("Error Sending Mail");

        } else {

            res.send("Mail Sent Successfully");

        }

    });

});


// Server
app.listen(3000, () => {

    console.log("Server running on port 3000");

});