import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        padding: '20px 50px',
        fontSize: '2rem',
        fontWeight: "bold"
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px'
    }
}));

const ControlButtons = () => {
    const classes = useStyles();
    return (
        <Box className={classes.buttonsContainer}>
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
        </Box>
    )
}

export default ControlButtons;