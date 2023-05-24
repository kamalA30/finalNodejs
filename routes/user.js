const router = require("express").Router();
const User = require("../models/userModel");
const Todo = require("../models/Todo");


router.get("/login", function (req, res) {
    res.render("login");
});
router
    .post("/register", (req, res) => {
        const { username, passwrod } = req.body;
        const newUser = new User({ username, password });

        // save the todo
        newUser.save()
            .then(() => {
                console.log("Successfully added User!");
                res.redirect("/");
            })
            .catch((err) => console.log(err));
    })

//Handling user login
router.post("/login", async function (req, res) {
    let { username, password } = req.body
    try {
        // check if the user exists
        const user = await User.findOne({ username: req.body.username });
        console.log(user);
        if (user) {
            //check if password matches
            const result = req.body.password === user.password;
            if (result) {
                const allTodo = await Todo.find();
                res.render("index", { todo: allTodo })
            } else {
                res.status(400).json({ error: "password doesn't match" });
            }
        } else {
            res.status(400).json({ error: "User doesn't exist" });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
});


module.exports = router;
