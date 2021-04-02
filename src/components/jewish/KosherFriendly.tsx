import React, {useState} from "react"
import {Grid, Hidden, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {OutlinedCta} from "../OutlinedCta";
import {TailoredForm} from "../landing/TailoredForm";

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundColor: theme.palette.text.primary
        },
        content: {
            [theme.breakpoints.up('md')]: {
                margin: '4rem 0'
            },
            [theme.breakpoints.down("sm")] : {
                margin: '0 0 4rem 0'
            }
        },
        image: {
            background: "url('https://i.imgur.com/pQJMJJ2.jpg')",
            backgroundSize: 'cover',
            minHeight: '300px',
            [theme.breakpoints.down("sm")] : {
                marginBottom: '4rem'
            }
        },
        subTitle: {
            marginTop: '2rem'
        },
        cta: {
            color: 'black',
            borderColor: 'black',
            marginTop: '2rem'
        },
        textContainer: {
            [theme.breakpoints.up('md')]: {
                justifyContent: "flex-start"
            },
            [theme.breakpoints.down("sm")] : {
                justifyContent: "center"
            }
        }
    }
));


interface KosherFriendlyProps {

}

export const KosherFriendly: React.FC<KosherFriendlyProps> = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Grid item container xs={12} className={classes.root}>
            <TailoredForm open={open} close={handleClose} jew={true}/>

            <Grid item container xs={12} className={classes.content}>
                <Grid item container xs={12} md={4} className={classes.image}>
                </Grid>
                <Hidden smDown>
                    <Grid item md={2}/>
                </Hidden>

                <Grid item container xs={12} md={6} alignItems={"center"} className={classes.textContainer}>
                    <Grid item xs={10} md={6}>
                        <Typography variant={"h1"} style={{color:"black"}}>
                            Kosher-friendly<br/>Argentina
                        </Typography>
                    </Grid>

                    <Hidden smDown>
                        <Grid item md={6}/>
                    </Hidden>

                    <Grid item xs={10} md={6} className={classes.subTitle}>
                        <Typography variant={"subtitle1"} style={{color:"black"}}>
                            From Kosher-friendly accommodations and restaurant reservations, to guides chosen on gender preferences for modesty, we can arrange amazing itineraries at the highest levels of observance across several parts of Argentina.
                        </Typography>
                    </Grid>

                    <Grid item xs={10}>
                        <OutlinedCta variant={"outlined"} className={classes.cta} onClick={handleOpen}>
                            Tailor a trip
                        </OutlinedCta>
                    </Grid>
                </Grid>


            </Grid>
        </Grid>
    )

}

export default KosherFriendly