const greetings = [
    "A wild member appears ... isn't this joke supposed to be popular among humans?",
    "Welcome home, member!",
    "Hello member, my old friend~",
    "Welcome, member! For security reasons, you must send nudes in order to chat... I-It' for research!"
]

function randFrom(list) {
    return list[ Math.floor(Math.random() * list.length) ];
}

module.exports = {
    greet(user) {
        var greeting = randFrom(greetings);
        return greeting.replace("member", user.toString());
    }
}