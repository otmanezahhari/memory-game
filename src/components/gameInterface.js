import React from "react";



function Infocontainer(){
  return(
    <div className={"info-container"}>
      <div className={"name"}>
        hello <span></span>
      </div>
      <div className="tries">
        Wrong tries: <span>0</span>
      </div>
    </div>
  )
}

//Game block 

function GameBlock(props){
   
  return(
    <div className={"memory-game-blocks"}>
      {props.myGameLists.map((game,index)=>(
          <div key={index} className={"game-block"} data-technology={game.name} onClick={(ev)=>props.isFlipped(ev.target)} >
            <div className="face front">
            </div>
            <div className="face back">
              <img src={game.image} alt={game.name}/>
            </div>
          </div>       
      ))}
    </div>       
  );
}

function ControlButton(props){
  return(
    <div className="control-buttons" onClick ={()=>props.UserName()}>
      <span>Start Game</span>
    </div>
  )
}

function MessageToshow(props){
  return(
    <div className="control-buttons msg" style={{display:'none'}} onClick ={()=>props.UserName()}>
      <span>better luck next time</span>
    </div>
  )
}



function GameInterface(props){
  return(
    <>
        <ControlButton UserName={props.UserName}/>
        <MessageToshow UserName={props.UserName} />
        <Infocontainer/>
        <GameBlock myGameLists={props.myGameLists} isFlipped={props.isFlipped} />   
    </>
  )

}

export default GameInterface;