const dataInicio = new Date("2026-04-03T00:00:00");

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const segundosTotal = Math.floor(diferenca / 1000);
  const dias = Math.floor(segundosTotal / 86400);
  const horas = Math.floor((segundosTotal % 86400) / 3600);
  const minutos = Math.floor((segundosTotal % 3600) / 60);
  const segundos = segundosTotal % 60;

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();

const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");

btnMusica.addEventListener("click", async () => {
  if (musica.paused) {
    try {
      await musica.play();
      btnMusica.textContent = "⏸ Pausar nossa música";
    } catch (error) {
      alert("Coloque o arquivo musica.mp3 dentro da pasta assets para tocar a música.");
    }
  } else {
    musica.pause();
    btnMusica.textContent = "▶ Tocar nossa música";
  }
});

const elementos = document.querySelectorAll(".section, .timeline-item, .memory-card");
elementos.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.16 });

elementos.forEach((el) => observer.observe(el));
