import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';
import { Link } from 'react-router-dom';

// MUI Stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  form: {
    textAlign:'center'
    },
    textField:{
      margin: '10px auto 10px auto'
    },
    customError:{
      color: 'red'
    },
    button:{
      marginTop:20,
      position: 'relative'
    },
    progress:{
      position: 'absolute'
    }

};  

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {}
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('hi');
    console.log(this.state.email);
    this.setState({
      loading:true
    });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    
    this.props.history.push('/');

    /*Axios.post('/login',userData)
    .then(res=>{
      console.log(res.data);
      this.setState({
        loading:false
      });
      this.props.history.push('/');
    })
    .catch(err=>{
      this.setState({
        errors:err.response.data,
        loading:false
      })
    })*/

  };


  handleChange = (event) => {
    //name="email for firstcase"
    //name="password"for second case
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  
  render() { 
    const {
      classes
    } = this.props;
    const { errors,loading } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppIcon} alt="monkey" className={classes.image} />
          <Typography variant="h2" className={classes.pageTitle}>
            Login
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
          <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Login
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <small>
              dont have an account ? sign up <Link to="/signup">here</Link>
            </small>
          
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
      
    );
  }
}
 
login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

export default withStyles(styles)(login);