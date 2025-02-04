# Alea iacta est (A sorte está lançada)

![Badge em HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white)
![Badge em CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white)
![Badge em JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat-square&logo=javascript&logoColor=black)
![Badge: Mobile First](https://img.shields.io/badge/Mobile_First-Yes-green?style=flat-square)

> Projeto desenvolvido para praticar conceitos de HTML, CSS (responsivo) e JavaScript intermediário, envolvendo manipulação de DOM, eventos e animações simples.

## Índice

- [Alea iacta est (A sorte está lançada)](#alea-iacta-est-a-sorte-está-lançada)
  - [Índice](#índice)
  - [Sobre o Projeto](#sobre-o-projeto)
  - [Layout e Responsividade](#layout-e-responsividade)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Como Executar o Projeto](#como-executar-o-projeto)
  - [Estrutura de Pastas](#estrutura-de-pastas)
  - [Possíveis Melhorias](#possíveis-melhorias)
  - [Licença](#licença)
  - [Contato](#contato)

## Sobre o Projeto

Este projeto é um sorteador de números que permite ao usuário:

1. Definir **quantos números** deseja sortear.
2. Definir o **intervalo** (mínimo e máximo) para o sorteio.
3. Visualizar os números sorteados **um a um**, de maneira animada na tela.

O objetivo principal é **praticar**:

- Conceitos intermediários de JavaScript (funções, eventos, uso de métodos como `Set`, `Math.random()` etc.).
- Manipulação do DOM e **animações** básicas em CSS.
- Boas práticas de **responsividade** (Mobile First).

## Layout e Responsividade

- O layout foi desenvolvido seguindo o **princípio de Mobile First**, garantindo boa experiência em dispositivos de menor resolução.
- Utiliza _media queries_ para ajustar a interface em **tablets** e **desktops**.
- As cores e a identidade visual podem ser facilmente ajustadas nos arquivos de estilos do diretório `styles`.

Caso deseje ver o protótipo de referência, acesse o [Figma](https://www.figma.com/design/Xp41joE7ajs4wj1PiRJNIr/Sorteador-de-n%C3%BAmeros-(Community)?node-id=3-376&p=f&t=IIz4dYtgBE9DwikG-0).

## Funcionalidades

- **Entrada de dados**:  
  - Campo para **Quantidade** de números a sortear.  
  - Campo para **Intervalo mínimo** e **Intervalo máximo**.  
- **Botão de Sortear**:  
  - Ao clicar, faz a validação dos valores digitados e, se estiver tudo certo, gera os números aleatórios.  
- **Exibição animada** dos números na tela, usando `setInterval` (ou `setTimeout`) e **animação CSS** para cada número adicionado ao DOM.

## Tecnologias Utilizadas

- **HTML5** para a estrutura da aplicação.
- **CSS3** para estilização, com foco em responsividade:
  - Flexbox  
  - _Media queries_
  - Animações simples (keyframes)
- **JavaScript** (ES6+) para a lógica de:
  - Geração aleatória dos números.
  - Manipulação de DOM e eventos.
  - Animação da exibição final.
  
## Como Executar o Projeto

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/jakunzler/rocketseat-explorer.git
   ```

2. **Acessar a pasta do projeto**:

   ```bash
   cd rocketseat-explorer/full-stack_sorteador
   ```

3. **Abrir o arquivo `index.html`** no seu navegador (dê um duplo clique, arraste para a janela do navegador ou abra com live server).

Não é necessária nenhuma instalação adicional, pois o projeto utiliza apenas **HTML, CSS e JavaScript** puro (Vanilla JS).

## Estrutura de Pastas

A estrutura básica do projeto é:

```md
full-stack_sorteador/
│
├── index.html
├── script.js
├── README.md
└── assets/
    ├── img
        └── (imagens, ícones, etc.)
└── styles/
    └── (arquivos .css)
```

- **index.html**: marcação principal e links para CSS e JS.
- **styles/**: regras de estilo, incluindo _media queries_ para responsividade.
- **script.js**: contém toda a lógica de geração e exibição de números.
- **assets**: pasta para imagens, ícones ou outros arquivos estáticos.

## Possíveis Melhorias

- **Opção para permitir números repetidos**
- **Ordenação**
- **Exibição de histórico**
- **Mensagens de validação**
- **Animações adicionais**

## Licença

Este projeto está sob a licença [MIT](LICENSE) — fique à vontade para usá-lo e modificá-lo.

## Contato

Em caso de dúvidas, sugestões ou feedback, fique à vontade para entrar em contato:

- **Nome**: Jonas Augusto Kunzler
- **E-mail**: [k_jonasaugusto@ufg.br](mailto:k_jonasaugusto@ufg.br)
- **LinkedIn**: [linkedin](https://www.linkedin.com/in/jonas-augusto-kunzler-20a63547/)
