let clickCount = 0;

function showHeart() {
  // 💖 Buat emoji hati
  const heart = document.createElement('div');
  heart.innerText = '💖';
  heart.style.fontSize = `${Math.random() * 30 + 20}px`;
  heart.style.position = 'absolute';
  heart.style.left = `${Math.random() * window.innerWidth}px`;
  heart.style.top = `${Math.random() * window.innerHeight}px`;
  heart.style.animation = 'float 3s ease-in-out';
  heart.style.zIndex = 1000;
  heart.style.pointerEvents = 'none';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);

  // 🎊 Confetti setiap klik (jika tersedia)
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  // 💌 Pesan rahasia muncul saat klik ke-5
  clickCount++;
  if (clickCount === 5) {
    const secret = document.getElementById("secret");
    if (secret) {
      secret.style.display = "block";
    }
  }

  // 🌈 Pindah ke halaman galeri saat klik ke-20
  if (clickCount === 20) {
    window.location.href = "gallery.html";
  }
}
