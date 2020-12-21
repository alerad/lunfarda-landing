import React from "react"
import {Typography, Grid, Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            borderRadius: "5px",
            boxShadow: "3px 3px 6px 0 #d9d9d9",
            border: "solid 1px #e2e2e2",
            borderTop: ".7rem solid #63A76D",
            cursor: "pointer",
            [theme.breakpoints.down('sm')]: {
                marginTop: '2rem'
            }
        },
        greenCircle: {
            minWidth: '1rem',
            minHeight: '1rem',
            margin: '2rem 0.5rem',
            borderRadius: '0.5rem',
            backgroundColor: "#63A76D"
        },
        textContainer: {
            textAlign: "left",
            maxHeight: '20rem',
            minHeight: '20rem'
        },
        title: {
            color: 'black',
            fontWeight: 500
        },
        avatar: {
            padding: "1rem 0.8rem"
        },
        avatarDescription: {
            marginLeft: '1rem'
        }
    }
));


interface TripCardProps {
    title: string,
    text: string
    image?: string,
    date?: string,
    url: string,
    reviewer: string
}

export const TripCard : React.FC<TripCardProps> = (props) => {
    const classes = useStyles();

    let finalText;
    if (props.text.length > 250) {
        finalText = props.text.substr(0,300) + "..."
    } else {
        finalText = props.text
    }
    return (
        <React.Fragment>
            <Grid item container xs={12} className={classes.root} justify={"center"} onClick={()=> window.open(props.url, "_blank")}>
                <Grid item container xs={10}>
                    <Grid item container xs={12}>
                        <div className={classes.greenCircle}/>
                        <div className={classes.greenCircle}/>
                        <div className={classes.greenCircle}/>
                        <div className={classes.greenCircle}/>
                        <div className={classes.greenCircle}/>
                    </Grid>
                    <Grid item container xs={12} className={classes.textContainer}>
                        <Grid item container xs={12}>
                            <Typography variant={"h3"} className={classes.title}>
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid item container xs={12}>
                            <Typography variant={"subtitle2"} style={{color:"black"}}>
                                {finalText}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} justify={"center"} className={classes.avatar}>
                <Grid item xs={4} md={2} >
                    <Avatar alt="" src={props.image} />
                </Grid>
                <Grid item container xs={8} md={10} justify={"center"} direction={"column"}>
                    <Grid item xs={12} style={{textAlign:'left'} } className={classes.avatarDescription}>
                        <Typography variant={"subtitle2"} style={{color:"black"}}>
                            {props.reviewer}
                        </Typography>
                        <Typography variant={"subtitle2"} style={{color:"black"}}>
                            {props.date}
                        </Typography>
                    </Grid>
                    {/*<Grid item xs={12} style={{textAlign:'left'} } className={classes.avatarDescription}>*/}

                    {/*</Grid>*/}
                </Grid>
            </Grid>
        </React.Fragment>

    )

}