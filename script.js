var hamburguer = document.querySelector('.hamburguer');
var btnform = document.querySelector('.btn-form')
var nome = document.querySelector('#name');
var email = document.querySelector('#email');
var invest = document.querySelector('#invest');
var msg = document.querySelector('#msg')
var res = document.querySelector('.res-form');

//menu hamburguer
hamburguer.addEventListener('click' , function(){
    document.querySelector('.container-center').classList.toggle('show-menu');
});


//verifica formulário
btnform.addEventListener('click' ,function(){
    if(nome.value.length == 0 || email.value.length == 0 || invest.value.length == 0 || msg.value.length == 0)
    {
        res.innerHTML = `Um ou mais campos possuem um erro. Verifique e tente novamente.`;
    }
    else
    {
        res.innerHTML = 'Enviado!';
        nome.value = '';
        email.value = '';
        invest.value = '';
        msg.value = '';
    }
})