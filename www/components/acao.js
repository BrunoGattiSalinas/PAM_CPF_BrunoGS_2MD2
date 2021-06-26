// This is a JavaScript file

$(document).on("click", "#buscar", function(){
    $.ajax({
     type: "get",
     url:"http://viacep.com.br/ws/"+$("#cep").val()+"/json/",  
     success: function(data){
       var conteudo;
       conteudo = "<p><strong>Logradouro:</strong>"+data.logradouro+"</p>";
       conteudo += "<p><strong>Bairro:</strong>"+data.bairro+"</p>";
       conteudo += "<p><strong>Cidade:</strong>"+data.localidade+"</p>";
       conteudo += "<p><strong>Esatado:</strong>"+data.uf+"</p>";

       $("#dadoscep").html(conteudo);
     },
     error: function(){
      alert("Deu erro, tente novamente");
     }
    });
});