import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        padding: '20px 50px',
        fontSize: '2rem',
        fontWeight: "bold"
    }
}));

const ControlButtons = () => {
    const classes = useStyles();
    return (
        <div>
            <Button 
                variant="outlined" 
                size="large" 
                color="primary" 
                className={classes.button}
                >
                START
            </Button>
            <Button 
                variant="outlined" 
                size="large" 
                color="primary" 
                className={classes.button}
                >
                SAVE
            </Button>
        </div>
    )
}

export default ControlButtons;