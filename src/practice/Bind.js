import React, { Component, PureComponent} from 'react';  

// const ColorChange =React.forwardRef((props,inputRef)=>{
class ColorChange extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  handleColor(){
    this.props.handleNewColor()
  }
  render(){
    const divStyle={
      color:"white",
      backgroundColor:"blue"
    }
    return(
      <div>
        <button style={divStyle} type="button" onClick={this.handleColor.bind(this)}>change color</button>
        <input type="text"/>
      </div>
    )
  }
} 
// return <ColorChange />
// })
  
class Bind extends PureComponent {  
  getInitialstate(){
    console.log(this.state,"state1",this.props);
  }
  constructor(props){
      super(props)
      this.state={
          name:"Ramesh",
          count:1,
          secname:'',
          color:"red"
      }
      this.inputRef = React.createRef()  
      this.secinputRef = React.createRef()  
  } 
  

  handleChange(e){
    e.preventDefault()
    console.log(e,"tttt");
    this.setState({name:this.inputRef.current.value})
    this.setState({secname:this.inputRef.current.value})
  }
 
  componentWillMount(){
    console.log(this.state,"state2");
  }
  componentDidMount(){
    // this.setState({name:this.inputRef.current.value})
    // this.setState({name:this.secinputRef.current.value})
    console.log(this.state,"state3");
  }
  componentWillReceiveProps(){
    console.log(this.state,"state4",this.props);
  }
  shouldComponentUpdate(){
    return true
  }
  componentWillUpdate(){
    
    console.log(this.state,"state6");
  }
  componentDidUpdate(){
    console.log(this.state,"state7");
  }
  componentUnMount(){
    console.log(this.state,"state8");
  }
  displayColor = ()=>{
    this.setState(prevState=>({
      ...prevState,
      color:this.state.color ==="red" ? "green":"red"
    }))
  }

  render() {  

    console.log("hello",this.state.count,this.state.name,this.inputRef.current);

    return (  
      <div className="App" style={{backgroundColor:this.state.color}}>  
    <h2>React Constructor Example</h2> 
     <input type="text" 
    //  value={this.state.name} onChange={this.handleChange.bind(this)}
      />
     {/* {this.state.count} */}
     <input type="text" ref={this.inputRef} />
     <input type="text" ref={this.inputRef} />
    <button onClick={this.handleChange.bind(this)}>click</button> 
     {this.state.name}
     {this.state.secname}

     <ColorChange handleNewColor={this.displayColor} ref={this.inputRef} />

    </div>  
    );  
  }  
}  
export default Bind;  