function carregar(){
var msg = document.getElementById('msg');
var img = document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`;

if (hora >= 0 && hora < 12){
    img.src = 'img/fotomanha.png';
    document.body.style.background = '#ffd16f';
}
else if(hora >= 12 && hora <= 18){
    img.src = 'img/fototarde.png';
    document.body.style.background = '#9bb2c4';
}
else{
    img.src = 'img/fotonoite.png';
    document.body.style.background = '#354555';
}
}