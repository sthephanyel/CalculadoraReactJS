import { useContext, useEffect, useState } from "react";
import '../app.css'
import { FunctionClicks } from "../context/FunctionsClick";

function ProjectCalculeta(){
    const Click = useContext(FunctionClicks);

    //esse useState serve armazenar os valores de cada button, sendo incrementado a cada novo valor
    const [result, setResult] = useState('');
    //esse useState foi feito para impedir que o usuario possa colocar mais de um caractere especial na calculadora
    const [repeatSpecial, setRepeatSpecial] = useState(0);

//Esse useEffect funciona para que não seja possivel ter mais de um caractere especial (-,+,/,*)
// se o valor do repeatSpecial, foi maior que 2, esse useEffect é ativado
  useEffect(()=>{
      setResult(result.slice(0, result.length -1));
      setRepeatSpecial(0);
  },[repeatSpecial==2]);

  //Nessa função o 'name' do botao digitado e o armazena no useState do 'result';
  const handleClick= (e) =>{
      //para cada novo click, o valor do name é armazenado, sendo ativado atraves do event onClick
      setResult(result.concat(e.target.name));
      setRepeatSpecial(0);
  };

//essa função foi feita para os caracteres especiais, funciona da mesma forma do handleClick
// a diferença é que altera um useState feito justamente para ter o controle dos caracteres especiais.
  const handleClickSpecial=(e)=>{
    setResult(result.concat(e.target.name));
    setRepeatSpecial(repeatSpecial +1);
};

//essa função apenas apaga tudo que existe no result
//por precaução tb reseta o valor do repeatSpecial
  const clear =()=>{
    setResult('');
    setRepeatSpecial(0);
  };

  //Essa função  serve para apagar o ultimo caractere do result, caso o valor seja 'Error', ele simplismente apaga tudo.
  const backspace =()=>{
    if(result=='Error'){
      setResult('');
    }else{
      setResult(result.slice(0, result.length -1));
    }
  };

  //nessa função o calculo dos valores é feito
  //o try e catch foi feito para caso o usuario venha de alguma forma colocar mais de 1 caractere especial
  const calculate=()=>{
    try{
      setResult(eval(result).toString());
    }catch(err){
      setResult('Error');
    }
    
  }
    return(
    <>
    <div className='container' id="container">
      <form>
        <input type="text" value={result}></input>
      </form>
      <div className='keypad'>
        <button className='highlight' onClick={clear} id="clear">Clear</button>
        <button className='highlight' onClick={backspace} id="backspace">C</button>
        <button className='highlight' name="/" onClick={handleClickSpecial}>&divide;</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button className='highlight' name="*" onClick={handleClickSpecial}>&times;</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button className='highlight' name="-" onClick={handleClickSpecial}>&ndash;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button className='highlight' name="+" onClick={handleClickSpecial} >+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button className='highlight' onClick={calculate} id='result'>=</button>
      </div>
    </div>
    </>
    );
}
export default ProjectCalculeta;