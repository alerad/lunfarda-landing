import React from "react"
import {Typography, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {

    }
));


interface TripCardProps {
    title: string,
    text: string
    image: string,
    date: string
}

export const TripCard : React.FC<TripCardProps> = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment/>
    )

}