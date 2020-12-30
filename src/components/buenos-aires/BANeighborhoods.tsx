import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundColor: theme.palette.text.secondary
        },
        content: {
            margin: '6rem 0',
            textAlign:'center'
        },
        marginTop: {
            marginTop: '2rem'
        },
        blackMask: {
            zIndex: 0,
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: 'rgb(0,0,0,0.5)'
        },
        placeCardContainer: {
            backgroundSize: "100% 100%!important",
            backgroundRepeat: 'no-repeat',
            minHeight: '250px',
            position:'relative',
            cursor: 'pointer'
        }
    }
));


interface BANeighborhoodsProps {

}

export const BANeighborhoods: React.FC<BANeighborhoodsProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item container xs={10} md={8} justify={"center"} className={classes.content}>
                <Grid item xs={10}>
                    <Typography variant={"h2"} color={"secondary"} style={{fontWeight:500}}>
                        Do you know BA Neighborhoods
                    </Typography>
                </Grid>

                <Grid item xs={10} md={6} className={classes.marginTop}>
                    <Typography variant={"subtitle1"} color={"secondary"}>
                        Take a loot at the different neighborhoods, its
                        interesting attractions and beautiful landscapes
                    </Typography>
                </Grid>

                <Grid item container xs={12} spacing={3} className={classes.marginTop}>
                    {places.map(place => {
                        return (
                                <Link href={"Neighborhoods"} as={"neighborhoods"} asstyle={{cursor:"pointer", textDecoration:"none"}}>
                            <Grid item xs={12} md={4}>
                                    <PlaceCard name={place.name} image={place.image}/>
                            </Grid>
                                </Link>
                        )
                    })}
                </Grid>

            </Grid>
        </Grid>
    )

}

interface PlaceCardProps {
    name: string,
    image: string
}

const PlaceCard = (place: PlaceCardProps) => {

    const classes = useStyles()

    return (
        <Grid item container xs={12} className={classes.placeCardContainer} style={{background: "url('"+place.image+"')"}} justify={"center"} alignItems={"center"}>
            <Grid item xs={12} style={{zIndex:2}}>
                <Typography variant={"h2"} color={"secondary"} style={{textAlign:"center", zIndex:2, fontWeight:700}}>
                    {place.name}
                </Typography>
            </Grid>
            <div className={classes.blackMask}/>
        </Grid>
    )
}


const places : PlaceCardProps[] = [
    {
        name: "North",
        image: "https://lun-us.icons8.com/api/assets/90e7eb44-23bb-4762-85f5-1973c5e92914/retiro.png"
    },
    {
        name: "South",
        image: "https://lun-us.icons8.com/api/assets/e2c94eb4-ef17-4435-bd69-cde5164c60c3/San Telmo.png"
    },
    {
        name: "City Center",
        image: "https://lun-us.icons8.com/api/assets/0bd71102-e8b1-4e92-ae09-d68039861091/plaza-de-mayo.png"
    }
]

export default BANeighborhoods