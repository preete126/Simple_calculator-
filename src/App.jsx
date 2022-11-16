import { useState } from "react"


function App() {
  let [value, setValue] = useState("")
  let[ operator, setOperator] =  useState("");
  let [firstvalue, setFirstvalue] = useState(0);
  let [secondvalue, setSecondvalue] = useState(0);

  function Display(add,index) {
    value += index
    setValue(value)
  }
  function Operator(add , operators) {
    if (document.getElementById('screen2').value += " = "){
      document.getElementById('screen2').value = ""
    }
    firstvalue = Number(value)
    setFirstvalue(firstvalue)
    console.log(firstvalue)
    value += operators
    setValue(value)
    operator = operators
    setOperator(operator)
    document.getElementById('screen2').value += value
    value = ""
    setValue(value)
   
  }
  function Clear() {
    value = ""
    setValue(value)
    document.getElementById('screen2').value = value
  }
  function Delete() {
    let ScreenValue = document.getElementById("screen1");
    let lenghtOfString = String(ScreenValue.value).length;
    let partOfString = String(ScreenValue.value).slice(0, lenghtOfString - 1);
   value = partOfString;
    setValue(value)
  }
  function Divide() {
    let New = Number(value);
    value = 1/New
    setValue(value)
  }
  function persOperator() {
    let New = Number(value);
    value = Math.sqrt(New)
    setValue(value)
  }
  function selfOperator() {
    let New = Number(value);
    value = New / 100
    setValue(value)
  }
  function square() {
    let New = Number(value);
    value = New ** 2
    setValue(value)
  }
  
  function Equate(add, param) {
    
     secondvalue = Number(value)
     setSecondvalue(secondvalue)
     console.log(secondvalue)
     let next = value + param
    document.getElementById('screen2').value += next
    
    if(operator == " + "){
    value = firstvalue + secondvalue
    setValue(value)
  } else if(operator == " - "){
    value = firstvalue - secondvalue
    setValue(value)
  }else if(operator == " x "){
    value = firstvalue * secondvalue
    console.log(value)
    setValue(value)
  }else if(operator == " / "){
    value = firstvalue / secondvalue
    setValue(value)
  }
 
 
  }
  


  return(
    <section className="containers">
      <div>
        <input type="text" id="screen2"  readOnly />
        <input type="text" id="screen1" placeholder="0" value={value} readOnly />
        <div className="d-flex  head">
          <button  disabled>MC</button>
          <button  disabled>MR</button>
          <button >M+</button>
          <button>M-</button>
          <button>MS</button>
          <button  disabled>M</button>
        </div>
        <div className='d-flex operators mt-1'>
          <button className='operatorsbtn' onClick={selfOperator}>%</button>
          <button className='operatorsbtn' onClick={Clear}>CE</button>
          <button className='operatorsbtn' onClick={Clear}>C</button>
          <button className='operatorsbtn' onClick={Delete}>&times; </button>
          <button className='operatorsbtn' onClick={Divide}>1/x</button>
          <div  className="d-flex raise operatorsbtn" onClick={square}>
              <button className="raisebtn">x</button>
              <span className="power" >2</span>
          </div>
          <button  className="operatorsbtn" onClick={persOperator}>
          ✓
          </button>
          <button className='operatorsbtn' onClick={Add => Operator(Add, ' / ')}>➗</button>
        </div>
        <div className='d-flex operators'>
          <button className='operatorbtn' onClick={Add => Display(Add, 7)}>7</button>
          <button className='operatorbtn' onClick={Add => Display(Add, 8)}>8</button>
          <button className='operatorbtn' onClick={Add => Display(Add, 9)}>9</button>
          <button className='operatorsbtn fs-5' onClick={Add => Operator(Add, ' x ')}>✖</button>
          <button className='operatorbtn' onClick={Add => Display(Add, 4)}>4</button>
          <button className="operatorbtn" onClick={Add => Display(Add, 5)}>5</button>
          <button  className="  operatorbtn" onClick={Add => Display(Add, 6)}>
            6
          </button>
          <button className='operatorsbtn fs-2' onClick={Add => Operator(Add, ' - ')}>-</button>
          <button className='operatorbtn' onClick={Add => Display(Add, 1)}>1</button>
          <button className='operatorbtn' onClick={Add => Display(Add, 2)}>2</button>
          <button className='operatorbtn' onClick={Add => Display(Add, 3)}>3</button>
          <button className='operatorsbtn fs-2' onClick={Add => Operator(Add, ' + ')}>+</button>
          <button className='operatorbtn'>+/-</button>
          <button className="operatorbtn" onClick={Add => Display(Add, 0)}>0</button>
          <button  className="  operatorbtn" onClick={Add => Display(Add, ".")}>
            .
          </button>
          <button className='operatorsbtn fs-2 equal ' onClick={Add => Equate(Add, ' = ')} >=</button>
        </div>
      </div>
    </section>
  )
}
export default App