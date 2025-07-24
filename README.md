# Testes de Performance com JavaScript e K6

## Introdução

Este repositório foi criado para facilitar a execução de testes de performance em APIs bancárias utilizando JavaScript e a ferramenta K6. Os scripts simulam operações reais, como transferências e autenticação, permitindo identificar gargalos, validar limites de carga e garantir a estabilidade dos serviços.

## Tecnologias Utilizadas

- **K6:** Ferramenta moderna para testes de carga e performance, com suporte a JavaScript.
- **JavaScript (ES6+):** Linguagem utilizada para escrever os scripts de teste.
- **Node.js:** Utilizado para scripts auxiliares e organização do projeto.

## Estrutura do Repositório

```
banco-api-performance/
│
├── helpers/           # Funções auxiliares (ex: autenticação)
├── tests/             # Scripts de teste de performance
├── utils/             # Utilitários e variáveis globais
├── config/            # Arquivo de configuração de variáveis de ambiente
├── fixtures/          # Dados de entrada para os testes
├── html-report.html/  # Relatórios de execução
├── README.md          # Documentação do projeto
```

## Modo de Instalação

1. **Instale o K6:**  
   Siga as instruções oficiais em [K6 Installation](https://k6.io/docs/getting-started/installation/) para instalar o K6 em seu sistema operacional.

2. **Clone o repositório:**  
   ```sh
   git clone https://github.com/jebatistaf/banco-api-performance
   cd banco-api-performance
   ```

## Modo de Execução

1. **Configure a variável de ambiente BASE_URL:**  
   Antes de rodar os testes, defina a variável `BASE_URL` com a URL base da API que será testada.  
   Exemplo:  
    {
    "baseUrl": "http://localhost:3000"
    }

2. **Execute o teste com relatório em tempo real e exportação:**  
   Para acompanhar o desempenho em tempo real e gerar um relatório ao final, utilize os parâmetros abaixo:

   ```bash
   K6_WEB_DASHBOARD=true \
   K6_WEB_DASHBOARD_EXPORT=html-report.html \
   k6 run tests/transferencias.test.js \
   -e BASE_URL=http://localhost:3000
   ```
   - **K6_WEB_DASHBOARD=true:** Habilita o dashboard web para visualização dos resultados em tempo real.
   - **K6_WEB_DASHBOARD_EXPORT=html-report.html:** Exporta o relatório final em formato HTML.
   - **k6 run tests/transferencias.test.js:** Executa o script de teste desejado.

3. **Acompanhe o relatório:** 
   - Ao término do teste, o relatório será salvo como `html-report.html` na raiz do projeto.

## Observações

- Você pode criar e executar outros scripts de teste dentro da pasta `tests/`, adaptando os cenários conforme a necessidade.
- Certifique-se de que as funções auxiliares e variáveis estejam corretamente configuradas para o ambiente de teste.
- Consulte a [documentação oficial do K6](https://k6.io/docs/) para explorar mais opções de configuração, thresholds e relatórios.
