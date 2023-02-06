function formatComnad(input) {
    var line = "";
    if (typeof input === "string") {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim(); }).join(" ");
    }
    return line;
}
console.log(formatComnad(" sushant   "));
console.log(formatComnad(["sushant", "jadhav"]));
