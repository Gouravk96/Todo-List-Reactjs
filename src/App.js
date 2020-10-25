
import React,{useState} from 'react';
import './App.css'
// function App() {
// const [text, setText]=useState('');
// const [item,setItem]=useState([]);


// const onTextChange=(event) =>{
//   setText(event.target.value);
// }
// const listofItems=() =>{
//   setItem((prev_val)=>{
//     console.log([...prev_val,text]);
//   })

// }
//   return (
//    <>
//    <div className="main_div">
//      <div className='content'>
//        <h1>ToDO List</h1>
//        <br/>
//        <input type='text'
//        value={text} 
//        onChange={onTextChange}/>
//        <button onClick={listofItems}>+</button>
//    <div>
//     { this.item.map((itemsval)=>{
//     return <h1>{itemsval} </h1> 

//   })}
//   <li>Buy Mnago</li>
//   </div>
//      </div>
//    </div>
//    </>
//   );
// }
// export default App;


class App extends React.Component{
  state={text:"",
         item:[]};
onChange=this.onChange.bind(this);;
onClick=this.onClick.bind(this);
deleteItem=this.deleteItem.bind(this);
onChange(e){
    this.setState({text:e.target.value})
  }

  onClick(){
 var itemInstance=this.state.item;
 itemInstance.push(this.state.text);
 this.setState({item:itemInstance})
//  console.log(this.state.item);
 this.setState({text:""})
  }   
 
deleteItem(event){
  var id=event.target.id;
  console.log(id);
  var itemInstance=this.state.item;
  itemInstance.splice(id,1);
  this.setState({
    item:itemInstance
  })
  console.log(this.item);
}

render(){
  return(
    <>
    <div className="main_div">
      <div className='content'>
        <h1>ToDO List</h1>
      <input type='text'
      value={this.state.text} onChange=    {this.onChange} />
   .   <button onClick={this.onClick}>+</button>
      <ol>
          
          {this.state.item.map((val, index)=>{
         
            return<li key={index}>{val} <button id={index} onClick={this.deleteItem}>x</button> </li>;

          })}
       
       
        
      </ol>
      </div>
      

    </div>
    </>
  )
}
}export default App;