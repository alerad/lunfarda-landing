import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            background: "url('https://lun-us.icons8.com/api/assets/06372f48-7a03-45d3-8bbc-78efbdf44af8/header picture.png')",
            backgroundSize: "cover",
            position: 'relative'
        },
        content: {
            padding: '4rem 0',
            zIndex: 1
        },
        blackMask: {
            zIndex: 0,
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: 'rgb(0,0,0,0.5)'
        }
    }
));


interface FunToursProps {

}

export const FunTours: React.FC<FunToursProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item container xs={8} className={classes.content}>
                <Grid item xs={12}>
                    <Typography variant={"h1"} color={"secondary"}>
                        Fun tours for<br/>
                        awesome families.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={"subtitle1"} color={"secondary"}>
                        We love to share our love of traveling with little globetrotters!
                    </Typography>
                </Grid>
            </Grid>
            <div className={classes.blackMask}/>
        </Grid>
    )

}

export default FunTours