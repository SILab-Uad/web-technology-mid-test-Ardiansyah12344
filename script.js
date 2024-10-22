// Fungsi untuk menghasilkan password berdasarkan input pengguna
const generatePassword = (length, options) => {
    // Set karakter untuk pembuatan password
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    // Membuat variabel kumpulan karakter berdasarkan opsi yang dipilih
    let characterPool = "";
    if (options.includeUppercase) characterPool += uppercase;
    if (options.includeLowercase) characterPool += lowercase;
    if (options.includeNumbers) characterPool += numbers;
    if (options.includeSpecialChars) characterPool += specialChars;

    // Jika tidak ada opsi yang dipilih, tampilkan pesan error
    if (characterPool === "") {
        throw new Error("Please select at least one option for password generation!");
    }

    // Menghasilkan password berdasarkan kriteria yang dipilih
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }

    return password;
};

// Fungsi untuk menangani klik tombol dan menampilkan password yang dihasilkan
function handleGeneratePassword() {
    const length = parseInt(document.getElementById("length").value);
    const options = {
        includeUppercase: document.getElementById("includeUppercase").checked,
        includeLowercase: document.getElementById("includeLowercase").checked,
        includeNumbers: document.getElementById("includeNumbers").checked,
        includeSpecialChars: document.getElementById("includeSpecialChars").checked,
    };

    try {
        const password = generatePassword(length, options);
        document.getElementById("passwordOutput").textContent = password;
    } catch (error) {
        alert(error.message);
    }
}

// Fungsi untuk menyalin password yang dihasilkan ke clipboard
function copyToClipboard() {
    const password = document.getElementById("passwordOutput").textContent;
    if (password) {
        navigator.clipboard.writeText(password).then(() => {
            alert("Password copied to clipboard!");
        });
    } else {
        alert("No password to copy!");
    }
}