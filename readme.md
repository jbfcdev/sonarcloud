This is a simple app for getting started with unit tests and sonarcloud integration

- Serve app:
cd server
node app.js

- Use:
Browser to:
http://localhost:3000/client/index.html

- Run tests:
npm test

Some resources:
- https://www.geeksforgeeks.org/qr-code-generator-service-with-node-js-and-express-js/
- https://expressjs.com/en/starter/static-files.html
- https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-nodejs

Here is the challenge:
- Crie uma pequena aplicação simples em node.js (qualquer aplicação mesmo)
- Crie testes de unidade para essa aplicação
- Crie uma pipeline de CI utilizando o Github actions que:
- Instale a aplicação
- Execute os testes
- Execute o SonarCloud
- Suba essa aplicação para um repositório público no Github e ative o status check para que - seja possível dar o merge apenas se a aplicação passar na pipeline de CI e também se a aplicação passar no quality gate do SonarCloud.
- Crie uma Pull Request (PR) realizando todo o processo.
