const form = document.getElementById("contact-form");
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputNomeContato = document.getElementById('nome-contato');
  const inputNumeroContato = document.getElementById('numero-contato');

let linha = '<tr>';
linha += `<td>${inputNomeContato.value}</td>`;
linha += `<td>${inputNumeroContato.value}</td>`;
linha += `</td>`;

  const corpoTabela = document.getElementById('contato-lista');

  const newRow = corpoTabela.insertRow();

  const nome = newRow.insertCell();
  nome.textContent = inputNomeContato.value;

  const telefone = newRow.insertCell();
  telefone.textContent = inputNumeroContato.value;

  inputNomeContato.value = '';
  inputNumeroContato.value = '';
});