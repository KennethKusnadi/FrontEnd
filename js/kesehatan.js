document.addEventListener("DOMContentLoaded", () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) { alert("Silakan login terlebih dahulu."); window.location.href = "login.html"; return; }

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        alert("Anda berhasil logout.");
        window.location.href = "login.html";
      });
    }
  } catch (err) {
    console.error("kesehatan.js error:", err);
  }
});
