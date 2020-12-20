import React from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundImage: "url('https://lun-us.icons8.com/api/assets/37303601-cc80-4c9b-834f-d74d96749dac/00 Header.png')",
            backgroundSize: "100% 100%",
            position:'relative'
        },
        textContent: {
            textAlign: 'left',
            marginTop: '8rem',
            marginBottom: '4rem',
            zIndex: 1
        },
        blackMask: {
            zIndex: 0,
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: 'rgb(0,0,0,0.5)'
        }
    }
));


interface DiscoverBuenosAiresProps {

}

export const DiscoverBuenosAires: React.FC<DiscoverBuenosAiresProps> = (props) => {
    const classes = useStyles();

    return (
        <Grid item container xs={12} className={classes.root} justify={"flex-start"}>
            <Grid item container xs={12} className={classes.textContent}>
                <Grid item md={2}/>
                <Grid item container xs={8} >
                    <Grid item xs={12}>
                        <Typography variant={"h1"} color={"secondary"}>
                            Buenos Aires's
                        </Typography>
                        <Typography variant={"h1"} color={"primary"}>
                            neighborhoods.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{marginTop: '1rem'}}>
                        <Typography variant={"subtitle1"} color={"secondary"}>
                            Discover the eclectic beauty behind each area.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <div className={classes.blackMask}/>
        </Grid>
    )

}

export default DiscoverBuenosAires