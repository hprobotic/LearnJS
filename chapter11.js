const err = new Error("invalid email");
const email = null;


function validateEmail() {
    return email.match(/@/) ?
        email :
        new Error(`Invalid email: ${email}`);
}
// const validatedEmail = validateEmail(email);

// if (validatedEmail instanceof Error) {
//     console.error(`Error: ${validatedEmail.message}`);
// } else {
//     console.log(`Valid email: ${validatedEmail}`)
// }

try {
    const validatedEmail = validateEmail(email);
    if (validatedEmail instanceof Error) {
        console.error(`Error: ${validatedEmail.message}`)
    } else {
        console.log(`Valid email: ${validatedEmail}`);    
    }
} catch(err) {
    console.error(`Error: ${err.message}`);
}