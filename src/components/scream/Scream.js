import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';

// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        position: 'relative',
        display: 'flex',
        marginBottom: 20
      },
      image: {
        minWidth: 200
      },
      
      content: {
        padding: 25,
        objectFit: 'cover'
      }
};  

class Doctors extends Component {
    state = {  }
    render() { 

        const{classes,
            doc: {
              doctorID,
              name,
              phone,
              symptoms,
              userId
            }
        }=this.props;

        return ( 
            <Card className={classes.card}>
                <CardMedia
                    className={classes.image}
                    image="scream/nouser.jpg"
                    title="Profile image"
                    />
                <CardContent className={classes.content}>
                <Typography
                    variant="h5"
                    component={Link}
                    to={`/users/${userId}`}
                    color="primary"
                >
                    {name}
                </Typography>
                
                <Typography variant="body2" color="textSecondary">
                    {symptoms}
                </Typography>
                
                <Typography variant="body1">{phone}</Typography>
          
                </CardContent>
            </Card>
         );
    }
}
 
export default withStyles(styles)(Doctors);