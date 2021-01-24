import * as React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            height: '15vh',
            textAlign: 'center',
            backgroundColor: 'black',
            color: theme.palette.neutralText.secondary
        },
        subFooter: {
            backgroundColor: '#2f2c2c',
            height:'6vh',
            textAlign: 'center',
            color: theme.palette.neutralText.secondary
        }
    }
));


interface FooterProps {

}

export const Footer: React.FC<FooterProps> = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item container xs={12} className={classes.root} justify={"center"} alignItems={"center"}>
                <Grid item xs={12}>
                    <Typography variant={"body2"}>
                        We'd love to chat with you | hello@lunfardatravel.com
                    </Typography>
                    <Typography variant={"body2"}>
                        +5491165827559 / +5491148749617 | Book a complimentary advising call with our travel experts.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container xs={12} className={classes.subFooter} justify={"center"} alignItems={"center"}>
                <Grid item xs={12}>
                    <Typography variant={"body2"}>
                        © 2020 LUNFARDA TRAVEL | All rights reserved. Developed by Florencia Ravitti & Alejandro Radisic
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )

}

export default Footer