let cards = document.querySelectorAll('.card');
let titulos = document.querySelectorAll('.titulo-card');
let descricao = document.querySelectorAll('.descricao-card');
let botaoEditar = document.querySelectorAll('.botao-editar');
let botaoApagar = document.querySelectorAll('.botao-apagar');

cards.forEach((card) => {
    card.style.backgroundColor = ' #dd7108 ';
});

titulos.forEach((titulo) => {
    titulo.textContent = ' Meu card '
    titulo.style.color = ' #2b385b '
});

descricao.forEach((descricao) => {
    descricao.textContent = ' Descrição modificada pelo JavaScript'
    descricao.style.color = ' white '
    descricao.style.fontSize = ' 15px '
    descricao.style.margin = ' 3em 0'
});

botaoEditar.forEach((botao1) => {
    botao1.style.backgroundColor = 'green'
    botao1.style.color = 'white'
    botao1.style.padding = '0.5em'
    botao1.style.borderRadius = '10px'
    botao1.style.borderStyle = 'none'
    botao1.setAttribute('onclick', 'editarCard()')
})

botaoApagar.forEach((botao2) => {
    botao2.style.backgroundColor = 'red'
    botao2.style.color = 'white'
    botao2.style.padding = '0.5em'
    botao2.style.borderRadius = '10px'
    botao2.style.borderStyle = 'none'
    botao2.setAttribute('onclick', 'apagarCard()')
})

function editarCard() {
    alert('Clicou em editar!')
}

function apagarCard() {
    const pensaBem = confirm('Tem certeza que deseja deletar?')
    if(pensaBem){
        alert('Confirmado!')
    } else {
        alert('Cancelado com sucesso!')
    }
}