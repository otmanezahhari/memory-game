import React, {Component} from "react";
import '../css/App.css';
import GameInterface from "./gameInterface.js";

class App extends Component{
  constructor(){
    super()
    this.state={
      myGameLists :[],
      duration : 1200,
    }
  }
  
  //Function Flipped front-Back
  isFlipped = (block) => {
    let triesElement = document.querySelector('.tries span');
    //Add Class to flip the Cart
    block.parentNode.classList.add('is-flipped');

    //Select All Flipped Cart
    let AllFlipCart = document.querySelectorAll('.is-flipped');
    //Check if two cart are selected and Stop Click
    if(AllFlipCart.length ===2){     
      //Stop Clicking
      this.stopClicking()
      //Methode To check Match Block
     this.checkMatchedBlock(AllFlipCart[0],AllFlipCart[1]);
    }else if (this.state.myGameLists.length==AllFlipCart.length){
      document.querySelector(".control-buttons.msg").innerHTML = "You Are The Best Try Again";
      document.querySelector(".control-buttons.msg").style.display = "block";
      triesElement.innerHTML = 0;
    }

  }
  checkMatchedBlock = (firstBlock,secondBlock)=>{
    //Get Tries Element for counting
    let triesElement = document.querySelector('.tries span');
    if(firstBlock.dataset.technology==secondBlock.dataset.technology){
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');
      //Show To Match block
      firstBlock.classList.add('has-match');
      secondBlock.classList.add('has-match');
    }
  }

 stopClicking = ()=>{
   //Get Block Container
  document.querySelector('.memory-game-blocks').classList.add('no-clicking');
  //TimeOut to remove Stop
  setTimeout(()=>{
    document.querySelector('.memory-game-blocks').classList.remove('no-clicking');
  },this.state.duration)
 }
 //UserName

 UserName = ()=>{
   //Remove Space
  let UserName = prompt("What's Your UserName ? ").trim();
  //Check UserName if Null Make USerName = Unknown
  (UserName==null||UserName=='')? document.querySelector(".name span").innerHTML ='Unknown': document.querySelector(".name span").innerHTML =UserName;
  //Remove control Button to Start Game
  document.querySelector(".control-buttons").remove();
 }
  

componentDidMount(){
  fetch("./data.json")
  .then(response => response.json())
  .then(result => {
    result.push(...result);
    let shaffleArray =  result.sort(()=> Math.random() - 0.5);
    this.setState({
      myGameLists :shaffleArray,
    })
  })
}

  render(){
    return (
      <div>
        <GameInterface myGameLists={this.state.myGameLists} isFlipped={this.isFlipped} UserName={this.UserName}/>
      </div>
    );
  }
  
}

export default App;
