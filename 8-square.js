const args = process.argv.slice(2);
const size = parseInt(args[0]);

if (args[0] === undefined || isNaN(size)) {
    console.log("Missing size");
} else if (size > 0) {
    let i = 0;
    while (i < size) {
        console.log("X".repeat(size));
        i++;
    }
}
// If size <= 0, do nothing

