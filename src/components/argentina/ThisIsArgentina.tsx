import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            [theme.breakpoints.up('md')]: {
                marginTop: '2rem',
            }
        },
        gridImage: {

        }
    }
));


interface ThisIsArgentinaProps {

}

export const ThisIsArgentina: React.FC<ThisIsArgentinaProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"center"} alignItems={"center"}>
            <Grid item xs={12} md={4} style={{border:0}}>
                <img src={"https://i.imgur.com/e5SaS1X.png"} style={{backgroundSize: 'cover', width:'100%'}} alt={"Argentina South"}/>
            </Grid>
            <Grid item md={2}/>
            <Grid item xs={10} md={6} style={{padding:'2rem'}}>
                <Typography variant={"body1"} style={{color: "black"}}>
                    Far south, there is a land where the mountains meet the sun; where wine flows deep red and the llamas graze over old Inca trails.
                    <br/><br/>
                    In this place, you might find a jungle in which depths the world roars, echoing through the wetlands all the way into a sea of mud where the Spaniards once dreamt of glory and gold.
                    <br/><br/>
                    It's a land of heat and of cold; of restful star-gazing and misty sunrises; where the ancient and the mystical meet the promise of days to come<br/>
                </Typography>
                <Typography variant={"subtitle1"} style={{fontWeight:500, color:"black"}}>
                    <br/>
                    This is argentina
                </Typography>
            </Grid>
        </Grid>
    )

}

export default ThisIsArgentina