import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {JewInfoCard} from "./JewInfoCard";

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundColor: theme.palette.text.secondary
        },
        content: {
            marginTop: '4rem'
        },
        cardContainer: {
            marginBottom: '3rem'
        },
        subTitle: {
            margin: '2rem 0'
        }
    }
));


interface BsAsJewishHeritageProps {

}

export const BsAsJewishHeritage: React.FC<BsAsJewishHeritageProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item container xs={10} className={classes.content}>
                <Grid item xs={12}>
                    <Typography variant={"h1"} color={"secondary"}>
                        Buenos Aires Jewish Heritage
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.subTitle}>
                    <Typography variant={"subtitle1"} color={"secondary"}>
                        Walk through iconic neighborhoods and visit BA's main synagogues and institutions. Discover the complex identity and history of the Argentine Jews.
                    </Typography>
                </Grid>
                <Grid item container xs={12} spacing={6} className={classes.cardContainer}>
                    {cards.map(c => {
                        return (
                            <Grid item xs={12} md={4}>
                                <JewInfoCard image={c.image} text={c.text} bold={c.bold}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BsAsJewishHeritage

const cards = [
    {
        image: "https://i.imgur.com/eWZNaNx.jpg",
        text: "Learn about the Jewish immigration, the 1919 pogrom, the capture of Eichman, the 90s terror attacks and beyond.",
        bold: false
    },
    {
        image: "https://i.imgur.com/xsAerYg.png",
        text: "Visit the Libertad and Paso Synagogues, AMIA, the Jewish Museum and the Once neighborhood.",
        bold: false
    },
    {
        image: "https://i.imgur.com/Qsftntk.jpg",
        text: "All our tours are led by members of the local Jewish community, with security clearance to take you inside AMIA and the most important synagogues and museums.",
        bold: true
    }
]