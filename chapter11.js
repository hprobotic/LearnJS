// const err = new Error("invalid email");
// const email = null;


// function validateEmail() {
//     return email.match(/@/) ?
//         email :
//         new Error(`Invalid email: ${email}`);
// }
// // const validatedEmail = validateEmail(email);

// // if (validatedEmail instanceof Error) {
// //     console.error(`Error: ${validatedEmail.message}`);
// // } else {
// //     console.log(`Valid email: ${validatedEmail}`)
// // }

// try {
//     const validatedEmail = validateEmail(email);
//     if (validatedEmail instanceof Error) {
//         console.error(`Error: ${validatedEmail.message}`)
//     } else {
//         console.log(`Valid email: ${validatedEmail}`);    
//     }
// } catch(err) {
//     console.error(`Error: ${err.message}`);
// }

function a() {
    console.log('a: caling b');
    b();
    console.log('a: done');
}
function b() {
    console.log('b: calling c');
    c();
    console.log('b: done');
}
function c() {
    console.log('c: throwning error');
    throw new Error('c have error =))');
    console.log('c: done');
}
function d() {
    console.log('d: calling c');
    c();
    console.log('d: done');
}

try {
    a();
} catch (err) {
    console.log(err.stack);
}

try {
    d();
} catch (err) {
    console.log(err.stack);
}