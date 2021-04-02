import * as React from "react"
import {useEffect, useState} from "react"
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
// @ts-ignore
import Trip from '../../assets/icon-tripadvisor.svg'
import {AddTripScript, GetReviews} from "../../services/TripAdvisorService";
import {TripCard} from "./tripadvisor/TripCard";
import emailjs, {init} from "emailjs-com";

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

const mockReviews: any[] = [{"datePosted":"Jul 12, 2020","avatarUrl":"https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e4/2d/default-avatar-2020-48.jpg","reviewedBy":"S5226SIrichardg","canResponse":true,"descriptionWords":"We hired transfers to AEP, to EZE and a highlights tour with this company and everything was handled in a smooth and professional way. \n\nThe cars were very modern, clean and the driver -I think his name was Sergio- was a pro at navigating the traffic of Buenos Aires... nerves of steel!! I thought it was a very nice detail...","abbrevTitle":"Attentive to detail and professional.","reviewOf":"Review of: Private Sedan Transfer In - Aeroparque Airport - Buenos Aires","responseData":null,"relativePublishedDate":null,"locationAddress":"Buenos Aires Argentina","translationUrl":null,"reviewUrl":"/ShowUserReviews-g312741-d18910283-r759813706-Private_Sedan_Transfer_In_Aeroparque_Airport_Buenos_Aires-Buenos_Aires_Capital_.html","id":759813706,"locationId":18910283,"placeType":"GEO","lang":"en","locationName":"Private Sedan Transfer In - Aeroparque Airport - Buenos Aires","title":"Attentive to detail and professional.","rating":5,"providerId":0,"text":"We hired transfers to AEP, to EZE and a highlights tour with this company and everything was handled in a smooth and professional way. \n\nThe cars were very modern, clean and the driver -I think his name was Sergio- was a pro at navigating the traffic of Buenos Aires... nerves of steel!! I thought it was a very nice detail to have both flat and sparkling cold water available at the car.\n\nThe highlights tour was excellent as well, thumbs up to our guide Corina who made it very fun and memorable. Thanks for sharing your mate drink with us... we didn't quite have the palate for it but it was a nice detail!!","partnerName":null,"alertStatus":false,"timestamp":1594579311000,"status":"NONE"},{"datePosted":"Jul 11, 2020","avatarUrl":"https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/f2/7a/default-avatar-2020-25.jpg","reviewedBy":"P349SOsarahc","canResponse":true,"descriptionWords":"Lunfarda helped us create an itinerary for our 4 night stay in Buenos Aires. We thoroughly enjoyed all the tours, the guides were extremely knowledgable, helpful and fun and our birdwatching day trip to Tigre was a great break from our more cultural outings in Buenos Aires.","abbrevTitle":"Excellent staff","reviewOf":null,"responseData":null,"relativePublishedDate":null,"locationAddress":"Calle Estados Unidos 300, Buenos Aires C1101AAF Argentina","translationUrl":null,"reviewUrl":"/ShowUserReviews-g312741-d18543609-r759694897-Lunfarda_Travel-Buenos_Aires_Capital_Federal_District.html","id":759694897,"locationId":18543609,"placeType":"ATTRACTION","lang":"en","locationName":"Lunfarda Travel","title":"Excellent staff","rating":5,"providerId":0,"text":"Lunfarda helped us create an itinerary for our 4 night stay in Buenos Aires. We thoroughly enjoyed all the tours, the guides were extremely knowledgable, helpful and fun and our birdwatching day trip to Tigre was a great break from our more cultural outings in Buenos Aires.","partnerName":null,"alertStatus":false,"timestamp":1594507469000,"status":"NONE"},{"datePosted":"Jul 6, 2020","avatarUrl":"https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/ee/db/default-avatar-2020-10.jpg","reviewedBy":"Emily S","canResponse":true,"descriptionWords":"This was easily one of the best tours I've ever done. Fernando is so witty, knowledgable and helpful! It was really interesting reflecting on how the Argentine and American Jewish identities are so similar yet so different too.\nI l can't wait to have this pandemic finish soon so I can go back to doing amazing cultural experiences like this!...","abbrevTitle":"Fun tour with an awesome guide!","reviewOf":"Review of: Jewish Heritage Walking Tour - Visit Libertad Synagogue + Jewish Museum + more","responseData":null,"relativePublishedDate":null,"locationAddress":"Buenos Aires Argentina","translationUrl":null,"reviewUrl":"/ShowUserReviews-g312741-d19907644-r759171409-Jewish_Heritage_Walking_Tour_Visit_Libertad_Synagogue_Jewish_Museum_more-Buenos.html","id":759171409,"locationId":19907644,"placeType":"GEO","lang":"en","locationName":"Jewish Heritage Walking Tour - Visit Libertad Synagogue + Jewish Museum + more","title":"Fun tour with an awesome guide!","rating":5,"providerId":0,"text":"This was easily one of the best tours I've ever done. Fernando is so witty, knowledgable and helpful! It was really interesting reflecting on how the Argentine and American Jewish identities are so similar yet so different too.\nI l can't wait to have this pandemic finish soon so I can go back to doing amazing cultural experiences like this! :')","partnerName":null,"alertStatus":false,"timestamp":1594079267000,"status":"NONE"},{"datePosted":"Jun 20, 2020","avatarUrl":"https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/df/99/default-avatar-2020-40.jpg","reviewedBy":"nachoco","canResponse":true,"descriptionWords":"Very insightful guide, learnt a lot about the local culture and was amazed by the kindness of the guide","abbrevTitle":"Great experience! Recomend","reviewOf":"Review of: Private La Boca and San Telmo Food & History Walk","responseData":null,"relativePublishedDate":null,"locationAddress":"Buenos Aires Argentina","translationUrl":null,"reviewUrl":"/ShowUserReviews-g312741-d18910139-r757814469-Private_La_Boca_and_San_Telmo_Food_History_Walk-Buenos_Aires_Capital_Federal_Di.html","id":757814469,"locationId":18910139,"placeType":"GEO","lang":"en","locationName":"Private La Boca and San Telmo Food & History Walk","title":"Great experience! Recomend","rating":5,"providerId":0,"text":"Very insightful guide, learnt a lot about the local culture and was amazed by the kindness of the guide","partnerName":null,"alertStatus":false,"timestamp":1592688475000,"status":"NONE"},{"datePosted":"Jun 20, 2020","avatarUrl":"https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/f2/b8/default-avatar-2020-26.jpg","reviewedBy":"alerad","canResponse":true,"descriptionWords":"I booked a private tour for my visit in January. It was great, the guide was very knowledgeable and enthusiast. I tend to make lots of questions on this kind of tours and she was able to answer each of them in a really insightful way.\n\nI'm also a foodie, and asked a few questions about where to eat, both...","abbrevTitle":"It's worth every penny to tour with...","reviewOf":"Review of: Private La Boca and San Telmo Food & History Walk","responseData":null,"relativePublishedDate":null,"locationAddress":"Buenos Aires Argentina","translationUrl":null,"reviewUrl":"/ShowUserReviews-g312741-d18910139-r757811966-Private_La_Boca_and_San_Telmo_Food_History_Walk-Buenos_Aires_Capital_Federal_Di.html","id":757811966,"locationId":18910139,"placeType":"GEO","lang":"en","locationName":"Private La Boca and San Telmo Food & History Walk","title":"It's worth every penny to tour with these pros!","rating":5,"providerId":0,"text":"I booked a private tour for my visit in January. It was great, the guide was very knowledgeable and enthusiast. I tend to make lots of questions on this kind of tours and she was able to answer each of them in a really insightful way.\n\nI'm also a foodie, and asked a few questions about where to eat, both for fine dining and authentic argentinian food. I was really pleased with the guides recommendations on this matter!\n\nThanks, will definitely book again if I visit Buenos Aires!","partnerName":null,"alertStatus":false,"timestamp":1592682708000,"status":"NONE"},{"datePosted":"Jun 20, 2020","avatarUrl":"https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e6/ea/default-avatar-2020-54.jpg","reviewedBy":"Compass766794","canResponse":true,"descriptionWords":"Doing this tour with Lunfarda was such a memorable experience! Our guide Luke had so much knowledge about the history of the place and passion for his city!\nHe took us on a tour of La Boca that included some street art.\nWe loved the dulce de leche tasting, and I really appreciated how he took my kids age (5...","abbrevTitle":"Kid friendly and informative La Boca...","reviewOf":"Review of: Private La Boca and San Telmo Food & History Walk","responseData":null,"relativePublishedDate":null,"locationAddress":"Buenos Aires Argentina","translationUrl":null,"reviewUrl":"/ShowUserReviews-g312741-d18910139-r757811202-Private_La_Boca_and_San_Telmo_Food_History_Walk-Buenos_Aires_Capital_Federal_Di.html","id":757811202,"locationId":18910139,"placeType":"GEO","lang":"en","locationName":"Private La Boca and San Telmo Food & History Walk","title":"Kid friendly and informative La Boca street art tour!","rating":5,"providerId":0,"text":"Doing this tour with Lunfarda was such a memorable experience! Our guide Luke had so much knowledge about the history of the place and passion for his city!\nHe took us on a tour of La Boca that included some street art.\nWe loved the dulce de leche tasting, and I really appreciated how he took my kids age (5 and 9) in consideration and made the tour fun and engaging for them as well.\nI look forward to going back to Argentina in the future and hiring Lunfarda again!","partnerName":null,"alertStatus":false,"timestamp":1592681288000,"status":"NONE"},{"datePosted":"May 20, 2020","avatarUrl":"https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e7/99/default-avatar-2020-57.jpg","reviewedBy":"jefbra","canResponse":true,"descriptionWords":"The overall history of the Jewish people in Buenos Aires is fascinating. But the tour was enhanced by the knowledge and overall friendliness of Mariana.  She was a fantastic guide who made the tour informative AND fun!  One of the unexpected  highlights was lunch at a local deli.  Mariana ordered for us, and chose some great kosher standards. We would...","abbrevTitle":"Great tour and an even better guide!","reviewOf":"Review of: Jewish Heritage Walking Tour - Visit Libertad Synagogue + Jewish Museum + more","responseData":null,"relativePublishedDate":null,"locationAddress":"Buenos Aires Argentina","translationUrl":null,"reviewUrl":"/ShowUserReviews-g312741-d19907644-r755265985-Jewish_Heritage_Walking_Tour_Visit_Libertad_Synagogue_Jewish_Museum_more-Buenos.html","id":755265985,"locationId":19907644,"placeType":"GEO","lang":"en","locationName":"Jewish Heritage Walking Tour - Visit Libertad Synagogue + Jewish Museum + more","title":"Great tour and an even better guide!","rating":5,"providerId":0,"text":"The overall history of the Jewish people in Buenos Aires is fascinating. But the tour was enhanced by the knowledge and overall friendliness of Mariana.  She was a fantastic guide who made the tour informative AND fun!  One of the unexpected  highlights was lunch at a local deli.  Mariana ordered for us, and chose some great kosher standards. We would recommend this tour and Mariana as a guide to anyone traveling to Buenos Aires, Jewish or not!","partnerName":null,"alertStatus":false,"timestamp":1589980938000,"status":"NONE"},{"datePosted":"May 18, 2020","avatarUrl":"https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e7/fe/default-avatar-2020-58.jpg","reviewedBy":"curtjp","canResponse":true,"descriptionWords":"Mariana in not only such a personable and sweet guide but her knowledge and insight of the City and specifically its Jewish history brought our tour to life. I had been to BA once before and had done a Jewish tour but that paled to what I learnt from Mariana. Her enthusiasm for the city of her heritage also greatly...","abbrevTitle":"Amazing Jewish tour of Buenos Aires","reviewOf":"Review of: Jewish Heritage Walking Tour - Visit Libertad Synagogue + Jewish Museum + more","responseData":null,"relativePublishedDate":null,"locationAddress":"Buenos Aires Argentina","translationUrl":null,"reviewUrl":"/ShowUserReviews-g312741-d19907644-r754641130-Jewish_Heritage_Walking_Tour_Visit_Libertad_Synagogue_Jewish_Museum_more-Buenos.html","id":754641130,"locationId":19907644,"placeType":"GEO","lang":"en","locationName":"Jewish Heritage Walking Tour - Visit Libertad Synagogue + Jewish Museum + more","title":"Amazing Jewish tour of Buenos Aires","rating":5,"providerId":0,"text":"Mariana in not only such a personable and sweet guide but her knowledge and insight of the City and specifically its Jewish history brought our tour to life. I had been to BA once before and had done a Jewish tour but that paled to what I learnt from Mariana. Her enthusiasm for the city of her heritage also greatly contributed to our wonderful experience with her.","partnerName":null,"alertStatus":false,"timestamp":1589836478000,"status":"NONE"},{"datePosted":"May 18, 2020","avatarUrl":"https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e2/e6/default-avatar-2020-45.jpg","reviewedBy":"steveC_hrr24","canResponse":true,"descriptionWords":"I`m an observant jew and having Lunfarda organized my trip was incredible. They organized kosher lunchboxes for me and my family,  and even sent a bottle of Argentine Kosher Wine to our room for Shabat. The tours where amazing, the kids loved them, specially the one of La Boca. Fernando is a great guide, i cant recommend Lunfarda and Fernando...","abbrevTitle":"Incredible Agency and group, looking...","reviewOf":"Review of: Private Jewish Walking Tour - Includes visit to AMIA, Libertad Synagogue + more","responseData":null,"relativePublishedDate":null,"locationAddress":"Buenos Aires Argentina","translationUrl":null,"reviewUrl":"/ShowUserReviews-g312741-d18910140-r753855422-Private_Jewish_Walking_Tour_Includes_visit_to_AMIA_Libertad_Synagogue_more-Buen.html","id":753855422,"locationId":18910140,"placeType":"GEO","lang":"en","locationName":"Private Jewish Walking Tour - Includes visit to AMIA, Libertad Synagogue + more","title":"Incredible Agency and group, looking forward to my next trip with them","rating":5,"providerId":0,"text":"I`m an observant jew and having Lunfarda organized my trip was incredible. They organized kosher lunchboxes for me and my family,  and even sent a bottle of Argentine Kosher Wine to our room for Shabat. The tours where amazing, the kids loved them, specially the one of La Boca. Fernando is a great guide, i cant recommend Lunfarda and Fernando enough. Thanks for making us have such a great time at Buenos Aires!!","partnerName":null,"alertStatus":false,"timestamp":1589816160000,"status":"NONE"},{"datePosted":"May 17, 2020","avatarUrl":"https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/f4/5d/default-avatar-2020-32.jpg","reviewedBy":"rellafeldman","canResponse":true,"descriptionWords":"Marianna is a wealth of knowledge about Buenos Aires and Argentina and the Jewish community there.  She is passionate, speaks English perfectly and conveyed to us the history and role of Jewish Argentinians.  Her stories brought life to the history.  Our group of 4 so enjoyed our days with Marianna; she completely made the trip for us and was accommodating...","abbrevTitle":"Jewish Buenos Aires","reviewOf":"Review of: Jewish Walking Tour - Visit Libertad Synagogue + Jewish Museum + AMIA","responseData":null,"relativePublishedDate":null,"locationAddress":"Buenos Aires Argentina","translationUrl":null,"reviewUrl":"/ShowUserReviews-g312741-d18834143-r753601891-Jewish_Walking_Tour_Visit_Libertad_Synagogue_Jewish_Museum_AMIA-Buenos_Aires_Ca.html","id":753601891,"locationId":18834143,"placeType":"GEO","lang":"en","locationName":"Jewish Walking Tour - Visit Libertad Synagogue + Jewish Museum + AMIA","title":"Jewish Buenos Aires","rating":5,"providerId":0,"text":"Marianna is a wealth of knowledge about Buenos Aires and Argentina and the Jewish community there.  She is passionate, speaks English perfectly and conveyed to us the history and role of Jewish Argentinians.  Her stories brought life to the history.  Our group of 4 so enjoyed our days with Marianna; she completely made the trip for us and was accommodating in every way.  We came away with a rich understanding of this beautiful, complex country and look forward to returning and being with Marianna in the future.  She was the BEST guide you can imagine!","partnerName":null,"alertStatus":false,"timestamp":1589756556000,"status":"NONE"}]
export const TripAdvisor : React.FC<TripAdvisorProps> = (props) => {
    const classes = useStyles();
    init("user_cj6HL59j1sB0doOAAkpof");

    const [reviews, setReviews] = useState(mockReviews)

    useEffect(() => {
        GetReviews()
            .then(x => x.json())
            .then(x => {
                console.log(JSON.stringify(x.reviewData))
                setReviews(x.reviewData)
            })
            .catch(x => {
                 GetReviews()
                    .then(x => x.json())
                    .then(x => setReviews(x.reviewData))
            })
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
                                <Grid item xs={10} md={3} key={x.text}>
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