import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundImage: "url('https://lun-us.icons8.com/api/assets/c9b03050-75a2-46a3-a48c-34d35c3d563c/0 Argentina Land of Stories.png')",
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