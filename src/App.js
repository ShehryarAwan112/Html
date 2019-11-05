import React ,{Component} from 'react'
import   './mystylesheet.css'

import { Script } from 'vm'
//<script defer src="script.js"></script>
export default class App extends Component{
  constructor(){

    super()
    this.state={
      shariq : 'blue',
      bilal: "bilal"
    }
  }
  onChange = e => {
    this.setState({errors:{email:"",password:""}})
    this.setState({ [e.target.name]: e.target.value });
    
//changeValue(){
  //this.setState({blue:'bilal'},()=>{
    //alert('Bilal value hass bee changeds')
    //alert(`${this.state.bilal}`)
  //})
}
// handlechange(event)
// {
//   if(user=="  ")
//   console.log('please fill the username field first')
//   this.setState({email:event.target.value})
// }
  
  render(){
   console.log(this.state)
    return(
      <div className="form">
        <form className="style">
<p className="cge"> Bilal IRfan</p>
<h2 className="che">Create an account</h2>
<h3>it's quick and easy</h3>
        <input className="text"placeholder="First Name"required/>
       
       <spain id="username"class="text-danger"></spain>
      
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <input className ="text1"placeholder="Last Name:"onChange={(val)=>{this.setState({pasworad: val.target.value})}}/><br/><br/><br/><br/>
                <input className ="email"placeholder="Email"onChange={(val)=>{this.setState({pasworad: val.target.value})}}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <input className = "password"placeholder ="Password" onChange={(val)=>{this.setState({pasworad: val.target.value})}}/><br /><br/><br/><br/>
     <input className = "password1"placeholder = "Re-Enter Password" onChange={(val)=>{console.log(val.target.value,'dada')}}/><br/><br/>
                   <select name = "month" className="four"> 
                     <option value ="month">month</option>
                    <option value ="january">january</option>
                 <option value ="faboury">faboury</option>
</select>
<select name ="days"className="day">
<option value ="days">days</option>
<option value ="monday">monday</option>
<option value ="tuesday">tyesday</option>
</select><br/><br/>
{/* <input type ="radio"value="Female">female</input> */}
{/* <input type ="radio"value="Male" > */}
{/* <input type ="radio"value="Others">Others</input> */}
<p>By clicking on signup button its mean you are agreed with<br/>
                 our terms and conditions and you get conformation code<br/>
                        on your phone.</p><br/><br/>
         <input className = "button"value= "SignUP"align="center" onClick={()=>{this.changeValue()}}/>
</form>
      </div>
  
    )
  }
}

// {/* <style>
// body{
// background-image:url(day.jpg);
// background-repeat:no-repeat;
// background-size:cover;
// }
// #form{
// padding-left:30px;
// padding-top:50px;
// width:550px;
// height:600px;
// background-color:skyblue;
// margin-left:400px;
// margin-top:100px;
// -webkit-border-radius:15px;

// }
// #form input[type ="text"]{
// width:250px;
// height:35px;
// padding-left:50px;
// -webkit-border-radius:10px;
// }
// #form input[type ="email"]{
// width:250px;
// height:35px;
// -webkit-border-radius:10px;
// }
// #form input[type ="password"]{
// width:250px;
// height:35px;
// -webkit-border-radius:10px;
// }
// #form select{
// width:80px;
// height:30px;
// -webkit-border-radius:;
// }

// #form p{
// color:white;
// }
// #form input[type ="button"]
// {
// background-color:green;
// width:120px;
// height:40px;
// -webkit-border-radius:10px;
// hover-color:red;
// }
// #form h2{
// color:white;

// }
// #form h3{
// color: white;
// }
// #form input[type ="button"]:hover{
// background-color:red;
// transition: 0.6s ease;
// }

// </style> */}