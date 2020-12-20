import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {TeamMemberView} from "./TeamMemberView";

const useStyles = makeStyles(theme => (
    {
        root: {
            marginTop: '4rem'
        },
        content: {
            textAlign: 'center'
        },
        ourTeam: {
            marginBottom: '2rem'
        }
    }
));


interface OurTeamProps {

}

export const OurTeam: React.FC<OurTeamProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item container xs={10} justify={"center"} className={classes.content}>
                <Grid item xs={12} className={classes.ourTeam}>
                    <Typography variant={"h1"} style={{color:'black'}}>
                        Our Team
                    </Typography>
                </Grid>
                <Grid item xs={8} className={classes.ourTeam}>
                    <Typography variant={"subtitle1"} style={{color:'black'}}>
                        We are local experts with deep knowledge of our culture and a passion
                        for connecting local maevens and businesses with savvy world trotters.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TeamMemberView/>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default OurTeam