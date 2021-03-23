import React,{Component} from "react";

import {Cards,CountryPicker} from "./components";
import styles from "./App.module.css";
import {fetchdata} from "./api";
class App extends Component{
  state={
    data:{},
  };
  async componentDidMount(){
    const fetcheddata=await fetchdata();
    this.setState({data:fetcheddata});
  }
  render(){
    const {data}=this.state;
    return (
      <div className={styles.container}>
          <CountryPicker/>
          <Cards data={data}/>


      </div>

    )
  }
}

export default App;
