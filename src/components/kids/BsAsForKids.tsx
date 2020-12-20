import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            margin: '6rem 0'
        },
        content: {
            textAlign: 'center'
        },
        textPadding: {
            padding: '1rem 0'
        },
        image: {
            backgroundSize: 'cover',
            width:'70%',
            maxHeight:'300px'
        }
    }
));


interface BsAsForKidsProps {

}

export const BsAsForKids: React.FC<BsAsForKidsProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item container xs={8} className={classes.content} justify={"center"}>
                <Grid item xs={12}>
                    <img src={"https://i.imgur.com/DLhw7FV.jpg"} className={classes.image} alt={"Buenos Aires For Kids"}/>
                </Grid>
                <Grid item xs={12} className={classes.textPadding}>
                    <Typography variant={"h1"} style={{color:"#2e2e2e"}}>
                        Buenos Aires for Kids
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.textPadding}>
                    <Typography variant={"subtitle1"} style={{color:"#2e2e2e"}}>
                        We wrote a book for curious kids who love to travel and learn new things!<br/>
                        “Buenos Aires for Kids” includes activities, challenges and fun facts about Buenos Aires and Argentina (and stickers too!).
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BsAsForKids