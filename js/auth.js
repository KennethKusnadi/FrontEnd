document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;

      if (user === "admin" && pass === "1234") {
        alert("Login berhasil!");
        window.location.href = "index.html";
      } else {
        alert("Username atau password salah!");
      }
    });
  }

  // 👉 Tambahan: biar klik "Daftar" pindah ke signup.html
  const signupLink = document.getElementById("showSignup");
  if (signupLink) {
    signupLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "signup.html";
    });
  }
});
