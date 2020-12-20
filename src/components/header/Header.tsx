import * as React from "react";
import {HeaderButton, HeaderButtonProps} from "./HeaderButton";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

interface HeaderProps {
}

const useStyles = makeStyles((theme) => ({
    header: {
        height: '10vh',
        backgroundColor: "#000000",
        width: "100%"
    },
    mainButtons: {
        justify: "center"
    },
    homeButton: {
        fontFamily: "LuloCleanOneBold"
    },
    socialIcons: {
        justify: "flex-end"
    },
    cta: {
    }
}));

export const Header: React.FC<HeaderProps> =
    () => {
        const classes = useStyles();
        return (
            <React.Fragment>
                <Grid
                    item
                    xs={12}
                    container
                    justify="center"
                    alignItems="center"
                    className={classes.header}
                >
                    <Grid
                        item xs={8}
                        container
                        justify="center"
                        alignItems="center"
                        spacing={4}
                        style={{height:'100%'}}
                    >
                        <Grid item>
                            <HeaderButton ClassName={classes.homeButton} Text={"LUNFARDA TRAVEL"} Url={"/"} As={"/"}/>
                        </Grid>
                        {hButtons.map((x,i) =>
                            <Grid item key={i}>
                                <HeaderButton Text={x.Text} Url={x.Url} key={x.Text} subItems={x.subItems} As={x.As}/>
                            </Grid>
                        )}

                    </Grid>
                    {/*<Grid item xs={2} justify={"flex-end"} className={classes.cta}>*/}
                    {/*    <SocialIcons/>*/}
                    {/*</Grid>*/}
                </Grid>
            </React.Fragment>
        )
    }


const SocialIcons = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <InstagramIcon style={{color:'white'}}/>
            <FacebookIcon style={{marginLeft:'0.8rem', color:'white'}}/>
        </React.Fragment>
    )
}

export default Header

/**
 * Urls and routing are handled in App.js
 */
export const hButtons : HeaderButtonProps[] = [
    {
        Text : "Buenos Aires",
        Url: "BuenosAires",
        As: "buenos-aires",
        subItems: [
            {
                Text: "Neighborhoods",
                Url: "Neighborhoods",
                As: "neighborhoods"
            },
            {
                Text: "Culture",
                Url: "Culture",
                As: "culture"
            },
            {
                Text: "Day trips",
                Url:"DayTrips",
                As: "day-trips"
            }
        ]

    },
    {
        Text : "Kids",
        Url: "Kids",
        As: "kids"
    },
    {
        Text : "Jewish Heritage",
        Url: "JewishHeritage",
        As:"jewish-heritage"
    },
    {
        Text : "Argentina",
        Url: "Argentina",
        As:"argentina"
    },
    {
        Text : "Book",
        Url: "Book",
        As:"book"
    },
    {
        Text : "About Us",
        Url: "AboutUs",
        As: "about-us"
    },
    {
        Text : "FAQ",
        Url: "Faq",
        As:"faq"
    }
]
