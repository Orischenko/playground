const args = process.argv.slice(2);
const shout = args.includes("--shout");
const name = args.find((a) => !a.startsWith("--")) ?? "world";

const message = `Hello, ${name}!`;
console.log(shout ? message.toUpperCase() : message);
