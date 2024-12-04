const form = document.getElementById('registration-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // űrlap értékek lekérése
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const passwordAgain = document.getElementById('password-again').value;
    const birthDate = document.getElementById('date').value;

    // Jelszó ellenőrzés
    if (password !== passwordAgain) {
        console.log("A két jelszó nem egyezik!");
        alert("A két jelszó nem egyezik!"); 
        return;
    } 

    // Ellenőrizhetjük a form többi adatát is
    if (!email || !username || !password || !birthDate) {
        console.log("Minden mezőt ki kell tölteni!");
        alert("Minden mezőt ki kell tölteni!");
        return;
    }

    // A regisztráció sikeres, irányítjuk a felhasználót
    console.log("A regisztráció sikeres!");
    
    // Átirányítás a main.html oldalra
    window.location.href = "./main.html"; 
});