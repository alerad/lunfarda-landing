import * as React from "react"
import {useEffect, useState} from "react"
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
// @ts-ignore
import Trip from '../../assets/icon-tripadvisor.svg'
import {AddTripScript, GetReviews} from "../../services/TripAdvisorService";
import {TripCard} from "./tripadvisor/TripCard";

const useStyles = makeStyles(theme => (
    {
        grid: {
            marginTop: '1.5rem',
            textAlign:'center'
        },
        iconTrip: {
            objectFit: 'contain',
            height: '2rem',
            width: '3rem'
        },
        title: {
            textAlign: 'center',
            color: theme.palette.neutralText.dark
        },
        subTitle: {
            color: theme.palette.neutralText.dark,
            marginTop: "1.3rem"
        },
        tripCards: {
            marginTop: '2rem'
        }
    }
));


interface TripAdvisorProps {
}

export const TripAdvisor : React.FC<TripAdvisorProps> = (props) => {
    const classes = useStyles();

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        GetReviews()
            .then(x => x.json())
            .then(x => setReviews(x.reviewData))
    }, [])

    return (
        <React.Fragment>
            <Grid item container xs={12} justify={"center"} >
                <Grid
                    item
                    container xs={10}
                    className={classes.grid}
                    justify="center"
                >
                    <Grid item xs={12}>
                        <Icon className={classes.iconTrip}>
                            <img src={Trip} alt={"Tripadvisor"}/>
                        </Icon>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"h2"} className={classes.title}>
                            We connect local talents with discerning travelers.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={"h5"} className={classes.subTitle}>
                            Here's what they say on Tripadvisor:
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} justify={"space-around"} className={classes.tripCards}>
                        {reviews.filter(x => x.rating === 5).slice(0, 3).map(x => {
                            return (
                                <Grid item xs={10} md={3}>
                                    <TripCard
                                        title={x.abbrevTitle}
                                        text={x.text}
                                        image={x.avatarUrl}
                                        date={x.datePosted}
                                        reviewer={x.reviewedBy}
                                        url={`${"https://tripadvisor.com"+x.reviewUrl}`}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )

}

export default TripAdvisor