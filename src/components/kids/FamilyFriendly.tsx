import * as React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {OutlinedCta} from "../OutlinedCta";
import Link from "next/link";
import AboutUs from "../../../pages/AboutUs";

const useStyles = makeStyles(theme => (
    {
        root: {
            background: "url('https://i.imgur.com/EJzDT1l.png')",
            backgroundColor: "rgba(241,202,18,0.1)",
            backgroundSize: "100% 100%"
        },
        content: {
            padding: '4rem 0'
        },
        textPadding: {
            paddingBottom: '2rem'
        }
    }
));


interface FamilyFriendlyProps {

}

export const FamilyFriendly: React.FC<FamilyFriendlyProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item container xs={8} className={classes.content}>
                <Grid item container xs={12} md={5}>
                    <Grid item xs={12} className={classes.textPadding}>
                        <Typography variant={"h1"} style={{color:'black'}}>
                            Family-friendly guides.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.textPadding}>
                        <Typography variant={"subtitle1"} style={{color:'black'}}>
                            Our family travel guides are specially trained by educational specialists to adjust the contents of our tours to different group ages.
                        </Typography>
                    </Grid>
                    <Link href={"/AboutUs"} as={"about-us"} style={{textDecoration:'none'}}>
                        <OutlinedCta style={{borderColor:"black", color: "black"}}>
                            Meet our team
                        </OutlinedCta>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default FamilyFriendly