import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundImage: "url('/landing/landofstories.png')",
            height: '40vh'
        }
    }
));


interface LandOfStoriesProps {

}

export const LandOfStories: React.FC<LandOfStoriesProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} alignItems={"center"}>
            <Grid item xs={2}/>
            <Grid item xs={8}>
                <Typography variant={"h1"} color={"secondary"}>
                    Argentina,<br/>
                    land of stories
                </Typography>
            </Grid>
        </Grid>
    )

}

export default LandOfStories