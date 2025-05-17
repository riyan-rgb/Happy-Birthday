// birthday.js

// Function to play the birthday song
function playSong() {
  const song = document.getElementById("song");
  song.play();
}

// Additional features
const messages = [
  "You're amazing!",
  "Wishing you all the happiness in the world!",
  "Keep smiling, shining, and dreaming!",
  "Another year wiser and more beautiful!",
  "You make the world a better place!"
];

function showRandomMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  alert(msg);
}

// Confetti animation logic (simplified)
function launchConfetti() {
  const colors = ["#ff6b81", "#feca57", "#48dbfb", "#1dd1a1"];
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.position = "absolute";
    confetti.style.left = `${Math.random() * window.innerWidth}px`;
    confetti.style.top = `-${Math.random() * 100}px`;
    confetti.style.animation = `fall ${2 + Math.random() * 3}s linear forwards`;
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Add animation style
const style = document.createElement("style");
style.innerHTML = `
  @keyframes fall {
    to {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Interactive Birthday Countdown
function startCountdown(targetDate) {
  const countdown = document.createElement("div");
  countdown.style.position = "fixed";
  countdown.style.bottom = "10px";
  countdown.style.right = "10px";
  countdown.style.padding = "10px";
  countdown.style.backgroundColor = "#ff6b81";
  countdown.style.color = "white";
  countdown.style.borderRadius = "8px";
  countdown.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
  countdown.id = "countdown";
  document.body.appendChild(countdown);

  const updateCountdown = () => {
    const now = new Date();
    const distance = targetDate - now;

    if (distance < 0) {
      countdown.textContent = "🎉 It's the big day! 🎉";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.textContent = `🎂 Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Birthday message typing effect
function typeMessage(elementId, message, speed = 50) {
  const element = document.getElementById(elementId);
  let i = 0;

  function type() {
    if (i < message.length) {
      element.innerHTML += message.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Trigger interactive features on window load
window.onload = function() {
  startCountdown(new Date("2025-05-17T00:00:00"));
  launchConfetti();
  setTimeout(() => {
    showRandomMessage();
    typeMessage("typing-message", "Nindi, you're truly special! Happy Birthday again! 🎉");
  }, 3000);
};

// Placeholder for typing message
const typingDiv = document.createElement("div");
typingDiv.id = "typing-message";
typingDiv.style.textAlign = "center";
typingDiv.style.fontSize = "1.2em";
typingDiv.style.margin = "20px auto";
typingDiv.style.maxWidth = "600px";
document.body.appendChild(typingDiv);

// You can continue with more fun interactivity, birthday trivia, animations, and personalization up to 500 lines.
// Let me know if you'd like to expand with more features!
