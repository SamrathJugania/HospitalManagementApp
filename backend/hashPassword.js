import bcrypt from "bcryptjs";  // ✅ Use import for ES Modules

async function hashPassword() {
    const password = "admin123";  // Change this to your desired password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);
}

hashPassword();
