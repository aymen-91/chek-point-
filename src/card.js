
import React, { Component } from 'react'
import simlogo from './res/sim.png'
import logo from './logo.svg';

export default class card extends Component {
    state={
            inputnum:"1354987624971122",
            inputname:"foullen",
            inputvalid:"1220"
    }
    handlechangenym=(e)=>
    {
        if((e.target.value.length <= 16) && !(/[A-Z]/.test(e.target.value)) && !(/[a-z]/.test(e.target.value)) ){
        this.setState({
            
            inputnum:e.target.value 
        }) 
    } else (alert ("number's length must be inferiour to 20 and not containt letter"))
    }
    handlechangename=(e)=>{
        if( (e.target.value.length<=20) && (!(/[1-9]/.test(e.target.value)) )){
        this.setState({
            inputname:e.target.value.toUpperCase()
        }) } else alert("name length must be inferor to 20 and don't contain number")
    }

    handlechangevalidthu=(e)=>{
        if ( 
            (e.target.value.length<=4) && verify(e.target.value) && !(/[A-Z]/.test(e.target.value)) && !(/[a-z]/.test(e.target.value))
        ){




        this.setState({
            inputvalid:e.target.value
        })} else alert("invalid date")
    }


    render() {
        return (
            <div>
                   <div className="card-container">
              <p><b>company name</b></p>
              <img src={simlogo}/>
              <p>{insertSpace (this.state.inputnum)}</p>

              <p>{insertSpatialCaracthere(this.state.inputvalid)}</p>

              <div className="part2"> 

               <p className="userN">{this.state.inputname}</p>

               <img src={logo} className="master-logo"/>
              </div>
            </div>
           
           <form>
               <input type="text" id="cardNum" name="cardNum" placeholder="card numero" onChange={this.handlechangenym} ></input>
               <input type="text" id="userName" name="userName" placeholder="user Name" onChange={this.handlechangename}></input>
               <input type="text" id="validThus" name="validThus" placeholder=" MM/YY"  onChange={this.handlechangevalidthu} ></input>
        <h1></h1>
           </form> 
            </div>
        )
    }
}

function insertSpace (s){
    let l = s.length
    let i = 4
    while(i<l){
    s = s.substring(0, i) + " " + s.substring(i)
    i=i+5
    }
    return s
    }

function insertSpatialCaracthere(s){
   let l = s.length
   return s = s.substring(0,2)+"/"+s.substring(2,l)
}

function verify(s)
{

return( parseInt( s.substring(0,2) ) <= 12)
}