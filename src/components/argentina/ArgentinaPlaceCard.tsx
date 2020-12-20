import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {

        },
        cardImage: {

        },
        cardText: {
            backgroundColor: 'white',
            marginTop: '-10px',
            textAlign: "center"

        },
        title: {
            paddingTop: '1rem',
            color: theme.palette.text.secondary,
        },
        blueLine: {
            borderBottom: '2px solid '+theme.palette.text.secondary,
            width: '80%',
            marginTop: '0.4rem',
            marginBottom: '0.4rem'
        }
    }
));


interface ArgentinaPlaceCardProps {
    image: string,
    title: string,
    description: string,
    features: string[]
}

export const ArgentinaPlaceCard: React.FC<ArgentinaPlaceCardProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"}>
            <Grid item xs={12}>
                <img style={{height: '100%', width:'100%', objectFit:'contain'}} src={props.image} alt={props.title}/>
            </Grid>
            <Grid item container xs={12} className={classes.cardText} justify={"center"}>
                <Grid item xs={12} >
                    <Typography variant={"h2"} className={classes.title}>
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item xs={10} className={classes.blueLine}>

                </Grid>
                <Grid item xs={12} className={classes.title}>
                    <Typography variant={"body1"} style={{color:'black'}}>
                        {props.description}
                    </Typography>
                    <br/>
                </Grid>
                <Grid item xs={12} style={{marginBottom: '2rem'}}>
                    <Typography variant={"body1"} style={{color:"black"}}>
                        {props.features.map((f,i) => {
                            return (
                                <React.Fragment key={i}>
                                    {"- " + f}<br/>
                                </React.Fragment>
                            )
                        })}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )

}
