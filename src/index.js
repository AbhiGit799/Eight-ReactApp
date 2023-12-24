import { Component } from "react";
import ReactDOM from "react-dom/client";
import {AppIndex,BppIndex,CppIndex,DppIndex,EppIndex,FppIndex} from "./app";

//event should be in camel case.

function showMsg()
{
  console.log("showMsg() called!!!");
}

// const element = (<button type="button" onClick={showMsg}>Show Msg</button>);
// const aroot = ReactDOM.createRoot(document.getElementById("root"));
// aroot.render(element);



// function AIndex()
// {
//   return(
//     //showMsg() automatically execute the function without click
//     // <button type="button" onClick={showMsg()}>Show Message</button>

//     <button type="button" onClick={showMsg}>Show Message</button>

//   )
// }

// const broot = ReactDOM.createRoot(document.getElementById("root"));
// broot.render(<AIndex/>);



//Note:- In class based component function should be inside class
// class BIndex extends Component
// {
//   displayMessage()
//   {
//     console.log("Display Message!!");
//   }

//   render()
//   {
//     return(<>
    
//     <button type="button" onClick={this.displayMessage} >Show Message</button>
    
//     </>)
//   }

// }

// const croot = ReactDOM.createRoot(document.getElementById("root"));
// croot.render(<BIndex/>);


class BIndex extends Component
{
  render()
  {
    return(<>
    
    {/* <AppIndex/>  */}

    {/* <BppIndex/> */}

    {/* <CppIndex/> */}

    {/* <DppIndex /> */}

    {/* <EppIndex name="Raman"/> */}
    
    <FppIndex/>

    </>)
  }

}

const croot = ReactDOM.createRoot(document.getElementById("root"));
croot.render(<BIndex/>);

















