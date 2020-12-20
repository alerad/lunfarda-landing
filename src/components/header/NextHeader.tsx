import * as React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles(theme => (
    {
        root: {
            minHeight: '10vh'
        },
        header: {
            height: '60px',
            backgroundColor: "#000000",
            width: "100%"
        },
        mainButton: {
            color: "#FAFAFA",
            textDecoration: 'none'
        }
    }
));


interface NextHeaderProps {

}

export const NextHeader: React.FC<NextHeaderProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.header}>
            <Link href={"/JewishHeritage"} style={{textDecoration: 'none'}}>
                <div className={`${classes.mainButton}`}>
                    <Typography>Jewish Heritage</Typography>
                </div>
            </Link>
        </Grid>
    )

}