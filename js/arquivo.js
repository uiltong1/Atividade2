function enviar(){
  var nome = document.getElementById('txt-nome');

  if(nome.value != ""){
    alert("Obrigado "+nome.value+"! Mas esta área não está disponível.");
  }
  else{
    alert("Obrigado! Mas esta área não está disponível.");
  }
}
