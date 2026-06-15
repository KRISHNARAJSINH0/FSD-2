const express = require("express");

const app = express();

// Sample Data
const products = [

    { id: 1, name: "iPhone", category: "mobile", price: 70000 },

    { id: 2, name: "Samsung", category: "mobile", price: 50000 },

    { id: 3, name: "Dell Laptop", category: "laptop", price: 60000 },

    { id: 4, name: "HP Laptop", category: "laptop", price: 45000 }

];

// Search + Filter API
app.get("/products", (req, res) => {

    let result = products;

    // Search by name
    if (req.query.search) {

        result = result.filter((p) =>
            p.name.toLowerCase().includes(
                req.query.search.toLowerCase()
            )
        );

    }

    // Filter by category
    if (req.query.category) {

        result = result.filter((p) =>
            p.category === req.query.category
        );

    }

    // Filter by max price
    if (req.query.price) {

        result = result.filter((p) =>
            p.price <= Number(req.query.price)
        );

    }

    res.send(result);

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});