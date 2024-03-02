// EXAMPLE 1 - Escape Quotes in a String in JavaScript

const escapeSingle = "it's a string";
console.log(escapeSingle); // 👉️ it's a string

const escapeDouble = 'bobby"hadz';
console.log(escapeDouble); // 👉️ bobby"hadz

// ------------------------------------------------------------------

// // EXAMPLE 2 - Escaping quotes in a String with `String.replaceAll()`

// // ✅ escape every single quote
// const str = "it's a string";
// console.log(str); // 👉️ it's a string

// const result = str.replaceAll("'", "\\'");

// console.log(result); // 👉️ it\'s a string

// ------------------------------------------------------------------

// // EXAMPLE 3 - Alternating quotes to avoid using backslashes

// const withSingle = "it's a string";
// console.log(withSingle); // 👉️ it's a string

// const withDouble = 'He said: "test 123"';
// console.log(withDouble); // 👉️ He said: "test 123"

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using backticks instead of backslashes

// const withBoth = `it's a "test 123"`;
// console.log(withBoth); // 👉️ it's a "test 123"

// ------------------------------------------------------------------

// // EXAMPLE 5 - Showing the escape characters in a string

// const addBackslash = 'BMW \\1996\\';
// console.log(addBackslash); // 👉️ BMW \1996\

// const withEscapeChars = JSON.stringify(addBackslash);
// console.log(withEscapeChars); // 👉️ "BMW \\1996\\"
