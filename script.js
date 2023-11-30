function calcular(tipo, valor){
  if(tipo === 'acao'){
    if(valor === 'c'){
      //limpar o visor
      document.getElementById('resultado').value = ''
    }
    //Recupera os valores digitados e concatena com os elementos aritiméticos
    if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
      document.getElementById('resultado').value += valor
    }

    if(valor === '='){
      //Recupera os elementos digitados e o 'eval' trata como números executando as operações
      var valor_campo = eval(document.getElementById('resultado').value)
      //Retorna o valor já calculado para o visor
      document.getElementById('resultado').value = valor_campo
    }
    
  } else if(tipo === 'valor'){
    //Substitue o '0' padrão pelo valor digitado e vai concatenado mais valores
    document.getElementById('resultado').value += valor
  }
}
