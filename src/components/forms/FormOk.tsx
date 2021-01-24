import * as React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundColor: 'black'
        },
        container: {
            textAlign: 'left',
            margin: '3rem 0'
        }
    }
));


interface FormOkProps {

}

export const FormOk: React.FC<FormOkProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item container xs={10} className={classes.container}>
                <Grid item xs={12}>
                    <img src={"https://i.imgur.com/Dm5ciyh.png"} alt={"Lunfarda Logo"}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"h1"}>
                        Congratulations!
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"h2"} color={"textSecondary"}>
                        Your trip planning has officially started!<br/>
                        We'll get back to you ASAP
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )

}