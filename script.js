let alvo = "VITOR";
let filaAtual = 1;
let trancado = false;

const campo = document.getElementById("campo");
const botao = document.getElementById("btnEnvio");

botao.onclick = testar;
campo.onkeydown = (e) => {
  if (e.key === "Enter") testar();
};

function testar() {
  if (trancado) return;

  const palavra = campo.value.toUpperCase();
  if (palavra.length !== 5) return;

  const linha = document.getElementById("f" + filaAtual);
  analisar(palavra, linha);

  if (palavra === alvo) trancado = true;

  filaAtual++;
  campo.value = "";
}

function analisar(p, linha) {
  for (let i = 0; i < 5; i++) {
    let bloco = document.createElement("div");
    bloco.classList.add("bloco");
    bloco.textContent = p[i];

    if (p[i] === alvo[i]) {
      bloco.classList.add("acerto");
    } else if (alvo.includes(p[i])) {
      bloco.classList.add("meio");
    } else {
      bloco.classList.add("falha");
    }

    linha.appendChild(bloco);
  }
}
