import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFunds,widthdrawFunds } from '.';

function App() {
  //1. State/Hook Area
  let store = useSelector(store=>store);
  let dispatch = useDispatch()

  //2. Function Defination Area
  let addFund = ()=>{
    //alert('Add Fund');
    let x = parseInt(prompt('Enter the amount to add fund ?'));
   // alert(x);
    dispatch(addFunds(x));

  }

  let withdrawFund = ()=>{
    //alert('okokokokokk,');
    let y = parseInt(prompt('Enter the amount to withdraw ?'));
    //alert(y);
    dispatch(widthdrawFunds(y));
  }
  //3. Return Statement
  return (
    <div className="App">
         {console.log(store.rootReducer.value)}
          <h1>Redux Toolkit Assignment</h1>
          <h1>Amount {store.rootReducer.value}</h1>
          <button onClick={(e)=>{ addFund() }}>Add Fund</button>
          <button onClick={(e)=>{ withdrawFund()}}>Withdraw</button>
    </div>
  );
}

export default App;
