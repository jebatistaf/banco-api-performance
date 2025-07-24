import http from 'k6/http' // Importação de um módulo
import { sleep, check } from 'k6' // Importação de uma função
import { obterBaseURL } from '../utils/variaveis.js' // Importação de uma função
const postLogin = JSON.parse (open('../fixtures/postLogin.json')) // Chamar os dados do arquivo postLogin convertendo em um objeto Javascript

// Configuração do teste
export const options = {
  stages: [
    { duration: '5s', target: 10 }, // Aumenta o número de usuários virtuais para 10 durante 5 segundos
    { duration: '20s', target: 10 },  // Mantém 10 usuários virtuais por 20 segundos
    { duration: '5s', target: 0 } // Reduz o número de usuários virtuais para 0 durante 5 segundos
  ],

  thresholds: {
    http_req_duration: ['p(90)<3000', 'max<5000'], // Definindo os limites de duração da requisição HTTP
    http_req_failed: ['rate<0.01'] // Definindo a taxa de falhas permitida
  }
}

export default function () {
  // Teste
  const url = obterBaseURL() + '/login' // Obtendo a URL base e concatenando com o endpoint de login

  const payload = JSON.stringify(postLogin) // Convertendo o objeto postLogin em uma string JSON

  const params = {
    headers: {
      'Content-Type': 'application/json', // Definindo o tipo de conteúdo como JSON
    },
  }

  const res = http.post(url, payload, params) // Enviando a requisição POST

  check(res, {
    'Validar que o status é 200': (r) => r.status === 200, // Verificando se o status da resposta é 200
    'Validar que o token é uma string': (r) => typeof(r.json().token) == 'string' // Verificando se o token retornado é uma string
  })

  sleep(1) // Pausa de 1 segundo entre as iterações
}
