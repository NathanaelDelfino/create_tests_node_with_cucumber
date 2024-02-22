### NodeJS + Cucumber (EM CONSTRUÇÃO)

### Benefícios do uso de BDD, TDD e DDD em Projetos Node.js

1. **BDD (Desenvolvimento Orientado a Comportamento)**:
   - BDD enfatiza a colaboração entre diferentes partes interessadas, como desenvolvedores, gerentes de produto e analistas de negócios, através da descrição de comportamentos esperados em termos de cenários de uso.
   - Em um contexto Node.js, isso se traduz em uma maior clareza na definição de requisitos e na validação de funcionalidades, pois os cenários de teste são escritos em uma linguagem natural compreensível por todos os envolvidos.
   - A implementação dos testes em BDD também ajuda a manter um foco claro nos requisitos do usuário final, o que pode resultar em um software mais orientado às necessidades reais dos clientes.

2. **TDD (Desenvolvimento Orientado a Testes)**:
   - TDD promove o desenvolvimento incremental, onde testes automatizados são escritos antes mesmo do código de produção. Isso leva a um ciclo de desenvolvimento mais iterativo e orientado a testes.
   - No contexto de Node.js, o TDD ajuda a garantir que cada unidade de código seja testada de forma isolada e que o código final seja mais robusto e confiável.
   - Além disso, o TDD facilita a refatoração do código com confiança, uma vez que os testes garantem que o comportamento esperado não seja alterado inadvertidamente durante o processo de melhoria do código.

3. **DDD (Design Orientado a Domínio)**:
   - DDD concentra-se na modelagem de domínio de negócios e na comunicação eficaz entre a equipe de desenvolvimento e os especialistas do domínio.
   - Em projetos Node.js, a aplicação de DDD pode levar a uma melhor organização do código, com modelos de domínio claros e bem definidos, refletindo as regras de negócio da aplicação.
   - Isso resulta em um código mais modular e coeso, facilitando a manutenção e evolução do sistema ao longo do tempo.
   - Além disso, DDD promove uma linguagem ubíqua compartilhada entre todos os membros da equipe, o que reduz a lacuna de comunicação e ajuda a evitar mal-entendidos durante o desenvolvimento.

Em resumo, a combinação de BDD, TDD e DDD em projetos Node.js promove uma abordagem mais colaborativa e centrada no usuário, ao mesmo tempo que garante a qualidade e a manutenibilidade do código-fonte. Essas práticas não apenas reduzem o tempo gasto em depuração e correção de bugs, mas também fornecem uma base sólida para a evolução contínua do software em resposta às necessidades do negócio.

### Sobre o Cucumber

O Cucumber é uma ferramenta de automação de testes de software que suporta a prática de BDD. Ele permite que os testes sejam escritos em uma linguagem de domínio específico (DSL) chamada GHERKIN, que é fácil de entender por pessoas não técnicas, como stakeholders e gerentes de projeto. O Gherkin descreve o comportamento esperado do sistema em termos de cenários de teste escritos em um formato legível para humanos, usando palavras-chave como "Dado", "Quando" e "Então". Esses cenários são então executados pelo Cucumber, que automatiza a interação com o sistema e verifica se o comportamento esperado é observado.

### GHERKIN

- **G:** Given (Dado) - Descreve o estado inicial ou contexto do cenário de teste.
- **H:** When (Quando) - Descreve a ação ou evento que desencadeia o comportamento a ser testado.
- **E:** Then (Então) - Descreve o resultado esperado após a ação ou evento especificado.
- **R:** Rule (Regra) - Opcionalmente usado para agrupar cenários relacionados sob uma regra específica.
- **K:** And (E) - Usado para adicionar múltiplos passos ao mesmo nível de hierarquia.
- **I:** Incomplete (Incompleto) - Indica um cenário ou passo incompleto, geralmente usado como marcador de espaço reservado durante o desenvolvimento.
- **N:** Narrative (Narrativa) - Opcionalmente usado para fornecer uma descrição adicional ou contexto ao início do arquivo de especificação.


### O que é necessário para criar um projeto utilizando BDD?

1. **O primerio passo é instalar o cucumber via NPM, Yarn ou via PNPM. (O que você preferir. hahah)**
<br/>
<img width="1065" alt="instalação cucumber" src="https://github.com/NathanaelDelfino/create_tests_node_with_cucumber/assets/7662248/ec17b401-7db9-4f9a-a50b-805c9c2ae9f0">

<div align="center">
  [Foto do site cucumber.io](https://cucumber.io/docs/installation/javascript)
</div>
<br/>
ℹ️ É ideal que ao instalar se add ao comando -g para que possamos instalar de maneira global o cucumber
<br/>
<br/>

2. **O próximo passo é instalar esses 3 components ao seu VS Code**:
   - O primeiro component é o cucumber, ele serve para add suporte ao cucumber no seu VS Code.
   - O segundo é o Cucumber (Gherkin) Full Support, ele irá nos auxiliar com alguns snipets para a criação do GHERKIN
   - O terceiro é o CucumberJS Test Runner, ele irá add o componente no VS Code, facilitando a execução do TDD

<br/>
<br/>
<img width="702" alt="Componentes necessários" src="https://github.com/NathanaelDelfino/create_tests_node_with_cucumber/assets/7662248/bf36b269-5d24-4b62-be92-0da5fc881eb9">

<br/>
<br/>


### Vamos criar um projeto

<br/>
<br/>

1. **Criando o projeto**:
- Com tudo configurado agora podemos criar o projeto, para isso vamos ao nosso diretório a onde o projeto será criado e vamos executar o comando `npm init` e preencher os dados solicitados.<br/>
   ℹ️ Caso voê queira é póssivel se pular o passo a passo, digitando o comando `npm init -y`, assim o node irá criar um template genérico<br/>
   A sua tela deve estar semelhante a tela a baixo.

<img width="883" alt="Criando o projeto Node" src="https://github.com/NathanaelDelfino/create_tests_node_with_cucumber/assets/7662248/fdb95bf0-68b3-4507-9211-868c24111c23">

2. **Com o projeto criado**:
   - Com o projeto criado, entramos por meio do prompt mesmo, com o comando `cd` e o nome da pasta do nosso projeto, no meu caso `create_tests_node_with_cucumber`, após isso executamos o comando o comando `code .` para abrir o nosso projeto no VS Code.
   - Com isso feito vamos abrir o terminal do VS Code e vamos digitar `npm install @cucumber\cucumber --save-dev`. seu arquivo deve assim:

```
{
  "name": "node_cucumber_test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {}
}
```
<br/>
3. Agora vamos iniciar o desenvolvimento da camada que irá conter a descrição de cada funcionalidade da nossa aplicacação.




<img width="1439" alt="Execução dos testes realizando o processo RED - GREN - REFACTOR" src="https://github.com/NathanaelDelfino/create_tests_node_with_cucumber/assets/7662248/05fc8f77-2b8d-4340-86e6-9b40f0a18b42">
