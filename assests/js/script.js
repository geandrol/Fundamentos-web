/*No Javascript podemos criar variaveis com 3 formas
var  variaves de escopo globo [escopo determina a "fronteira" do nosso codigo]

let variavel de escopo local, criada para evitar problema de conflito de escopo 
const
*/ 

/*
Case Senesitive = reconhece letras maiusculas e minusculas

pro Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classes: getElementsByClassName()
por Seletor: querySelector()
*/


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let icone = document.querySelector("#icone")
let icone2 = document.querySelector("#icone2")

nome.style.width = '39%'
email.style.width = '39%'


function validaNome(){
let txtNome = document.querySelector("#txtNome")
 if(nome.value.length < 2)
 {  
   txtNome.innerHTML = 'Deu ruim nome invalido'
   txtNome.style.color = 'red'
 } 
 else if (nome.value.length <= 2)
 {  
   txtNome.innerHTML = 'Ainda deu ruim nome continua invalido'
   txtNome.style.color = 'red'
 }
 else {
    txtNome.innerHTML = 'Agora deu bom nome valido'
    txtNome.style.color = 'green'
    nomeOk = true
 }
}
function validaEmail()
{
 let txtEmail = document.querySelector('#txtEmail')
 if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) 
 {
    txtEmail.innerHTML = 'E-mail invalido'
    txtEmail.style.color = 'red'
 }else{
    txtEmail.innerHTML = 'E-mail valido'
    txtEmail.style.color = 'green'
    emailOk = true
 }
}
function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
     if(assunto.value.length >= 100)
     {  
       txtAssunto.innerHTML = 'Texto muito grande, por favor insira um texto com 100 caracteres no maximo'
       txtAssunto.style.color = 'red'
       txtAssunto.style.display = 'block'
     } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
     }
    }
    function enviar()
    {
     if(nomeOk == true && emailOk == true && assuntoOk ==true)
     {
        alert ('formulario enviado com sucesso')
     }else
     {
         alert ('Preencha o formulario correamente antes de enviar')
     }
    }
   