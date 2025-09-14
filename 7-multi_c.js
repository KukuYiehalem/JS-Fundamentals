const args = process.argv.slice(2);
const x = parseInt(args[0]);

if (args[0] === undefined) {
    console.log("Missing number of occurrences");
} else if (x > 0) {
    let i = 0;
    while (i < x) {
        console.log("C is fun");
        i++;
    }
}
// If x <= 0, do nothing
