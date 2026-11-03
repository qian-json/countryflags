function randint(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Declare Game Elements
// Flags and their respective countries
const countryFlagPairs = [
    ["afghanistan", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg"],
    ["albania", "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg"],
    ["algeria", "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg"],
    ["andorra", "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg"],
    ["angola", "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg"],
    ["antigua and barbuda", "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg"],
    ["argentina", "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"],
    ["armenia", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg"],
    ["australia", "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"],
    ["austria", "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg"],
    ["azerbaijan", "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg"],
    ["bahamas", "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg"],
    ["bahrain", "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg"],
    ["bangladesh", "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"],
    ["barbados", "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg"],
    ["belarus", "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg"],
    ["belgium", "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg"],
    ["belize", "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg"],
    ["benin", "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg"],
    ["bhutan", "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg"],
    ["bolivia", "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg"],
    ["bosnia and herzegovina", "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg"],
    ["botswana", "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg"],
    ["brazil", "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg"],
    ["brunei", "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg"],
    ["bulgaria", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg"],
    ["burkina faso", "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg"],
    ["burundi", "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg"],
    ["cambodia", "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg"],
    ["cameroon", "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg"],
    ["canada", "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"],
    ["cape verde", "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg"],
    ["central african republic", "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg"],
    ["chad", "https://flagcdn.com/td.svg"],
    ["chile", "https://flagcdn.com/cl.svg"],
    ["china", "https://flagcdn.com/cn.svg"],
    ["colombia", "https://flagcdn.com/co.svg"],
    ["comoros", "https://flagcdn.com/km.svg"],
    ["republic of the congo", "https://flagcdn.com/cg.svg"],
    ["costa rica", "https://flagcdn.com/cr.svg"],
    ["ivory coast", "https://flagcdn.com/ci.svg"],
    ["croatia", "https://flagcdn.com/hr.svg"],
    ["cuba", "https://flagcdn.com/cu.svg"],
    ["cyprus", "https://flagcdn.com/cy.svg"],
    ["czech republic", "https://flagcdn.com/cz.svg"],
    ["democratic republic of the congo", "https://flagcdn.com/cd.svg"],
    ["denmark", "https://flagcdn.com/dk.svg"],
    ["djibouti", "https://flagcdn.com/dj.svg"],
    ["dominica", "https://flagcdn.com/dm.svg"],
    ["dominican republic", "https://flagcdn.com/do.svg"],
    ["ecuador", "https://flagcdn.com/ec.svg"],
    ["egypt", "https://flagcdn.com/eg.svg"],
    ["el salvador", "https://flagcdn.com/sv.svg"],
    ["equatorial guinea", "https://flagcdn.com/gq.svg"],
    ["eritrea", "https://flagcdn.com/er.svg"],
    ["estonia", "https://flagcdn.com/ee.svg"],
    ["eswatini", "https://flagcdn.com/sz.svg"],
    ["ethiopia", "https://flagcdn.com/et.svg"],
    ["fiji", "https://flagcdn.com/fj.svg"],
    ["finland", "https://flagcdn.com/fi.svg"],
    ["france", "https://flagcdn.com/fr.svg"],
    ["gabon", "https://flagcdn.com/ga.svg"],
    ["gambia", "https://flagcdn.com/gm.svg"],
    ["georgia", "https://flagcdn.com/ge.svg"],
    ["germany", "https://flagcdn.com/de.svg"],
    ["ghana", "https://flagcdn.com/gh.svg"],
    ["greece", "https://flagcdn.com/gr.svg"],
    ["grenada", "https://flagcdn.com/gd.svg"],
    ["guatemala", "https://flagcdn.com/gt.svg"],
    ["guinea", "https://flagcdn.com/gn.svg"],
    ["guinea-bissau", "https://flagcdn.com/gw.svg"],
    ["guyana", "https://flagcdn.com/gy.svg"],
    ["haiti", "https://flagcdn.com/ht.svg"],
    ["honduras", "https://flagcdn.com/hn.svg"],
    ["hungary", "https://flagcdn.com/hu.svg"],
    ["iceland", "https://flagcdn.com/is.svg"],
    ["india", "https://flagcdn.com/in.svg"],
    ["indonesia", "https://flagcdn.com/id.svg"],
    ["iran", "https://flagcdn.com/ir.svg"],
    ["iraq", "https://flagcdn.com/iq.svg"],
    ["ireland", "https://flagcdn.com/ie.svg"],
    ["israel", "https://flagcdn.com/il.svg"],
    ["italy", "https://flagcdn.com/it.svg"],
    ["jamaica", "https://flagcdn.com/jm.svg"],
    ["japan", "https://flagcdn.com/jp.svg"],
    ["jordan", "https://flagcdn.com/jo.svg"],
    ["kazakhstan", "https://flagcdn.com/kz.svg"],
    ["kenya", "https://flagcdn.com/ke.svg"],
    ["kiribati", "https://flagcdn.com/ki.svg"],
    ["kuwait", "https://flagcdn.com/kw.svg"],
    ["kyrgyzstan", "https://flagcdn.com/kg.svg"],
    ["laos", "https://flagcdn.com/la.svg"],
    ["latvia", "https://flagcdn.com/lv.svg"],
    ["lebanon", "https://flagcdn.com/lb.svg"],
    ["lesotho", "https://flagcdn.com/ls.svg"],
    ["liberia", "https://flagcdn.com/lr.svg"],
    ["libya", "https://flagcdn.com/ly.svg"],
    ["liechtenstein", "https://flagcdn.com/li.svg"],
    ["lithuania", "https://flagcdn.com/lt.svg"],
    ["luxembourg", "https://flagcdn.com/lu.svg"],
    ["madagascar", "https://flagcdn.com/mg.svg"],
    ["malawi", "https://flagcdn.com/mw.svg"],
    ["malaysia", "https://flagcdn.com/my.svg"],
    ["maldives", "https://flagcdn.com/mv.svg"],
    ["mali", "https://flagcdn.com/ml.svg"],
    ["malta", "https://flagcdn.com/mt.svg"],
    ["marshall islands", "https://flagcdn.com/mh.svg"],
    ["mauritania", "https://flagcdn.com/mr.svg"],
    ["mauritius", "https://flagcdn.com/mu.svg"],
    ["mexico", "https://flagcdn.com/mx.svg"],
    ["micronesia", "https://flagcdn.com/fm.svg"],
    ["moldova", "https://flagcdn.com/md.svg"],
    ["monaco", "https://flagcdn.com/mc.svg"],
    ["mongolia", "https://flagcdn.com/mn.svg"],
    ["montenegro", "https://flagcdn.com/me.svg"],
    ["morocco", "https://flagcdn.com/ma.svg"],
    ["mozambique", "https://flagcdn.com/mz.svg"],
    ["myanmar", "https://flagcdn.com/mm.svg"],
    ["namibia", "https://flagcdn.com/na.svg"],
    ["nauru", "https://flagcdn.com/nr.svg"],
    ["nepal", "https://flagcdn.com/np.svg"],
    ["netherlands", "https://flagcdn.com/nl.svg"],
    ["new zealand", "https://flagcdn.com/nz.svg"],
    ["nicaragua", "https://flagcdn.com/ni.svg"],
    ["niger", "https://flagcdn.com/ne.svg"],
    ["nigeria", "https://flagcdn.com/ng.svg"],
    ["north korea", "https://flagcdn.com/kp.svg"],
    ["north macedonia", "https://flagcdn.com/mk.svg"],
    ["norway", "https://flagcdn.com/no.svg"],
    ["oman", "https://flagcdn.com/om.svg"],
    ["pakistan", "https://flagcdn.com/pk.svg"],
    ["palau", "https://flagcdn.com/pw.svg"],
    ["panama", "https://flagcdn.com/pa.svg"],
    ["papua new guinea", "https://flagcdn.com/pg.svg"],
    ["paraguay", "https://flagcdn.com/py.svg"],
    ["peru", "https://flagcdn.com/pe.svg"],
    ["philippines", "https://flagcdn.com/ph.svg"],
    ["poland", "https://flagcdn.com/pl.svg"],
    ["portugal", "https://flagcdn.com/pt.svg"],
    ["qatar", "https://flagcdn.com/qa.svg"],
    ["romania", "https://flagcdn.com/ro.svg"],
    ["russia", "https://flagcdn.com/ru.svg"],
    ["rwanda", "https://flagcdn.com/rw.svg"],
    ["saint kitts and nevis", "https://flagcdn.com/kn.svg"],
    ["saint lucia", "https://flagcdn.com/lc.svg"],
    ["saint vincent and the grenadines", "https://flagcdn.com/vc.svg"],
    ["samoa", "https://flagcdn.com/ws.svg"],
    ["san marino", "https://flagcdn.com/sm.svg"],
    ["sao tome and principe", "https://flagcdn.com/st.svg"],
    ["saudi arabia", "https://flagcdn.com/sa.svg"],
    ["senegal", "https://flagcdn.com/sn.svg"],
    ["serbia", "https://flagcdn.com/rs.svg"],
    ["seychelles", "https://flagcdn.com/sc.svg"],
    ["sierra leone", "https://flagcdn.com/sl.svg"],
    ["singapore", "https://flagcdn.com/sg.svg"],
    ["slovakia", "https://flagcdn.com/sk.svg"],
    ["slovenia", "https://flagcdn.com/si.svg"],
    ["solomon islands", "https://flagcdn.com/sb.svg"],
    ["somalia", "https://flagcdn.com/so.svg"],
    ["south africa", "https://flagcdn.com/za.svg"],
    ["south korea", "https://flagcdn.com/kr.svg"],
    ["south sudan", "https://flagcdn.com/ss.svg"],
    ["spain", "https://flagcdn.com/es.svg"],
    ["sri lanka", "https://flagcdn.com/lk.svg"],
    ["sudan", "https://flagcdn.com/sd.svg"],
    ["suriname", "https://flagcdn.com/sr.svg"],
    ["sweden", "https://flagcdn.com/se.svg"],
    ["switzerland", "https://flagcdn.com/ch.svg"],
    ["syria", "https://flagcdn.com/sy.svg"],
    ["tajikistan", "https://flagcdn.com/tj.svg"],
    ["tanzania", "https://flagcdn.com/tz.svg"],
    ["thailand", "https://flagcdn.com/th.svg"],
    ["east timor", "https://flagcdn.com/tl.svg"],
    ["togo", "https://flagcdn.com/tg.svg"],
    ["tonga", "https://flagcdn.com/to.svg"],
    ["trinidad and tobago", "https://flagcdn.com/tt.svg"],
    ["tunisia", "https://flagcdn.com/tn.svg"],
    ["turkey", "https://flagcdn.com/tr.svg"],
    ["turkmenistan", "https://flagcdn.com/tm.svg"],
    ["tuvalu", "https://flagcdn.com/tv.svg"],
    ["uganda", "https://flagcdn.com/ug.svg"],
    ["ukraine", "https://flagcdn.com/ua.svg"],
    ["united arab emirates", "https://flagcdn.com/ae.svg"],
    ["united kingdom", "https://flagcdn.com/gb.svg"],
    ["united states", "https://flagcdn.com/us.svg"],
    ["uruguay", "https://flagcdn.com/uy.svg"],
    ["uzbekistan", "https://flagcdn.com/uz.svg"],
    ["vanuatu", "https://flagcdn.com/vu.svg"],
    ["venezuela", "https://flagcdn.com/ve.svg"],
    ["vietnam", "https://flagcdn.com/vn.svg"],
    ["yemen", "https://flagcdn.com/ye.svg"],
    ["zambia", "https://flagcdn.com/zm.svg"],
    ["zimbabwe", "https://flagcdn.com/zw.svg"]
];

// HTML Elements
const flagDisplay = document.getElementById("flagDisplay");
const gameForm = document.getElementById("user-answer-form");
const feedbackDisplay = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const streakDisplay = document.getElementById("streak");
// Sounds
const correct = [new Audio("sounds/correct/correct1.wav"), new Audio("sounds/correct/correct2.wav"), new Audio("sounds/correct/correct3.wav"), new Audio("sounds/correct/correct4.wav"), new Audio("sounds/correct/correct5.wav"), new Audio("sounds/correct/correct6.mp3"), new Audio("sounds/correct/correct7.wav")];
const incorrect = [new Audio("sounds/incorrect/incorrect1.wav")];

// Declare Game Variables
var usedHint = false;
var chosenCountryFlagPair = null;
var score = null;
var streak = null;

// Functions
function reset() {
    scoreDisplay.classList.remove("text-success");
}

function showScoreAndStreak() {
    if (localStorage.getItem("score")) {
        score = localStorage.getItem("score");
        streak = localStorage.getItem("streak");
    } else {
        score = 0;
        streak = 0;
    }

    scoreDisplay.innerText = score;
    if (streak > 1) {
        scoreDisplay.classList.add("text-success");
        streakDisplay.innerText = streak;
    } else {
        streakDisplay.innerText = "";
    }
}

// LocalStorage Functions
function saveToLocalStorage() {
    localStorage.setItem("score", score);
    localStorage.setItem("streak", streak);
    localStorage.setItem("chosenCountryFlagPair", chosenCountryFlagPair);
}

function resetData() {
    if (prompt("Are you sure? Type 'Yes, reset my data' to continue.")?.toLowerCase() === "yes, reset my data") {
        localStorage.removeItem("score");
        localStorage.removeItem("streak");
        localStorage.removeItem("chosenCountryFlagPair");

        showScoreAndStreak();
    }
}

feedbackFormatFunctions = {
    red: () => {
        feedbackDisplay.classList.remove("text-success");
        feedbackDisplay.classList.add("text-danger");
    }
};

function incorrectAnswer() {
    scoreDisplay.classList.remove("text-success");
    streakDisplay.classList.remove("text-success");
    streak = 0;
    streakDisplay.innerText = "";

    saveToLocalStorage();
}

function chooseCountryFlagPair() {
    const oldCountryFlagPair = chosenCountryFlagPair;
    try {
        while (oldCountryFlagPair === chosenCountryFlagPair) {
            chosenCountryFlagPair = countryFlagPairs[randint(countryFlagPairs.length - 1)];
        }
        flagDisplay.setAttribute("src", chosenCountryFlagPair[1]);
    } catch {
        flagDisplay.setAttribute("src", "https://image.freepik.com/free-vector/error-404-page-found-page-found-text-oops-looks-like-something-went-wrong_143407-2.jpg");
    }
}

function giveUp() {
    const giveUpMessages = ["Aw, man, I really thought you'd get it!", "Dang!", "Aw man.", "Ha! I thought so!", ":(", "Don't worry, we learn something new every day."];

    if (usedHint === false) {
        usedHint = true;

        feedbackFormatFunctions.red();

        const oldFeedback = feedbackDisplay.innerText;
        var giveUpFeedback = feedbackDisplay.innerText;
        while (oldFeedback === giveUpFeedback) {
            giveUpFeedback = giveUpMessages[randint(giveUpMessages.length - 1)];
        }
        feedbackDisplay.innerHTML = giveUpFeedback + ` It was ${chosenCountryFlagPair[0].toUpperCase()}.`;

        incorrectAnswer();
    }
}

chooseCountryFlagPair();
showScoreAndStreak();

gameForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userInput = document.getElementById("user-answer");
    const userAnswer = userInput.value;
    if (userAnswer) {
        if (userAnswer.toLowerCase().includes(chosenCountryFlagPair[0])) {
            const successMessages = ["Good job!", "Wow!", "Great job!", "Amazing!", "Check!", "Correct!", "Smart!", "How do you know this?", "Not bad!", "Not bad at all!", "Not bad. Not bad at all!"];
            const iToldYouMessages = ["Well, at least you learn from your mistakes.", "Don't ask me for answers all the time.", "See? I'm <em>never</em> wrong!"];

            userInput.value = "";
            chooseCountryFlagPair();
            saveToLocalStorage();

            const oldFeedback = feedbackDisplay.innerText;
            var successFeedback = feedbackDisplay.innerText;
            if (usedHint) {
                while (oldFeedback === successFeedback) {
                    successFeedback = iToldYouMessages[randint(iToldYouMessages.length - 1)];
                }
                feedbackDisplay.innerHTML = successFeedback;
                feedbackDisplay.classList.remove("text-danger");
                feedbackDisplay.classList.add("text-success");
            } else {
                score++;
                streak++;
                saveToLocalStorage();
                showScoreAndStreak();

                while (oldFeedback === successFeedback) {
                    successFeedback = successMessages[randint(successMessages.length - 1)];
                }
                feedbackDisplay.innerHTML = successFeedback;
                feedbackDisplay.classList.remove("text-danger");
                feedbackDisplay.classList.add("text-success");

                if (score === 100) {
                    feedbackDisplay.innerHTML = "<strong class='text-success'>100! Outstanding!</strong><br>"
                }

                // Display messages depending on streak
                switch (streak) {
                    case 10:
                        feedbackDisplay.innerHTML = "10 in a row!";
                        break;
                    case 20:
                        feedbackDisplay.innerHTML = "20 in a row; you're good at this!";
                        break;
                    case 30:
                        feedbackDisplay.innerHTML = "Streak of 30! Who am I kidding? You're too good for me!";
                        break;
                    case 100:
                        feedbackDisplay.innerHTML = "<strong>100 in a row! What are you, a god?!</strong><br>";
                        break;
                }

                correct[randint(correct.length - 1)].play(); // Play a random correct sound
            }
        } else {
            feedbackDisplay.innerHTML = "Nope, that's not it. Try again!";
            feedbackFormatFunctions.red();

            incorrectAnswer();

            incorrect[randint(incorrect.length - 1)].play(); // Play a random incorrect sound
        }
        usedHint = false;
    }
});