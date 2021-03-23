import * as React from "react";
import {Grid} from "@material-ui/core";
import {DreamVacation} from "../src/components/landing/DreamVacation";
import {Footer} from "../src/components/landing/Footer";
import {Discover} from "../src/components/landing/Discover";

interface BookProps {

}

const book: React.FC<BookProps> = () => (
        <Grid item container xs={12}>
            <Grid item container xs={12} style={{marginBottom:'2rem'}}>
                <Discover/>
            </Grid>
            <Grid item container xs={12}>
                <DreamVacation/>
            </Grid>
            <Grid item container xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )

export default book