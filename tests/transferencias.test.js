import http from 'k6/http'; // Importação do módulo http
import { sleep, check } from 'k6'; // Importação das funções sleep e check
import { obterToken } from '../helpers/autenticacao.js'; // Importação da função obterToken
import { obterBaseURL } from '../utils/variaveis.js'; // Importação da função obterBaseURL

export const options = {
  iterations: 1 // Definindo o número de iterações para o teste
  // Você pode adicionar mais opções de configuração aqui, como thresholds, stages, etc.
};

export default function() {
  const token = obterToken() // Obtendo o token de autenticação

  const url = obterBaseURL() + '/transferencias' // Obtendo a URL base e concatenando com o endpoint de transferências

  const payload = JSON.stringify({
    contaOrigem: 1, // Definindo a conta de origem
    contaDestino: 2, // Definindo a conta de destino
    valor: 11, // Definindo o valor da transferência
    token: '' // O token será adicionado no cabeçalho de autorização
  })

  const params = {
    headers: {
      'Content-Type': 'application/json', // Definindo o tipo de conteúdo como JSON
      'Authorization': 'Bearer ' + token // Adicionando o token no cabeçalho de autorização
    }
  }

  let res = http.post(url, payload, params) // Enviando a requisição POST

  check(res, { 
    "status is 201": (res) => res.status === 201 // Verificando se o status da resposta é 201
  });

  sleep(1); // Pausa de 1 segundo entre as iterações
}
