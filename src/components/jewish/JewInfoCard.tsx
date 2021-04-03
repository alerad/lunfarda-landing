import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {

        },
        text: {
            marginTop: '2rem'
        },
        imgContainer: {
        }
    }
));


interface JewInfoCardProps {
    image: string,
    text: string,
    bold?: boolean
}

export const JewInfoCard: React.FC<JewInfoCardProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item xs={12} className={classes.imgContainer}>
                <img style={{minHeight: '100%', width:'100%', objectFit:'cover', maxHeight: "300px", minHeight: "300px"}} src={props.image} alt={props.text}/>
            </Grid>
            <Grid item xs={12} className={classes.text}>
                <Typography variant={"subtitle1"} color={"secondary"}>
                    {props.text}
                </Typography>
            </Grid>
        </Grid>
    )

}