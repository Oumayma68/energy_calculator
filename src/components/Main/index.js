import React, {Component} from 'react';
import App from '../../App.css';
import responsive from '../../components/responsive.css'

import {Container,Button,Alert,Modal,ModalHeader,ModaLBody,ModalFooter, ModalBody}from 'reactstrap';



class Main extends Component {
  state={
   num1:'',num2:'',num21:'',total:'',
   num3:'', num4:'',num43:'',sum2:'',
   num5:'', num6:'',num65:'',sum3:'',
   num7:'', num8:'',num87:'',sum4:'',
   num9:'', num10:'',num90:'',sum5:'',
   num11:'',num12:'',num112:'',sum6:'',
   visible:true,
   modalIsOpen:false
  }

  toggleAlert(){
  this.setState({
    visible:!this.state.visible});


  }

  toggleModal(){
    this.setState({
      modalIsOpen:!this.state.modalIsOpen});

    }

  handlenum1=(event)=>{
   this.setState({
      num1:event.target.value
  
   })

  }
  handlenum2=(event)=>{
    this.setState({
       num2:event.target.value
   
    })
 
   }
   handlenum21=(event)=>{
     this.setState({
       num21:event.target.value
     })

   }
   handlenum3=(event)=>{
    this.setState({
       num3:event.target.value
   
    })
 
   }
   handlenum4=(event)=>{
    this.setState({
       num4:event.target.value
   
    })
 
   }
  handlenum43=(event)=>{
    this.setState({
       num43:event.target.value
   
    })
 
   }
   handlenum5=(event)=>{
    this.setState({
       num5:event.target.value
   
    })
 
   }
   handlenum6=(event)=>{
    this.setState({
       num6:event.target.value
   
    })
 
   }

   handlenum65=(event)=>{
    this.setState({
       num65:event.target.value
   
    })
 
   }
   handlenum7=(event)=>{
    this.setState({
       num7:event.target.value
   
    })
 
   }
   handlenum8=(event)=>{
    this.setState({
       num8:event.target.value
   
    })
 
   }

   handlenum87=(event)=>{
    this.setState({
       num87:event.target.value
   
    })
 
   }
   handlenum9=(event)=>{
    this.setState({
       num9:event.target.value
   
    })
 
   }
   handlenum10=(event)=>{
    this.setState({
       num10:event.target.value
   
    })
  }
  handlenum90=(event)=>{
    this.setState({
       num90:event.target.value
   
    })
  }
  handlenum11=(event)=>{
    this.setState({
       num11:event.target.value
   
    })
  }
  handlenum12=(event)=>{
    this.setState({
       num12:event.target.value
   
    })
  }
  handlenum112=(event)=>{
    this.setState({
       num112:event.target.value
   
    })
  }
   exe=(event)=>{

    this.setState({
      total:(this.state.num1)*(this.state.num2)*(this.state.num21)});
      event.preventDefault();
      
   }


   op1=(event)=>{
    this.setState({
      sum2:(this.state.num3)*(this.state.num4)*(this.state.num43)});
      event.preventDefault();
   }

   op2=(event)=>{
    this.setState({
      sum3:(this.state.num5)*(this.state.num6)*(this.state.num65)});
      event.preventDefault();
   }

   op3=(event)=>{
    this.setState({
      sum4:(this.state.num7)*(this.state.num8)*(this.state.num87)});
      event.preventDefault();
   }

   op4=(event)=>{
    this.setState({
      sum5:(this.state.num9)*(this.state.num10)*(this.state.num90)});
      event.preventDefault();
   }

   op5=(event)=>{
    this.setState({
      sum6:(this.state.num11)*(this.state.num12)*(this.state.num112)});
      event.preventDefault();
   }


