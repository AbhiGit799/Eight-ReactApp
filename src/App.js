import PT from "prop-types";
import { Component } from "react";

export class AppIndex extends Component
{
  displayMessage()
  {
    console.log("Display Message!!");
  }

  render()
  {
    return(<>
    
    <button type="button" onClick={this.displayMessage} >Show Message</button>
    
    </>)
  }

}

// export class BppIndex extends Component
// {
//   displayMessage()
//   {
//     console.log("bpp Display Message!!");
//   }

//   render()
//   {
//     return(<>
//          <a href="#" onClick={this.displayMessage}>Click</a>
//     </>)
//   }

// }



// export class CppIndex extends Component
// {
//   displayMessage(e)
//   {
//     e.preventDefault();
//     console.log("Cpp Display Message!!");
//   }

//   render()
//   {
//     return(<>
//          <a href="" onClick={this.displayMessage}>Click</a>
//     </>)
//   }

// }


// export class DppIndex extends Component
// {
//   displayMessage(e)
//   {
//     e.preventDefault();
//     console.log("Dpp Display Message!!");
//   }

//   render()
//   {
//     return(<>
//          <form onSubmit={this.displayMessage}>
//            <button type='submit'>Submit</button>
//          </form>
//     </>)
//   }

// }


// In Arrow function this is bind 

// export class EppIndex extends Component
// {

//   // constructor()
//   // {
//   //   super();
//   //   this.show = this.show.bind(this);
//   // }

// //   show()
// //   {
// //     console.log("Epp show() called.");
// // //    console.log(this); //here this is undefined
// // //    console.log(this.props.name);

// //   }

//   //Arrow function alerternative is constructor way.
//   // show = () =>{
//   //        console.log("Epp show() called.");
//   //       console.log(this); //here this is undefined
//   //       console.log(this.props.name);
//   // }

//   // show()
//   // {
//   //       console.log("Epp show() called.");
//   //       console.log(this); //here this is undefined
//   //       console.log(this.props.name);
//   // }


//   //Arrow function is recommended.
//     show = () =>{
//          console.log("Epp show() called.");
//         console.log(this); //here this is undefined
//         console.log(this.props.name);
//   }

//   render()
//   {
//     return(<>
//         <button type="button" onClick={this.show}>Show Message</button>
//     </>)
//   }

// }




// onClick
// export class EppIndex extends Component
// {
//   render()
//   {
//     return(<>
//         <button type="button" onClick={()=>{ console.log("Show Message.");}}>Show Message</button>
//     </>)
//   }

// }


// export class EppIndex extends Component
// {
//   show(msg)
//   {
//     console.log(msg);
//   }

//   render()
//   {
//     return(<>
//         <button type="button" onClick={()=>this.show("Hi Vinod")}>Show Message</button>
//     </>)
//   }

// }



// export class EppIndex extends Component
// {
//   // add(a,b,e)
//   // {
    
//   //   console.log(`Sum = ${a+b}`);
//   //   console.log(e); //SyntheticBaseEvent

//   // }

//   sum(e)
//   {
//     console.log(e);
//   }

//   render()
//   {
//     return(<>

//         {/* 
        
//         {/* below code with bind will take more time */}

//         {/* <button type="button" onClick={this.add.bind(this,20,30)}>Show Message</button> */}

//         {/* In below code we can write e in any position */}

//         {/* <button type="button" onClick={(e)=>this.add(10,12,e)}>Show Message</button>  */}
         
//        <button type="button" onClick={this.sum}>Show Message</button>  

//     </>)
//   }

// }




export class FppIndex extends Component
{

  constructor()
  {
    super();
    this.state={
      name:""
    }
  }

  showName=(e)=>{
    //console.log(e.target.value);

    this.setState({
      name:e.target.value
    })
  
  }

  submitHandler=()=>{
    alert(this.state.name);
  }

  render()
  {
    return(<>
     <h2>Enter Name</h2>
     <br />
     <input type="text" name="txtName" onChange={this.showName}/>
      <br/>

      <h4>Entered Name </h4>
      {this.state.name}
      <br/><br/>

      <button type="button" onClick={this.submitHandler}>Submit</button>

    </>)
  }

}







