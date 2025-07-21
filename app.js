import express from "express";

const app = express();

export default app;

import employees from "./db/employees.js";

app.route("/").get((req,res) => {
    res.send("Hello employees!")
})

app.route("/employees").get((req,res) => {
    res.send(employees)
})

app.route("/employees/random").get((req,res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    const result = employees.find(employee => employee.id === Number(num))

    res.send(result);
})


app.route("/employees/:index").get((req,res) => {
    const {index} = req.params;
    const result = employees.find(employee => employee.id === Number(index))

    if (!result) {
        return res.status(404).send("There is no employee with that id")
    }
    res.send(result);
})


