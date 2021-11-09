function calcular(){
  var num1 = new Number(document.getElementById('num1').value)
  var num2 = new Number(document.getElementById('num2').value)
  var operador = document.getElementById('operador').value
  var resultado = document.getElementById('resultado')

  switch(operador)
  {
    case '+': resultado.innerHTML = `${num1} ${operador} ${num2} = ${(num1 + num2)}`
      break
    
    case '-': resultado.innerHTML = `${num1} ${operador} ${num2} = ${(num1 - num2)}`
      break

    case '*': resultado.innerHTML = `${num1} ${operador} ${num2} = ${(num1 * num2)}`
      break

    case '/': resultado.innerHTML = `${num1} ${operador} ${num2} = ${(num1 / num2)}`
      break

    default: resultado.innerHTML = `Valores inválidos`
  }

}
