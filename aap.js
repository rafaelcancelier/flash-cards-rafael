function criaCartao ( Categoria, pergunta, resposta){
   let container = document.getElementById( 'container');
   let catao = document.createElement('article');
   criaCartao.clasName = 'cartao';

   cartao.innerHTML = `
     <div class="cartao__conteudo">
                 <h3>${categoria}</h3>
                 <div class="cartao__conteudo__pergunta">
                        <p>$[pergunta]</p>
                </div>
                <div class="cartao__conteudo__resposta">
                        <p>${resposta}</p>
                    </div>
     </div> 
   `

let repostaEstaVisivel = false;

function viraCartao(){
  repostaEstaVisivel = !repostaEstaVisivel;
  cartao.classlist.toggle('active', repostaEstaVisivel);
}

cartao.addEventListener('click', viraCartao)

   container.appendChild(catao);
}