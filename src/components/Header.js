import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    typography: {
        margin: theme.spacing(1),
        marginBottom: theme.spacing(4),
        textAlign: 'center'
    }
}));

export const Header = props => {
    const classes = useStyles();

    return (
        <Typography variant="h5" gutterBottom className={classes.typography}>
            {props.text}
        </Typography>
    );
};
