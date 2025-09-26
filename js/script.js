// Welcome Speech
document.addEventListener("DOMContentLoaded", () => {
  const welcomeMessage = document.getElementById("welcome-message");
  const userName = prompt("Masukkan nama kamu:");
  welcomeMessage.textContent = userName
    ? `Halo ${userName}, selamat datang di website RevoU Bootcamp!`
    : "Selamat datang di website RevoU Bootcamp!";
});

// Form Message Us
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("outNama").textContent = document.getElementById("nama").value;
  document.getElementById("outTgl").textContent = document.getElementById("tgl").value;
  document.getElementById("outJk").textContent = document.querySelector('input[name="jk"]:checked')?.value || "-";
  document.getElementById("outPesan").textContent = document.getElementById("pesan").value;
  this.reset();
});

// Current Time
function updateTime() {
  document.getElementById("time").textContent = new Date().toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();