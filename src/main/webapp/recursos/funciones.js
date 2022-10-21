function validarForma(form1){
    var usuario = form1.usuario;
    
    if(usuario.value == "" || usuario.value == "Escribir usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    
    var password = form1.password;
    if(password.value=="" || password.value.length<4){
        alert("Debe proporcionar un Password de al menos 4 caracteres");
        password.focus();
        password.select();
        return false;
    }
    
    
    if(!form1.ch1.checked && !form1.ch2.checked && !form1.ch3.checked){
        alert("Debe seleccionar al menos una tecnologia");
        return false;
    }
    
    if(!form1.rd1.checked && !form1.rd2.checked){
        alert("Debe seleccionar su genero");
        return false;
    }
    
    var ocupacion = form1.ocupacion;
    if(ocupacion.value == "" || ocupacion.value == "Seleccionar"){
        alert("Elija una ocupacion");
        return false;
    }

    var musica = form1.musica;
    if(musica.value == ""){
        alert("Seleccione un genero musical");
        return false;
    }
    
    var comentario = form1.comentarios; 
    
    if(comentario.value === "" || comentario.value === "Escribir un texto"){
        comentario.value="Sin comentarios";
    }
}