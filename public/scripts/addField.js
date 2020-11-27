//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', clonefield)
//Executar uma acao
function clonefield() {
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false

    //Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field no momento e limpa ele
        field.value = ""
        field.value = ""
    });

    //Colocar na pagina: onde?
    document.querySelector('#schedule-item').appendChild(newFieldContainer)
}