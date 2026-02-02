<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>For My Love ❤️</title>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #ff5f9e, #ff9a9e);
  color: white;
  text-align: center;
  overflow: hidden;
}

.box {
  background: rgba(0,0,0,0.3);
  padding: 30px;
  border-radius: 20px;
  max-width: 420px;
  margin: 80px auto;
  z-index: 10;
  position: relative;
}

button {
  padding: 12px 25px;
  margin: 10px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
}

.yes {
  background: #00ffcc;
  box-shadow: 0 0 15px #00ffcc;
  animation: glow 1.5s infinite;
}

@keyframes glow {
  0% { box-shadow: 0 0 5px #00ffcc; }
  50% { box-shadow: 0 0 20px #00ffcc; }
  100% { box-shadow: 0 0 5px #00ffcc; }
}

.no {
  background: #ff3b3b;
  position: absolute;
}

.heart {
  position: fixed;
  bottom: -10px;
  font-size: 20px;
  animation: float 6s linear infinite;
}

@keyframes float {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-100vh); opacity: 0; }
}
</style>
</head>

<body>

<!-- 🎵 Romantic Music -->
<audio autoplay loop>
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg">
</audio>

<div class="box">
  <h2 id="question">
    Hey ❤️ <br>
    <!-- 👇 YAHAN NAAM LIKH -->
    My beautiful love, are you ready? 😍
  </h2>

  <div id="buttons">
    <button class="yes" onclick="next()">YES 💖</button>
    <button class="no" id="noBtn" onmouseover="moveNo()">NO 🙈</button>
  </div>
</div>

<script>
let i = 0;

// 👇 YAHAN GIRLFRIEND KA NAAM DAL
const gfName = "NEHA ❤️";

const questions = [
  `Hey ${gfName}, do you know how special you are to me? 💕`,
  "Do you feel safe and happy with me? 🥺❤️",
  "Can I be the reason for your smile every day? 😊",
  "Will you be my Valentine forever? 💍❤️"
];

function next() {
  if (i < questions.length) {
    document.getElementById("question").innerText = questions[i];
    i++;
  } else {
    document.getElementById("question").innerText =
      `YAYYYY 😍❤️ I love you ${gfName}! Happy Valentine’s Day 💖`;
    document.getElementById("buttons").style.display = "none";
  }
}

// NO button bhaagne wala
function moveNo() {
  const btn = document.getElementById("noBtn");
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

// 💕 Flying hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 500);
</script>

</body>
</html>
