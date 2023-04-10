const buttonGreetingWorld = document.getElementById("btn-world");
const buttonGreetingKevin = document.getElementById("btn-kevin");
const buttonSaySomething = document.getElementById("btn-something");
const buttonEmoji = document.getElementById("btn-emoji");


buttonGreetingWorld.addEventListener("click", async function (){
    const module = await import("./module.js");
    console.log(module);
    module.hello();
});

buttonGreetingKevin.addEventListener("click", async function (){
    const module = await import("./module1.js");
    console.log(module);
    module.greetingKevin();
});

buttonSaySomething.addEventListener("click", async function (){
    const module = await import("./module2.js");
    console.log(module);
    module.SaySomething();
});

buttonEmoji.addEventListener("click", async function (){
    const module = await import("./module3.js");
    console.log(module);
    module.Emoji();
});



