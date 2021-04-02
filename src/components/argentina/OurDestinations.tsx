import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ArgentinaPlaceCard} from "./ArgentinaPlaceCard";

const useStyles = makeStyles(theme => (
    {
        root: {
            [theme.breakpoints.up('md')]: {
                marginTop: '2rem',
            },
            backgroundColor: theme.palette.text.secondary,
            paddingBottom: '3rem'
        },
        content: {
            marginTop: '4rem',
        }
    }
));


interface OurDestinationsProps {

}

export const OurDestinations: React.FC<OurDestinationsProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"} alignItems={"center"}>
            <Grid item container xs={12}  justify={"center"} alignItems={"center"} className={classes.content}>
                <Grid item xs={2}/>
                <Grid item container xs={8}>
                    <Grid item xs={8}>
                        <Typography variant={"h1"} color={"secondary"}>
                            Our destinations<br/><br/>
                        </Typography>
                        <Typography variant={"subtitle1"} color={"secondary"}>
                            Walk through iconic neighborhoods and visit BA’s synagogues and institutions and discover the complex identity and history of the Argentine Jews.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={2}/>
                <Grid item container xs={12} justify={"center"}>
                    <Grid item container xs={10}>
                        {cards.map((x,i) => {
                            return (
                                <Grid item md={4} style={{padding:'2rem'}} key={i}>
                                    <ArgentinaPlaceCard description={x.description} title={x.title} image={x.image} features={x.features}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default OurDestinations

const cards = [
    {
        image: "https://i.imgur.com/JgFlUPJ.jpg",
        title: "Córdoba",
        description: "Colonial heritage and laid back natural landscapes.",
        features: [
            "Great for families",
            "Kosher Destination",
            "Off-the-beaten path"
        ]
    },
    {
        image: "https://i.imgur.com/rEpK0k4.jpg",
        title: "Iguazú",
        description: "Massive waterfalls and jungle adventures",
        features: [
            "Great for families.",
            "Kosher Destination",
            "Honeymoon or proposal destination"
        ]
    },
    {
        image: "https://i.imgur.com/TfA78lU.jpg",
        title: "Iberá Wetlands",
        description: "Argentine Safari, capybaras included.",
        features: [
            "Bird watcher paradise",
            "Off-the-beaten path"
        ]
    },
    {
        image: "https://i.imgur.com/sOBdi6W.jpg",
        title: "Mendoza",
        description: "Wine, romance and adventure.",
        features: [
            "Great for families",
            "Kosher Destination",
            "Honeymoon or proposal destination"
        ]
    },
    {
        image: "https://i.imgur.com/vEHI2wo.jpg",
        title: "Northwest",
        description: "Alien landscapes and ancient cultures",
        features: [
            "For adventurers of all ages",
            "Kosher itinerary possible through some parts",
            "Roadtrip bucket list"
        ]
    },
    {
        image: "https://i.imgur.com/PxQPfQ7.jpg",
        title: "Patagonia",
        description: "Whales, glaciers and hiking in unique landscapes",
        features: [
            "Great for families",
            "Amazing for adventurers and nature lovers",
            "Kosher itinerary possible through some parts"
        ]
    }
]