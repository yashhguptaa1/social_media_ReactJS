import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Scream from '../components/scream/Scream';

class home extends Component {
  state = {
    docs: null
    }

    componentDidMount(){
      axios.get('http://localhost:8080/doctor/get/all')
      .then(res=>{
        console.log(res.data);
        this.setState({
          docs: res.data
        })
      })
      .catch(err=>console.log(err));
    }

  render() { 
    let recentScreamsMarkup=this.state.docs?(
    this.state.docs.map((doc)=><Scream doc={doc}/>)
    ):(<p>Loading...</p>);
    return (
      <Grid container spacing={10}>
      <Grid item sm={6} xs={10}>
        {recentScreamsMarkup}
      </Grid>
      <Grid item sm={2} xs={10}>
        Profile
      </Grid>
    </Grid>  
    );
  }
}
 
export default home;