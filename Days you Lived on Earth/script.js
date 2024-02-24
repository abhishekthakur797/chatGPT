function calculate() {
  const dobInput = document.getElementById("dob").value;
  const dob = new Date(dobInput);
  const now = new Date();

  const diff = now.getTime() - dob.getTime();
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.4375));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor(diff / 1000);

  const result = document.getElementById("result");
  result.innerHTML = `
      You have lived for:<br>
      ${years} years,<br>
      ${months} months,<br>
      ${days} days,<br>
      ${hours} hours,<br>
      ${minutes} minutes,<br>
      ${seconds} seconds.
    `;

  setInterval(() => {
    const now = new Date();
    const diff = now.getTime() - dob.getTime();
    const secondsAlive = Math.floor(diff / 1000);
    const timer = document.getElementById("timer");
    timer.innerHTML = `You have been alive for ${secondsAlive} seconds.`;
  }, 1000);
}
