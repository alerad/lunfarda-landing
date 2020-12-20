import React from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {}
    }
));


export interface TeamMember {
    image: string,
    description: string,
    name: string,
    role: string,
    bio: string,
    credentials?: string
}

interface TeamVisualizeComponentProps {
    members: TeamMember[]
}

export const TeamVisualizeComponent: React.FC<TeamVisualizeComponentProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>

        </Grid>
    )

}