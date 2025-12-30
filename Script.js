const targetDate = new Date("May 2, 2026 00:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const quoteEl = document.getElementById("quote");

const quotes = [
  "Dream big. Start small. Act daily.",
  "Your future patients are waiting for you.",
  "NEET is hard, but so are you.",
  "Discipline beats motivation every day.",
  "One day or day one. You decide.",
  "Sacrifice now so you can live later.",
  "Consistency creates toppers.",
  "Study while others sleep."
];

// Daily quote logic
const todayIndex = new Date().getDate() % quotes.length;
quoteEl.textContent = quotes[todayIndex];

function updateTimer() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.querySelector(".timer").innerHTML = "<h2>🔥 NEET DAY IS HERE 🔥</h2>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = days.toString().padStart(2, "0");
  hoursEl.textContent = hours.toString().padStart(2, "0");
  minutesEl.textContent = minutes.toString().padStart(2, "0");
  secondsEl.textContent = seconds.toString().padStart(2, "0");
}

setInterval(updateTimer, 1000);
updateTimer();

// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};