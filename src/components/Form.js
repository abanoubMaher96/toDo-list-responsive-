import React, {Component} from 'react';
import './Form.css';

class Form extends Component{
    state= {
        name: '',
        listItems:[
            'Shopping',
        ]
        
    };
    adding = (e) =>{
       e.preventDefault();
       if(e.target.in.value !== ""){
       this.setState({
            listItems : [...this.state.listItems, this.state.name],
            name: ""
       })
    }
    }

    typing = (e) =>{
        this.setState({
            name:e.target.value
        })
    }
    

    delete = (i) =>{
       let {listItems} = this.state
       listItems.splice(i,1);
       this.setState({listItems})
    }

    empty =() => <p>No message</p>
 
    notEmpty = () =>{
       return(
           <div className="col-12 col-sm-12 col-md-11 col-lg-10">
               {
                 this.state.listItems.map((x , i) =>{
                 return  (
                    <p key={Math.random()*10} 
                       >
                         {x}  
                    <span className="closing"   onClick={() => this.delete(i)}> X </span> 
                    </p>
            ) 
        })}
           </div>
       )
    }

render(){
    const length = this.state.listItems.length;
    
    return(
        <div className="contain">
            <form onSubmit={this.adding} >
                <div className="row justify-content-center group">
                    <input id="in" 
                        value={this.state.name} 
                        type="text" 
                        placeholder=" to Do..." 
                        className="ToDoInput col-11 col-sm-10 col-md-6 col-lg-5  "
                        onChange={this.typing}  />
                    
                    <button 
                        className="add btn btn-danger col-11 col-sm-10 col-md-auto col-lg-auto offset-lg-1 "
                        >Add to the list</button>
                </div>
            </form>
            <div className="row justify-content-center" >{ length ? this.notEmpty() :this.empty() }</div>
             
        </div>
    )
}
}

export default Form;