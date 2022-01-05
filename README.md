
<h1 align="center" class="line-1 anim-typewriter">Ouve aee</h1>



<img align="center"  class="img__project " src="./screen.gif">

<div align="center"  class="links">
    <a href="#the_challenge">O desafio</a> |
     <a href="#links">Links</a> |
      <a href="#built_with">Ferramentas usadas</a> |
       <a href="#author">Coisa para se fazer</a>  |
       <a href="#resources">Recursos</a>
</div>

<h2 id="the_challenge"> 🌋 O desafio</h2>

O objetivo será implementar um Webapp de listagem e pré-visualização de músicas.<br>
O projeto deverá ser entregue em forma de repositório público com as instruções de instalação e execução.

1º View:

- Deverá apresentar a lista das principais músicas do momento listadas no Deezer;
- Também deve existir um campo de pesquisa por texto onde podemos pesquisar por álbum, artista, ou título musical;
- Quando realizar alguma pesquisa, a listagem inicial deve ser substituída pela listagem referente a pesquisa. (Usar o mesmo componente de listagem)

Os itens da lista devem apresentar:

- Os dados da música como (capa do álbum, título, cantor, duração);
- Um botão para acessar a musica completa no Deezer;
- Um botão de play/pause para escutar a prévia da música;
- Um botão para adicionar a música na lista de músicas favoritas;

2º View:

- Será apresentada a lista com as músicas escolhidas pelo usuário na tela principal. A listagem deve ser semelhante a da tela inicial, porem deve mostrar o botão para remover da lista de favoritos


<h2 id="links">🔗 Links</h2>

- Live Site URL:  [https://player-music-pi.vercel.app/](https://player-music-pi.vercel.app/)


<h2 id="built_with">👷‍♂️ Ferramentas usadas</h2>


-  <img src="https://img.icons8.com/color/20/000000/typescript.png"/> TypeScrpt
-  <img class="icon" height="20" src="https://avatars-04.gitter.im/group/iv/4/5800767ed73408ce4f2e2711"/> Styled-Components
-  <img src="https://img.icons8.com/plasticine/20/000000/react.png"/> React JS
- <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" height="20"/> Next JS
- <img src="https://easypm.ie/wp-content/uploads/2020/12/axios-icon.png" height="20"> Axios



<h2 id="author">👨‍🎓 Coisa para se fazer </h2>

### Pesquisa
- [x] Ver sites de musicas como referincia do designer 
- [x] Criar logo/icone
- [x] Criar esboço do layout no figma 
- [x] Estudar como que funciona a API do dezzer
- [x] Criar um checklist de tarefas para se fazer do resto do projeto  


### Componentes

- [x] Criar Header
  - [x] logo
  - [x] barra de pesquisa 
  - [x] Botão de musicas favoritas
  
- [x] Criar menu 
  - [x] Sessão que mostra os sons mais tocados por região
  - [x] Sessão que mostra resultados da pesquisar
  - [x] Sessão que mostra as musicas favoritas  
  - [x] Elemento de musica individual 
  - [x] Titulo H1 com oque esta na tela 

- [x] Criar footer 
  - [x] mostras (capa, nome do artista e nome da musica)
  - [x] controle da musica ( play, pause, duração total e atual, barra de progresso musica)
  - [x] Controle de volume (barrinha e botoes de aumentar e diminuir)

- [x] Pagina de nenhum resultado encontrado

### API
- [x] API de pesquisa de musicas
  - [x] Pesquisa por tudo
  - [ ] Pesquisa por musica
  - [ ] Pesquisa por artista 
- [x] API dados do usuario
- [x] API de musicas mais tocadas na regiao  

### Funcionalidades 
- [x] Mostrar musicas mais tocadas por regiao
  - [x] Mostrar o nome da gerião de maneira dinamica 
- [x] Poder fazer as pesquisa e renderizar na tela 
- [x] Monstrar mais resultados da pesquisa por um botão 
- [x] Mandar uma musica para para ser tocada
- [x] Controlar totalmente a musica
  - [x] tocar
  - [x] Pausar 
  - [x] controle de  volume  
  - [ ] Reproduzir todas as musicas favoritas
- [x] Poder adicionar/remover uma musica dos favoritos
- [x] Mostrar o coração colorido quando um musica ja estiver no favoritos 
- [x] Mostrar todas as musicas favoritas em um Sessão
- [ ] Salvar a ultima musica tocada no localStorage

### Otimização / Refatoração
- [ ] Ativar SSR na home da pagina
- [ ] Usar **memo**, **useMemo** e **useCallback** aonde for presizo 
- [ ] Verificar fuxo de renderização de componentes e evitar renderizações desnecessárias 
- [ ] Da uma olhada em tudos os componentes e tentar deixar tudo mais simples e organizado 

### Testes 
- [ ] Testes unitarios
- [ ] Testes de integração
- [ ] Testar interface com leitores de tela 
- [ ] Testar em outros navegadores 
  - [x] Chrome 
  - [ ] Firefox
  - [ ] Opera 
  - [ ] Responsively
  - [ ] Safari 
  - [ ] Brave
- [ ] Testa em coneção 3G lenta 

### Finazalização
- [x] Deixar o repositorio publico 
- [x] Hospedar na vercel 
- [ ] Pedir um feedback de um amigo programador
- [ ] Personalizar o Readme
  - [x] Gravar um gif da pagina em funcionamento
  - [ ] 
- [x] Enviar o email ate 23:59 do dia 04/01/2022

### Extra (se der tempo)
- [ ] Adicionar animações do GSAP
- [ ] PWA
  

<h2 id="resources">🚧 Pobremas A corrigir</h2>

- [ ] Quando clica no botão de ver mais itens, a pagina automaticamente scrolla para o final da pagina.
- [ ] Verificar quando uma musica não tem preview e mostrar uma capa de tipo sem preview ou um aviso para o usuario

<h2 id="resources">📚 Recursos</h2>


- Para alguns elementos que eu queria um tamanho diferente em varias telas eu usei uma bibliote que eu to desenvolvendo que se chama progressive-size, que tem [origem nesse  artigo](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/#for-those-who-dont-mind-that-edge-case), é por isso que alguns elementos o tamanho nao ta em PX mais sim em função css usando o clamp, min, max e calc.
- Documentation [react JS](https://reactjs.org/docs/getting-started.html) 




