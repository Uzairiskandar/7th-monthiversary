const questions = [
{
q: "What was your first thought when you met me?",
options: ["He looks nice 😊","Why is he staring 😂","There’s something special 💫","I’m going to fall for him ❤️"]
},
{
q: "Who do you love the most? 😏",
options: ["Me ❤️","Sultan 🐾"]
},
{
q: "Do you miss Sultan? 🥺",
options: ["Yes 💔","Very much 😢","Every moment 🐾❤️"]
},
{
q: "Who loves more in this relationship?",
options: ["Me 😌","You 😏","Both equally ❤️","Love chose us 💕"]
},
{
q: "What is my cutest habit?",
options: ["The way I talk 🥺","The way I care ❤️","My jokes 😂","Everything 😍"]
},
{
q: "What do you feel when you see my message?",
options: ["Smile 😊","Heart beats 💓","Happiness ✨","All of these 💖"]
},
{
q: "If we were in a movie, what would it be?",
options: ["Love story 🎬","Rom-com 😂❤️","Forever love 💍","Fairytale 🏰"]
},
{
q: "Are our babies naughty? 😄",
options: ["Yes 😂","No 😇"]
},
{
q: "Are you taking care of my Pinke? 🥺💕",
options: ["Yes ❤️","No 😒"]
},
{
q: "What am I to you?",
options: ["Best friend 🤗","Safe place 🫶","Happiness 💕","Forever ❤️"]
},
{
q: "Will you always choose me?",
options: ["Yes ❤️","Forever 💖","Every time 💫","Always you 🥺❤️"]
},
{
q: "What is your favorite thing about us? 🫶",
options: ["Our bond ❤️","Our late night talks 🌙","The way we understand each other 💫","Everything 😍"]
},
{
q: "When did you realize you love me? 🥺",
options: ["From the start ❤️","Slowly over time 💕","One special moment ✨","I always knew 💖"]
},
{
q: "What is your favorite memory of us? 📸",
options: ["Our first conversation 💬","Our cutest moment 🥰","Something unforgettable 💫","Every moment with you ❤️"]
},
{
q: "How do you feel when I care for you? 🥺",
options: ["Loved ❤️","Safe 🤍","Special 💫","All of these 💖"]
},
{
q: "If I’m sad, what would you do? 😢",
options: ["Hug me tight 🤗","Make me smile 😊","Give me a Poppa 💋"]
},
{
q: "What makes our love special? ✨",
options: ["Trust ❤️","Understanding 💫","Deep connection 🫶","Everything 💖"]
},
{
q: "What is your favorite thing I do for you? 🫶",
options: ["Caring ❤️","Loving you endlessly 💕","Making you smile 😊","Everything 😍"]
},
{
q: "If I were next to you right now, what would you do? 😏",
options: ["Hug 🤗","Kiss 💋💋","sex 💖"]
},
{
q: "What do you feel when I say “I love you”? 💌",
options: ["Butterflies 🦋","Happiness 😊","Peace ❤️","Everything 💖"]
}
];

let current = 0;

function showQuestion() {
    const quiz = document.getElementById("quiz");
    const emoji = document.getElementById("emoji");
    emoji.innerHTML = "";

    if (current >= questions.length) {
        quiz.innerHTML = `
        <h2>💌 For You, Manahil ❤️</h2>
        <p>
        Happy 7th Monthiversary, my love ❤️<br><br>
        Manahil, you are the most beautiful part of my life.<br>
        Every moment with you feels magical ✨<br><br>
        You are my peace, my happiness, and my forever 💞<br><br>
        And just so you know...<br>
        <b>You are mine, and I’m never letting you go 😏❤️</b><br><br>
        I love you more than anything in this world 💖
        </p>
        `;
        return;
    }

    let q = questions[current];
    let html = `<div class="question">${q.q}</div>`;

    q.options.forEach(opt => {
        html += `<button onclick="nextQuestion()">${opt}</button>`;
    });

    quiz.innerHTML = html;
}

function nextQuestion() {
    const emoji = document.getElementById("emoji");
    const emojis = ["😍","🥰","❤️","💖","💞","😘"];
    emoji.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    current++;
    setTimeout(showQuestion, 800);
}

showQuestion();

/* ❤️ Music Play on Click */
function playMusic() {
    const music = document.getElementById("bgMusic");
    music.play();
}

/* ❤️ Floating Hearts */
const heartsContainer = document.querySelector('.hearts');

setInterval(() => {
    const heart = document.createElement('span');
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 300);
