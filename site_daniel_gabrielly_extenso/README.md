# Site Daniel & Gabrielly

Site romântico mais completo, feito para publicar no GitHub Pages.

## Onde editar os textos

Abra o arquivo:

`index.html`

Procure pelos títulos das seções:

- Como tudo começou
- Nossa linha do tempo
- Pequenas coisas que amo em nós
- Galeria
- Motivos para eu amar você
- Carta final

Você pode escrever bastante texto em cada `<p>...</p>`.

## Como adicionar mais momentos na linha do tempo

No `index.html`, copie um bloco inteiro parecido com este:

```html
<article class="timeline-item left">
  <div class="timeline-content">
    <span class="date">DATA AQUI</span>
    <h3>TÍTULO AQUI</h3>
    <p>TEXTO AQUI</p>
    <img src="assets/photos/timeline1.jpg" alt="Foto" />
  </div>
</article>
```

Cole abaixo dos outros e alterne `left` e `right`.

## Onde trocar as fotos

Substitua as imagens dentro de:

`assets/photos`

Principais arquivos:

- capa.jpg
- foto1.jpg
- foto2.jpg
- timeline1.jpg até timeline5.jpg
- galeria1.jpg até galeria8.jpg

Mantenha os mesmos nomes ou altere os caminhos no HTML.

## Como colocar a música

Coloque um arquivo MP3 em:

`assets/musica.mp3`

Por causa de direitos autorais, o arquivo da música não vem incluso. Você precisa usar um arquivo obtido legalmente.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos.
3. Vá em `Settings`.
4. Vá em `Pages`.
5. Em `Branch`, selecione `main`.
6. Salve.
7. O GitHub vai gerar o link do site.