  render(){
   return (
     <div className="container-fluid">
    <body className="row">
  <div id="main" className="   col-12 col-sm-8 col-md-5  col-lg-4 offset-md-1 offset-lg-1">
    <ul className="Autre">
    <h2> Unité de calcul et traitement</h2>
<form onSubmit={this.exe}>
   <label >consommation de tension en Volt</label> 
 <input value ={this.state.num1}  onChange={this.handlenum1}/>
 <label >consommation de courant en Ampére </label> 
 <input  value ={this.state.num2} onChange={this.handlenum2}/>
 <label>durée d'utilisation totale en seconde</label> 
 <input value ={this.state.num21} onChange={this.handlenum21} />
 <div className="Modify">
   <button type="submit" className="btn btn-outline-primary">calcul</button>
 </div>
 </form>
 <h2 > Communication</h2>
<select>
  <option>Bluetooth</option>
  <option >wifi</option>
  <option >lora</option>
  <option>Gsm</option>
</select> 
<form onSubmit={this.op1}>
   <label >utilisation de Tension en Volt</label> 
 <input  value ={this.state.num3} onChange={this.handlenum3}/>
 <label>Utilisation de courant en Ampére</label> 
 <input value ={this.state.num4} onChange={this.handlenum4} />
 <label>durée d'utilisation totale en seconde</label> 
 <input value ={this.state.num43} onChange={this.handlenum43} />
 <div className="Modify col-5">
   <button type="submit" className="btn btn-outline-primary">calcul</button>
 </div>
 </form>
 
 <h2> pré actionneurs</h2>
<form onSubmit={this.op2}>
   <label >Utilisation de Tension en Volt</label> 
 <input  value ={this.state.num5} onChange={this.handlenum5}/>
 <label>Utilisation de courant en Ampére</label> 
 <input value ={this.state.num6} onChange={this.handlenum6} />
 <label>durée d'utilisation totale</label> 
 <input value ={this.state.num65} onChange={this.handlenum65} />
 <div className="Modify">
   <button type="submit" className="btn btn-outline-primary">calcul</button>
 </div>
 </form>
 <h2> Capteurs</h2>
 <select>
  <option>capteur tactile</option>
  <option>capteur de température</option>
  <option >capteur à effet Hall</option>
</select> 
<form onSubmit={this.op3}>
   <label >Utilisation de Tension en Volt</label> 
 <input  value ={this.state.num7} onChange={this.handlenum7}/>
 <label>Utilisation de courant en Ampére</label> 
 <input value ={this.state.num8} onChange={this.handlenum8} />
 <label>durée d'utilisation totale en seconde </label> 
 <input value ={this.state.num87} onChange={this.handlenum87} />
 <div className="Modify">
   <button type="submit" className="btn btn-outline-primary">calcul</button>
 </div>
 </form>
 <h2> Signalisation</h2>
<form onSubmit={this.op4}>
   <label >Utilisation de Tension en Volt</label> 
 <input  value ={this.state.num9} onChange={this.handlenum9}/>
 <label>Utilisation de courant en Ampére</label> 
 <input value ={this.state.num10} onChange={this.handlenum10} />
 <label>durée d'utilisation totale en seconde</label> 
 <input value ={this.state.num90} onChange={this.handlenum90} />

 <div className="Modify">
   <button type="submit" className="btn btn-outline-primary">calcul</button>
 </div>
 </form>

<h2> Alimentation</h2>
<form onSubmit={this.op5}>
   <label >Utilisation de Tension en Volt</label>  
 <input  value ={this.state.num11} onChange={this.handlenum11}/>
 <label>Utilisation de courant en Ampére</label> 
 <input value ={this.state.num12} onChange={this.handlenum12} />
 <label>durée d'utilisation totale</label> 
 <input value ={this.state.num112} onChange={this.handlenum112} />
 <div className="Modify">
   <button type="submit" className="btn btn-outline-primary">calcul</button>
 </div>
 </form>
 </ul>
 </div>


 <div id="contenu" className="  col-12 col-sm-10  col-md-7 col-lg-7">
   <div>
   <h4>l'energie consommée par de l'unité de calcul et de traitement </h4>
 <input type="text" value={this.state.total} className="RegleInput"/>
 </div>
 <div>
 <h4>l'energie consommée en communication</h4>
   <input type="text" value={this.state.sum2} className="RegleInput"/>
   </div>
   <div>

 <h4>l'energie consommée par les préactionneurs</h4>
   <input type="text" value={this.state.sum3}  className="RegleInput" />
   </div>
   <div>
   <h4>l'energie consommée par les capteurs </h4>
   <input type="text" value={this.state.sum4}  className="RegleInput"/>
   </div>
   <div>
   <h4>l'energie consommée en signalisation </h4>
   <input type="text" value={this.state.sum5}  className="RegleInput"/>
   </div>
   <div>
   <h4>l'energie consommée en alimentation </h4>
   <input type="text" value={this.state.sum6}  className="RegleInput"/>
  
   
   

  <Container>
    <div className="d-grid gap-2 col-6 mx-auto">
    <Button color="btn btn-primary"  className="MisenForme" onClick={this.toggleModal.bind(this)}>valider</Button>
    </div>
<Modal isOpen={this.state.modalIsOpen}>
  <ModalHeader>
         
  </ModalHeader>
  <ModalBody> 
  <h2>L'energie consommée par la carte en w/s est :</h2>
   {this.state.sum6-(this.state.total + this.state.sum2+ this.state.sum3+ this.state.sum4+ this.state.sum5)}
   </ModalBody>
  <ModalFooter > </ModalFooter>
  <Button color="secondary" className="Btnmodal"   onClick={this.toggleModal.bind(this)}>fermer</Button>
</Modal>
  </Container>
  </div>
 </div>
 </body>
 </div>
   )}
   }
export default Main;