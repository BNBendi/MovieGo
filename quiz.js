document.addEventListener('DOMContentLoaded', function () {
    let currentQuestionIndex = 0;

    const questions = [
        { 
            question: "Mi a neve az Outer Banks-ben kincskereső csapatnak?", 
            answers: ["Pogues", "Kooks", "Sailors", "Navigators"], 
            correct: "Pogues",
            explanation: "A Pogues a kincskereső csapat neve, amely az Outer Banks sorozat központi szereplőit foglalja magában. Ők a szigeten élő, kevésbé tehetős fiatalokat képviselik."
        }, 
        {
            question: "Ki NEM játszotta Batmant az alábbiak közül?",
            answers: ["Christian Bale", "Ben Affleck", "Robert Pattinson", "Tom Hardy"],
            correct: "Tom Hardy",
            explanation: "Tom Hardy soha nem játszotta Batmant. Ő Bane szerepét alakította a 'The Dark Knight Rises' című filmben, míg a többiek mind Batman szerepét játszották különböző filmekben."
        },
        { 
            question: "Ki nyert Oscar díjat az alábbiak közül?", 
            answers: ["Liam Neeson", "Samuel L. Jackson", "Jack Nicholson", "Alan Rickman"], 
            correct: "Jack Nicholson",
            explanation:"Jack Nicholson 1976-ban nyerte meg az első Oscarját,a többiek még nem nyertek egyet sem."
        },
        {
            question: "Melyik film kapta a LEGKEVESEBB Oscar díjat az alábbiak közül?",
            answers: ["Titanic", "West Side Story", "Gigi", "Gandhi"],
            correct: "Gandhi",
            explanation: "A Gandhi című film 8 Oscar-díjat nyert, míg a Titanic 11-et , a West Side Story 10-et, és a Gigi pedig 9-et."
        },
        {
            question: "Melyik sorozat központi helyszíne a Hawkins város?",
            answers: ["Stranger Things", "The Umbrella Academy", "Dark", "Riverdale"],
            correct: "Stranger Things",
            explanation: "A Stranger Things című sorozat cselekménye Hawkins kisvárosában játszódik, amely egy kitalált helyszín az Egyesült Államokban."
        },
        {
            question: "Melyik sorozat híres a „Winter is Coming” idézetről?",
            answers: ["The Witcher", "Vikings", "Game of Thrones", "Breaking Bad"],
            correct: "Game of Thrones",
            explanation: "A „Winter is Coming” a Stark család mottója a Game of Thrones sorozatban, és az egyik legismertebb idézet a szériából."
        },
        {
            question: "Melyik színész játszotta Tony Starkot a Marvel Cinematic Universe-ben?",
            answers: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
            correct: "Robert Downey Jr.",
            explanation: "Robert Downey Jr. alakította Tony Starkot (Iron Man) a Marvel Cinematic Universe-ben, aki az első Marvel-film (Iron Man) főszereplője volt."
        },
        {
            question: "Ki rendezte a híres 'Titanic' című filmet?",
            answers: ["Steven Spielberg", "Ridley Scott", "Christopher Nolan", "James Cameron"],
            correct: "James Cameron",
            explanation: "A Titanic című film rendezője James Cameron, aki a film elkészítéséért több Oscar-díjat is nyert, köztük a Legjobb Rendezés díját."
        },
        {
            question: "Melyik filmnyelvi eszközt alkalmazott Lars von Trier az 'Antichrist' című filmjében, amely megosztotta a közönséget?",
            answers: ["Dogme 95", "French New Wave", "Italian Neorealism", "American New Wave"],
            correct: "Dogme 95",
            explanation: "Lars von Trier a Dogme 95 mozgalomhoz csatlakozott, amely minimalista stílust és kézikamerás felvételeket használ, hogy a filmek valósághűbbek és nyersebbek legyenek."
        },
        {
            question: "Ki játszotta a főszerepet az 1971-es filmben, a 'A Clockwork Orange' című filmben?",
            answers: ["Jack Nicholson", "Malcolm McDowell", "Michael Caine", "Gene Wilder"],
            correct: "Malcolm McDowell",
            explanation: "Malcolm McDowell játszotta a főszerepet Stanley Kubrick kultikus filmjében, a 'A Clockwork Orange'-ban, ahol egy fiatal bűnözőt alakít, akit idegen módszerekkel próbálnak rehabilitálni."
        },
        {
            question: "Melyik film alapjául szolgáló regény írója volt William Peter Blatty?",
            answers: ["The Shining", "The Exorcist", "Carrie", "The Omen"],
            correct: "The Exorcist",
            explanation: "A 'The Exorcist' című klasszikus horrorfilm alapjául William Peter Blatty 1971-es azonos című regénye szolgált, amely a démoni megszállás történetét dolgozza fel."
        },
        {
            question: "Melyik játék kapott először filmes adaptációt?",
            answers: ["Lara Croft: Tomb Raider", "Street Fighter", "Super Mario Bros.", "Resident Evil"],
            correct: "Super Mario Bros.",
            explanation: "A 'Super Mario Bros.' (1993) volt az első videojáték, amely filmes adaptációt kapott. Bár a film nem volt sikeres a kritikusok körében, mégis fontos mérföldkő a videojáték-adaptációk történetében."
        },
        {
            question: "Melyik film volt a legrosszabb 2023-ban az értékelések alapján az IMDb-n?",
            answers: ["The Nun 2", "Transformers: Rise of the Beasts", "Indiana Jones and the Dial of Destiny", "The Flash"],
            correct: "The Flash",
            explanation: "A 'The Flash' című film kapta a legrosszabb értékeléseket 2023-ban az IMDb-n, amely 6,1/10-es pontszámot ért el. A film gyenge történetvezetése, problémás karakterábrázolásai és a vizuális effektek kritikái miatt a közönség és a kritikusok is csalódtak benne."
        },
        {
            question: "Hány epizód készült a Simpson család című sorozatból?",
            answers:["780", "763", "778","800"],
            correct:"778",
            explanation: "A Simpson család 1998 óta létezik.36 évad készült el,ami 778 epizódot számlál jelenleg. "
        },
        {
            question:"Milyen fagyi van a Kincs ami nincs című filmbben? ",
            answers : ["Pisztácia","Eper","Csokoládé","Ezek közül egyik sem"],
            correct:"Ezek közül egyik sem",
            explanation:"A pisztácia kifogyott. Van vanília, tutti-frutti, karamell, rumos dió, kávé."
        }                
    ];

    const questionText = document.querySelector('.question');
    const answerContainer = document.querySelector('.answers-container');
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');

    // A "Vissza a főoldalra" gomb létrehozása
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Vissza a főoldalra';
    homeButton.style.display = 'none'; 
    document.body.appendChild(homeButton);

    function loadNextQuestion() {
        if (currentQuestionIndex >= questions.length) {
            questionText.textContent = 'A kvíz véget ért! Nyertél egy kekszet!';
            answerContainer.innerHTML = '';
            nextButton.style.display = 'none';
            submitButton.style.display = 'none';
            homeButton.style.display = 'inline-block';

            const img = document.createElement("img");
            img.src = "./img/cookie.png";
            img.alt = "keksz";
            img.style.height = "200px";
            img.style.width = "200px";
            questionText.appendChild(img);

            return;
        }

        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        answerContainer.innerHTML = '';

        currentQuestion.answers.forEach(answer => {
            const label = document.createElement('label');
            label.classList.add('answer-option');

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'answer';
            input.value = answer;

            label.appendChild(input);
            label.appendChild(document.createTextNode(answer));
            answerContainer.appendChild(label);
        });

        resultElement.textContent = '';
        resultElement.className = '';
        nextButton.style.display = 'none';
        currentQuestionIndex++;
    }

    function disableAnswerOptions() {
        const inputs = document.querySelectorAll('input[name="answer"]');
        inputs.forEach(input => {
            input.disabled = true;
        });
    }

    submitButton.addEventListener('click', function () {
        const currentQuestion = questions[currentQuestionIndex - 1];
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');

        if (!selectedAnswer) {
            resultElement.textContent = 'Kérlek válassz egy választ!';
            resultElement.className = 'incorrect'; 
            return;
        }

        const answerValue = selectedAnswer.value;

        if (answerValue === currentQuestion.correct) {
            resultElement.textContent = 'Helyes válasz! ' + currentQuestion.explanation;
            resultElement.className = 'correct';  
        } else {
            resultElement.textContent = 'Hibás válasz! ' + currentQuestion.explanation;
            resultElement.className = 'incorrect';  
        }

        disableAnswerOptions();
        nextButton.style.display = 'inline-block';
    });

    nextButton.addEventListener('click', function () {
        loadNextQuestion();

        const inputs = document.querySelectorAll('input[name="answer"]');
        inputs.forEach(input => {
            input.disabled = false;
        });
    });

    homeButton.addEventListener('click', function () {
        window.location.href = './main.html'; 
    });

    loadNextQuestion();
});