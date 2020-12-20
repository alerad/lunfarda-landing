import React from "react"
import {Grid, Hidden, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {

        },
        textContainer: {
            textAlign: 'left'
        },
        panelRoot: {
            minHeight: '23rem',
            margin: '3rem 0'
        }
    }
));


interface CityCenterProps {

}

export const CityCenter: React.FC<CityCenterProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item container xs={12}>
                <LeftImagePanel
                    image={"https://lun-us.icons8.com/api/assets/00204784-0ac0-472d-9c51-239d943e6f8f/plaza-de-mayo.png"}
                    title={"Plaza de Mayo"}
                    location={"City center"}
                >
                    This square has been the heart and center of Buenos Aires since the foundation of the city by the Spaniards in the 1580s.
                    Here you’ll find some of the most iconic buildings and landmarks of Buenos Aires, like the Cabildo -colonial city hall-, the Presidential Palace Casa Rosada or the Cathedral.
                    <br/>
                    "Explore the colonial heritage, the transformation of BA into a metropolis and the complex political history of Argentina."
                </LeftImagePanel>
            </Grid>
            <Grid item container xs={12}>
                <RightImagePanel
                    image={"https://lun-us.icons8.com/api/assets/b1883611-219f-4cde-9338-9d82bac02de3/puerto-madero.png"}
                    title={"Puerto Madero"}
                    location={"City center"}
                >

                    Sleek and slender, this highrise district is the newest neighborhood of the city, enclaved where the old Port used to be.
                    Enjoy delicious meals by the docks, take a picture by the iconic Woman’s Bridge or stroll to the largest park of BA, the Ecological Reserve.
                    <br/>
                    Discover how the city reinvents itself in the glossiest neighborhood of BA.
                </RightImagePanel>
            </Grid>
        </Grid>
    )

}

export interface LeftImagePanelProps {
    image: string,
    title: string,
    location?: string,
    children: React.ReactNode
}

export const LeftImagePanel = (props: LeftImagePanelProps) => {
    const classes = useStyles()

    const Location = () => {
        if (props.location)
            return (
                <Typography variant={"h5"} style={{color:"black"}}>
                    {props.location}
                </Typography>
            )
        else
            return <React.Fragment/>
    }

    return (
        <Grid item container xs={12} className={classes.panelRoot}>
            <Grid item container xs={12} md={6} className={classes.textContainer}  justify={"flex-end"}>
                <Grid item container md={8}>
                    <Grid item xs={12}>
                        <Location/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"h1"} style={{color:"black"}}>
                            {props.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"body1"} style={{color:"black"}}>
                            {props.children}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Hidden smDown>
                <Grid item md={1}/>
            </Hidden>
            <Grid item xs={12} md={5} style={{background:"url('"+props.image+"')", backgroundSize: '100% 100%'}}>

            </Grid>
        </Grid>
    )
}

export const RightImagePanel = (props: LeftImagePanelProps) => {
    const classes = useStyles()

    return (
        <Grid item container xs={12} className={classes.panelRoot}>
            <Grid item xs={12} md={5} style={{background:"url('"+props.image+"')", backgroundSize: '100% 100%'}}>

            </Grid>

            <Hidden smDown>
                <Grid item md={1}/>
            </Hidden>
            
            <Grid item container xs={12} md={6} className={classes.textContainer}  justify={"flex-start"}>
                <Grid item container md={8}>
                    <Grid item xs={12}>
                        <Typography variant={"h5"} style={{color:"black"}}>
                            {props.location}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"h1"} style={{color:"black"}}>
                            {props.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"body1"} style={{color:"black"}} >
                            {props.children}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    )
}