function startCountdown() {
  // Set the target countdown date (YYYY, MM -1, DD, HH, MM, SS)
  const countdownDate = new Date("March 10, 2025 00:00:00").getTime();

  setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = countdownDate - now;

      if (timeLeft <= 0) {
          document.getElementById("hours").innerText = "00";
          document.getElementById("minutes").innerText = "00";
          document.getElementById("seconds").innerText = "00";
          return;
      }

      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      document.getElementById("hours").innerText = String(hours).padStart(2, '0');
      document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
      document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

  }, 1000);
}

startCountdown();
