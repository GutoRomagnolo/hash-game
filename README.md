## :x: Tic Tac Toe Game! :o:

#### Esse é um projeto desenvolvido para fins avaliativos da disciplina de Programação para a Web (SI401) da Faculdade de Tecnologia da Unicamp.

<table>
  <tr>
    <td valign="center"><img src="https://user-images.githubusercontent.com/80481752/186550774-2bd51b6f-7228-4c18-9d53-fcf7cf718dfc.png" width="300px"/></td>
    <td valign="center"><img src="https://user-images.githubusercontent.com/80481752/196574960-473b0260-7d30-43d5-98f4-99639ae9b59a.png" width="230px"/></td>
  </tr>
</table>

----------

## Informações técnicas 

- O desenvolvimento do projeto foi inteiramente limitado ao JavaScript, HTML && CSS;
- Não houve o uso de bibliotecas extras;
- O design foi inteiramente desenvolvido por Figma, com ajuda do site [My Color Space](https://mycolor.space/gradient) para os degradês.
- Foram aplicados conceitos de Clean Code, visando melhorar a legibilidade e perfomance do jogo;
- Um dos requisitos para a avaliação era solicitar o nome dos dois jogadores no começo do jogo. Com isso, decidi separar o projeto em duas pastas, uma de login e outra do jogo em si, para garantir a organização. Para isso, utilizei do armazenamento local do navegador. (nosso querido local storage!)
----------

## Funcionamento do jogo

<p>Logo de início, os jogadores se deparam com a tela de "login" (entre aspas, pois é apenas o fornecimento de seus respectivos nomes).</p>

<table>
  <tr>
    <th>
      Página inicial
    </th>
    <th>
      Características principais
    </th>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/80481752/196576126-805f1a72-4dba-4806-aee5-1582c5dcd041.png" width="500px">
    </td>
    <td>
      <ul>
        <li>
          Os campos são avaliados a cada alteração, através de um eventListener, para garantir que o botão de iniciar só seja habilitado com ambos os campos de nome               preenchidos;
        </li>
        <li>
          Ao submeter o form de login, ambos os nomes serão guardados no local storage do navegador, pois seram utilizados para identificação ao decorrer do jogo.
        </li>
      <ul>
    </td>
  </tr>
</table>
  
<p>Após o login, haverá um sorteio entre os dois jogadores, para definir quem será o primeiro a decidir qual lado prefere (X ou O).</p>
  
<table>
  <tr>
    <th>
      Escolha dos lados
    </th>
    <th>
      Características principais
    </th>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/80481752/196577791-5498b953-9f6d-4adf-9885-18e66a83d671.png" width="500px">
    </td>
    <td>
      <ul>
        <li>
           Essa informação de escolha do lado, além do nome, estão sendo guardados em um objeto único para cada jogador;
        </li>
        <li>
          Esse objeto também hospedará as marcações no tabuleiro de cada jogador futuramente.
        </li>
      <ul>
    </td>
  </tr>
</table>
  
<p>Dado isso, temos um novo sorteio para decidir quem irá dar o pontapé inicial. Aí sim, temos o nosso bom e velho jogo da velha rolando!</p>
  
<table>
  <tr>
    <th>
      Tabuleiro do jogo
    </th>
    <th>
      Características principais
    </th>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/80481752/196578070-a8476c2a-006a-4b03-bca7-8abb61681c04.png">
    </td>
    <td>
      <ul>
        <li>
           A lógica de vitória está pautada em um array contendo todas as sequências que definem vitória num jogo da velha tradicional;
        </li>
        <li>
          Cada marcação dos jogadores é armazenada em um array dentro de seus objetos únicos;
        </li>
        <li>
           A cada jogada, há a validação das marcações, para saber se temos um vitorioso ou não;
        </li>
        <li>
          O jogo termina quando alguma sequência de vitória estiver presente dentro do array de escolhas de um jogador, declarando vitória, ou quando todos os espaços           do tabuleiro forem esgotados, sem um vitorioso, declarando empate.
        </li>
      <ul>
    </td>
  </tr>
</table>
  
<p>Abaixo temos as telas de vitória ou empate, contemplando o nome do vitorioso, ou simplesmente uma lamentação de empate ;(</p>

<table>
  <tr>
    <td valign="center">
      <img src="https://user-images.githubusercontent.com/80481752/196579040-4776a1e4-9d48-437f-8be3-022acfb43ade.png" width=""/>
    </td>
    <td valign="center">
      <img src="https://user-images.githubusercontent.com/80481752/196579178-d742ee09-1d17-471e-aaa8-ac5f0aa5b200.png" width=""/>
    </td>
    <td>
      <ul>
        <li>
           O botão de voltar ao início irá resetar o local storage do navegador e redirecionar ao login novamente;
        </li>
        <li>
          Para evitar problemas estranhos, adicionei um eventListener para monitar o recarregamento das páginas (F5). Caso ocorra, ele irá fazer o mesmo que o botão de           voltar. Irá resetar o local storage e retornar ao início.
        </li>
      <ul>
    </td>
  </tr>
</table>

----------
## Conclusões
  
- Fazer um jogo da velha é fácil? Com certeza! Mas fazê-lo de maneira sofisticada pode levar um bom tempo;
- Existem dezenas de lógicas para jogo da velha disponíveis na internet. A única coisa que eu reaproveitei foi as win conditions, que seriam as sequências armazenadas num array que definem se o jogo foi ganho ou não. De resto, foi pura mão na massa;
- Por mais que seja um projeto bem simples e até bobo, não pude deixar de dar meu toque nele e tentar deixá-lo com menos brechas para bugs possíveis;
- As coisas mais simples também são as coisas mais importantes!

### Eaí, curtiu o projetinho? É só clonar e jogar com alguém de sua escolha! (Dica: eu sempre começo pelo meio da última linha horizontal)





Visualização da disciplina em: https://www.dac.unicamp.br/sistemas/catalogos/grad/catalogo2021/disciplinas/si.html#disc-si401
