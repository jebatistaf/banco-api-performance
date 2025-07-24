import http from 'k6/http' // Importação de um módulo
import { obterBaseURL } from '../utils/variaveis.js' // Importação de uma função
const postLogin = JSON.parse(open('../fixtures/postLogin.json')) // Chamar os dados do arquivo postLogin convertendo em um objeto Javascript

export function obterToken () {
    const url = obterBaseURL() + '/login' // Obtendo a URL base e concatenando com o endpoint de login

    const payload = JSON.stringify(postLogin) // Convertendo o objeto postLogin em uma string JSON

    const params = {
        headers: {
      'Content-Type': 'application/json', // Definindo o tipo de conteúdo como JSON
        },
  }

    const res = http.post(url, payload, params) // Enviando a requisição POST

    return res.json('token') // Retornando o token da resposta JSON

}