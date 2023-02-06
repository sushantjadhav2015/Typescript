// 1. Encapsulation - Access Modifiers(public/private/protected/readonly)
// 2. Polymorphism - method overriding
// 3. Inheritance - Single/ Multi-Level & Multiple
// 4. Abstraction - Interface and Abstract Class
function currentTime() {
    var currentdate = new Date();
    var datetime = "Last Sync: " +
        currentdate.getDay() +
        "/" +
        currentdate.getMonth();
    // +
    // "/" +
    // currentdate.getFullYear() +
    // " @ " +
    // currentdate.getHours() +
    // ":" +
    // currentdate.getMinutes() +
    // ":" +
    // currentdate.getSeconds();
    return currentdate;
}
console.log(currentTime());
