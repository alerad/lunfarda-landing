import * as React from "react";
import loadable from "@loadable/component";
const Grid = loadable(() => import("@material-ui/core/Grid"))
const Discover = loadable(() => import("../src/components/landing/Discover"))
const StartHere = loadable(() => import("../src/components/landing/StartHere"))
const DreamVacation = loadable(() => import("../src/components/landing/DreamVacation"))
const TripAdvisor = loadable(() => import("../src/components/landing/TripAdvisor"))
const Local = loadable(() => import("../src/components/landing/Local"))
const Experiences = loadable(() => import("../src/components/landing/Experiences"))
const Philosophy = loadable(() => import("../src/components/landing/Philosophy"))
const Footer = loadable(() => import("../src/components/landing/Footer"))

export default function Home() {
  return (
      <React.Fragment>
        <Grid container item xs={12}>
          <StartHere/>
        </Grid>

        <Grid container item xs={12}>
          <Discover/>
        </Grid>

        <Grid item container xs={12} style={{marginTop: "3rem"}}>
          <DreamVacation/>
        </Grid>

        <Grid item container xs={12}>
          <TripAdvisor/>
        </Grid>

        <Grid item container xs={12}>
          <Local/>
        </Grid>

        <Grid item container xs={12}>
          <Experiences/>
        </Grid>

        <Grid item container xs={12}>
          <Philosophy/>
        </Grid>

        <Grid item container xs={12}>
          <Footer/>
        </Grid>
      </React.Fragment>
  )
}
