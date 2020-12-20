import React from "react"
import {Typography, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import city from '../../assets/landing/city.svg'
import kids from '../../assets/landing/kids.svg'
import luggage from '../../assets/landing/luggage.svg'
import synagogue from '../../assets/landing/sinagoge.svg'

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundColor: 'black',
            minHeight: '20vh',
            paddingBottom: '1rem'
        },
        experienceBodyText: {
            color: theme.palette.neutralText.secondary,
            marginTop:'0.65rem'
        },
        experienceIcon: {
            marginBottom: '1rem',
            marginTop: '1rem',
            maxHeight:'2.7rem',
            maxWidth:'2.7rem'
        },
        experienceTitle: {
            fontSize: ".9rem"
        }
    }
));



export const Experiences : React.FC = () => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item container xs={2}/>
            <Grid item container xs={8}>
                <Grid item container xs={12} justify={"center"} alignItems={"center"} spacing={3}>
                    <Grid item xs={6} md={3}>
                        <ExperienceItem sv={city} title={"City Tours"} bodyText={"Explore Buenos Aires in depth with local experts."}/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <ExperienceItem sv={synagogue} title={"Jewish Heritage"} bodyText={"Discover the Argentine Jewish Identity, or request a Kosher-friendly itinerary."}/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <ExperienceItem sv={luggage} title={"Experiences"} bodyText={"Unique activities, specialty tours and off-the-beaten path experiences."}/>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <ExperienceItem sv={kids} title="Lunfarda Kids" bodyText={"Family travel made hassle-free with our family friendly itineraries and tours."}/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container xs={2}/>
        </Grid>
    )

}

export default Experiences

interface ExperienceItemProps {
    sv: string,
    title: string,
    bodyText: string
}

const ExperienceItem = (props: ExperienceItemProps) => {
    const classes = useStyles();

    return (
        <div style={{textAlign:"center"}}>
            <img src={props.sv} className={classes.experienceIcon} alt={"Argentina experiences"}/>
            <Typography variant={"h4"} className={classes.experienceTitle}>
                {props.title}
            </Typography>
            <Typography variant={"body2"} className={classes.experienceBodyText}>
                {props.bodyText}
            </Typography>
        </div>
    )
}