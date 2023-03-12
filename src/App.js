import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [mainLength,setMainLenth] = useState(0);
  const [cutLength,setCutLength] = useState(0);
  const [mainCut2222,setmainCut2] = useState(0);
  const [loading,setloading] = useState(false);
  const [totalCutLengths,setTotalCutLengths] = useState([]);
  const [todos, setTodos] = useState([
]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    setCutLength("");
  };
  const reset = () => {
    setTodos([]);
    setCutLength("");
    setMainLenth(0);
    setmainCut2(0);
    setloading(false);
    setTotalCutLengths([]);
  };

const calculate = () => {
  if(!calculate || !todos)
  {
    alert("enter length and cutes")
  }
  else
  {
    // alert('ok');
    setloading(true);

    let totalCut = todos.reduce((n, {text}) => n + Number(text), 0);
    let mainCut2 = Number(mainLength)-Number(totalCut);
    console.log("mainCut2",mainCut2);
    setmainCut2(mainCut2);
    countCurrency(mainCut2);
  }

}
 
  function countCurrency(amount)
  {

      let notes = [300,225,150,75];

      let noteCounter = Array(4).fill(0);

      let abc = [];

      

      // count notes using Greedy approach

      for (let i = 0; i < 4; i++) {

          if (amount >= notes[i]) {

              noteCounter[i] = Math.floor(amount / notes[i]);

              amount = amount % notes[i];

          }

      }

  
      for (let i = 0; i < 4; i++) {

          if (noteCounter[i] != 0) {
            let mainObj = {"key":notes[i],"length":noteCounter[i]}
            console.log("mainObj",mainObj);
            var notes2 = notes[i];
            var lenth2 = noteCounter[i];
            let myObj = {
              "notes2":notes2,
              "lenth2":lenth2,
            }
            abc.push(myObj);
            const newTodos = [...totalCutLengths, myObj];
            console.log("newTodos",newTodos);
          }

      }
      setTimeout(() => {
        console.log("abcabc",abc);
        setTotalCutLengths(abc);
        setloading(false);


    }, 2000);;


  }

  const buttonClicked = ()=>{
    if(!cutLength)
    {
      alert("please enter cut length");
    }
    else
    {

      addTodo(cutLength);
    }
    
  }
   


  const mainDiv = totalCutLengths.reduce((n, {notes2,lenth2}) => n + Number(notes2*lenth2), 0);

  const percentage = (100*mainDiv)/mainCut2222;


  return (
    <div className="container">
            <div className='row'>
                 <div className='col-lg-12 mt-4'>
                    <div className='form-group'>
                          <label>Enter Main Length <span className='text-danger'>*</span> </label>
                          <input className='form-control' type="number" onChange={(e)=>{setMainLenth(e.target.value)}} placeholder='Enter Length' />
                    </div>
                    
                  </div>
                 <div className='col-lg-12'>
                  <div className='row'>
                    <div className='col-lg-5'>  
                          <div className='form-group'>
                            <label>Enter Cut Length Multiple  <span className='text-danger'>*</span> </label>
                            <input className='form-control' value={cutLength} onChange={(e)=>{setCutLength(e.target.value)}}  placeholder='Enter Cut' />
                          </div>
                    </div>
                    <div className='col-lg-2 mt-4'>  
                          <div className='form-group'>
                              <button onClick={buttonClicked} className='btn btn-success mr-2'>
                                Add +
                              </button>
                            
                          </div>
                    </div>
                    <div className='col-lg-2 mt-4 text-left'>  
                          <div className='form-group'>
                          <button onClick={reset} className='btn btn-danger text-left'>
                                Reset
                              </button>
                            
                          </div>
                    </div>
                  </div>
                  
                    <div className='col-lg-12 mt-4'>  
                          <table className='table table-striped table-bordered'>
                              <tr>
                                  <th>Cut No</th>
                                  <th>Cut Length</th>
                              </tr>
                              {todos.map((todo, index) => (
                              <tr key={index}>
                                <td>{index+1}</td>
                                <td>{todo.text}</td>
                              </tr>
                            ))}
                            <tr>
                              <th>
                                Total Cut Length
                              </th>
                              <th>
                                {todos && todos.reduce((n, {text}) => n + Number(text), 0)}
                              </th>
                            </tr>
                          
                                            </table>
                         
                    </div>
                    <div className='col-lg-12 mt-4'>  
                    <button className='btn btn-primary' onClick={calculate}>Calculate</button>
                    </div>
                  </div>
                  
                {loading ? (<div class="spinner-border2" role="status">
                <span class="sr-only">Loading....</span>
              </div>):null}
                  {totalCutLengths.length > 0 ? (<table className='table table-striped table-bordered'>
                              <tr>
                                  <th>Sr No</th>
                                  <th>Sections</th>
                                  <th>Value</th>
                              </tr>
                              {totalCutLengths.map((todo, index) => (
                              <tr key={index}>
                                <td>{index+1}</td>
                                <td>{todo.notes2}</td>
                                <td>{todo.lenth2}</td>
                              </tr>
                            ))}
                            <tr>
                                <th>Total</th>
                                <th>{mainCut2222}</th>
                                <th>{totalCutLengths && totalCutLengths.reduce((n, {notes2,lenth2}) => n + Number(notes2*lenth2), 0)}</th>
                            </tr>
                            <tr>
                              <th>Wastage Percentage</th>
                              <th>{percentage ? (100-percentage).toFixed(2) : 0}%</th>
                              <th></th>
                            </tr>
         
                    </table>):null}


    </div>
    </div>
  );
}

export default App;
