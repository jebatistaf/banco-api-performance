const configLocal = JSON.parse(open('../config/config.local.json')) // Importando a configuração local

export function obterBaseURL() {
  return __ENV.BASE_URL || configLocal.baseUrl; // Retorna a URL base definida no ambiente ou um valor padrão
}