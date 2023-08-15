function typeWrite(elemento) {
  // elemento = titulo
  const textoArray = elemento.innerHTML.split(""); // cada letra do texto fica dentro de uma array. // o inner faz virar array. o split separa cada letra do texto de acordo com os parametros
  elemento.innerHTML = ""; // faz o texto começar com nada
  textoArray.forEach((letra, i) => {
    // para cada letra, pegar o índice
    setTimeout(function () {
      elemento.innerHTML += letra; //adiciona uma letra seguida da outra
    }, 75 * i); // 75 milissegundo p aparecer cada letra (por isso o i)
  });
}

const title = document.querySelector("#animacao"); //pega o elemento h1 para animar
typeWrite(title);
