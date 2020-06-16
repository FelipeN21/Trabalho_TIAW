var db = {
    usuarios : [
        {
            nome : "user",
            senha: "123"
        },{
            nome : "user2",
            senha: "123"
        },{
            nome : "user3",
            senha: "123"
        }
    ]
}

window.onload = () =>{
    let btn = document.getElementById('btn-login');
    btn.disabled = true;
    let validaForm = () =>{
        if(nome.value.length > 0 && senha.value.length > 0){
            btn.disabled = false;
        }else btn.disabled = true;
    };
    nome.oninput = validaForm;
    senha.oninput = validaForm;
    btn.onclick = (evento) =>{
        validar();
        
        //var x = evento;
    }
}

function validar(){
    let cont = 0;
    for(i = 0; i < db.usuarios.length; i++){
        let user = db.usuarios[i].nome;
        let pass = db.usuarios[i].senha;
        if(nome.value == user && pass == senha.value){
            cont++;
        }
    }
    console.log(cont)
    if(cont > 0){
        window.location.replace('http://google.com')
    }else alert("Vc n entrou")
}