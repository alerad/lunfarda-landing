import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundColor: '#2e2e2e',
            padding: '4rem 0'
        },
        subTitle: {
            marginTop: '2rem'
        }
    }
));


interface SatisfactionGuaranteeProps {

}

export const SatisfactionGuarantee: React.FC<SatisfactionGuaranteeProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item container xs={10}>
                <Grid item xs={12}>
                    <Typography variant={"h1"} color={"secondary"}>
                        Satisfaction Guarantee Policy
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.subTitle}>
                    <Typography variant={"subtitle1"} color={"secondary"}>
                        All our tours are a guaranteed success! If you feel like your guide or any<br/> members of our staff haven’t lived up to your expectations we will refund 100% of your tour or experience.*
                        <br/>*Does not apply in case of force majeure or external circumstances.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default SatisfactionGuarantee