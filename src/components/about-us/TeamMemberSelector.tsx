import React, {useState} from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {TeamMember} from "./TeamVisualizeComponent";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles(theme => (
    {
        root: {},
        circledImage: {
            backgroundSize: '100% 100%!important',
            borderRadius: '3rem',
            minHeight: '6rem',
            maxWidth: '6rem'
        },
        carousel: {
            width: '100%'
        }
    }
));


interface TeamMemberSelectorProps {
    onChange: (member: TeamMember) => void
}

export const TeamMemberSelector: React.FC<TeamMemberSelectorProps> = (props) => {
    const classes = useStyles();

    const screenWidth = window.screen.width;

    const amountPerCarusel = () => {
        if (screenWidth > 1048)
            return 6;
        return 3;
    }

    const memberGroups = () => {
        const groupAmount = members.length / amountPerCarusel();
        var groups = []

        var prevIndex = 0;

        for (let i = 0; i < groupAmount; i++) {
            if (i === 0) {
                groups.push(members.slice(0, amountPerCarusel()))
            } else {
                let group = members.slice(prevIndex+1, amountPerCarusel()+prevIndex+1)
                if (group) {
                    groups.push(group)
                }
            }
            prevIndex += amountPerCarusel()
        }

        return groups;
    }

    const [selected, setSelected] = useState(members[0])

    const isSelected = (member: TeamMember) => selected.name === member.name


    const onClick = (member: TeamMember) => {
        setSelected(member)
        props.onChange(member)
    }

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item container xs={12}>
                <Carousel
                    autoPlay={false}
                    animation={"slide"}
                    className={classes.carousel}
                >
                    {memberGroups().map(group => {
                        return (
                            <Grid item container xs={12} justify={"center"}>
                                {group.map((x,i) => {
                                    return (
                                        <Grid item xs={4} sm={3} md={1} onClick={()=>onClick(x)}>
                                            <CircledImage src={x.image} key={i} selected={isSelected(x)}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        )
                    })}
                </Carousel>
            </Grid>
        </Grid>
    )

}


interface CircledImageProps {
    src: string,
    selected: boolean
}

const CircledImage = (props: CircledImageProps)  => {
    const classes = useStyles()

    const borderStr = props.selected ? "0.3rem solid #00a0b2" : ""

    const style = {
        background: "url('"+props.src+"')",
        border: borderStr,
        cursor: 'pointer'
    }

    return (
        <div className={classes.circledImage} style={style}>

        </div>
    )
}


export const members : TeamMember[] = [
    {
        image: "https://i.imgur.com/ju7C6mO.jpg",
        description: "Mariana is a self-made entrepreneur with a background in advertising, who rocked a career as a 5 star tour guide and travel concierge before creating Lunfarda Travel.\n" +
            "\n" +
            "Living by and for the precept of Tikkun Olam, Mariana tries to “repair the world” by creating and strengthening community, pushing fair trade practices and developing a sustainable tourism agenda.\n" +
            "\n" +
            "Mariana loves to develop new products and services, pioneering family-oriented travel in Argentina and Jewish Heritage immersive experiences. Always on the hunt for new talents and products for discerning travelers, she keeps her feet on the ground by still guiding: she believes that’s the best way of keeping in touch with Lunfarda’s guests’ interests and needs.\n" +
            "\n" +
            "When she’s not working, you will find Mariana enjoying a local craft brew, cooking barbecues, studying Hebrew or relaxing at home with her tabby cat Gatalunya.",
        name: "Mariana Radisic Koliren",
        bio: "Born and bred porteña, Argentina travel maeven and tour developer.",
        credentials: "www.linkedin.com/in/marianaradisic",
        role: "Founder of Lunfarda Travel"
    },
    {
        image: "https://i.imgur.com/rO5bOcz.jpeg",
        description: "Luke is a transplant from the US who, after spending a year in Ecuador, followed his sense of adventure to Buenos Aires in 2012 and never looked back. He is a history buff, a story teller, a foodie, an art lover, and a bit of a wanderlust. Guided by his curious nature, his camera, and his bici (bike) he set out to unravel the history of his adopted home, and soon afterwards began to share his passion and knowledge for Buenos Aires with others. His favorite thing about Buenos Aires are it's cultural expressions, the city is saturated with culture you simply can't escape it- from breakdancing on the subway to opera in the Colón Theater, there's something for all tastes.\n" +
            " \n" +
            "Luke has an undergrad degree in International Commerce and Economics, and currently is completing his Master's studying Latin American Studies from the UNSAM University in Buenos Aires. He has a deep knowledge of the history of Buenos Aires, Argenti4na and the greater context of Latin America, he has also travelled the region extensively. When not showing others around the city he is probably researching for his thesis, biking through the city, trying out new recipes, keeping up on the city's street art scene, or off traveling somewhere.\n",
        name: "Luke",
        bio: "Street art specialist, popular culture expert and bike guide extraordinaire.",
        credentials: "",
        role: "Bike Tour Guide + Graffiti Specialist"
    },
    {
        image: "https://i.imgur.com/arHLXMD.jpg",
        description: "Corina is a born and raised Porteña actress passionate about Buenos Aires, its culture, history, and secrets. \n" +
            "With a strong background in History and Sociology, showing and sharing Buenos Aires’ beauty with foreigners has become one of the most enjoyable things of her life. An art lover, theater scene expert and foodie, Corina believes the cultural exchange that occurs during tours enhances our mutual cultural understanding while having a lot of fun. \n",
        name: "Corina",
        bio: "Passionate storyteller, food connoisseur, theater expert and a genuine blast.\n",
        role: "Generalist Guide",
        credentials: ""
    },
    {
        image: "https://i.imgur.com/acct91O.jpg",
        description: "Mariana was born and raised in Buenos Aires but in 2002, after several trips, she started a 15-years experience in Europe and discovered her passion for showing the cities where she lived. Aarhus, Barcelona, Lisbon, Brussels became her adopted homes and she offered their charms to those who wished besides visiting, feeling a city.\n" +
            "Back again in Buenos Aires, she delivers exceptional tours for people who want to experience the thrills of discovering a new destination.\n",
        name: "Mariana B",
        bio: "Globetrotter, exceptional guide and children language educator.",
        role: "Head of Family Travel + Family Travel Guide",
        credentials: ""
    },
    {
        image: "https://i.imgur.com/elN2xri.jpeg",
        description: "Santiago is a porteño performer and playwright, passionate about hosting and storytelling, compelled by the bizarre drama of Argentine history and its nasty sense of humor.\n" +
            "After working for several years as a tour guide in some of the most renowned local agencies, Santiago started developing experiences with a more immersive approach to bridge cultures by sharing the vibrating cultural scene of Buenos Aires, its Bohemian spirit and the Queer side of the City.\n",
        name: "Santi",
        bio: "Expressive guide with loads of experience with children and a sunny disposition",
        role: "Bike Tour Guide + LGBTIQ Specialist",
        credentials: ""
    },
    {
        image: "https://i.imgur.com/wtzSGRI.jpg",
        description: "Maru is a tour guide and historian whose study materials were often taller than herself, which might explain why she oozes so much knowledge. As a graduate from the demanding University of Buenos Aires, she’s all about the facts and none about the speculation, making her a perfect fit for scholars trying to gain a deep understanding of the complex social and political history of Argentina.\n" +
            "Maru is as experienced as she is socially involved, working with a popular highschool for underprivileged teens and adults alike for nearly a decade.\n" +
            "Discover the Political History and the Human Rights history of Argentina with her tours.\n",
        name: "Maru",
        bio: "Historian, guide and social activist with a no-nonsense approach.",
        role: "Generalist Guide + History Specialist",
        credentials: ""
    },
    {
        image: "https://i.imgur.com/AUDrsbA.png",
        description: "Julia is a tour guide, film student and activist. She's part of a project called Kukily Afrofeminist Collective, alongside three other women artists with different origins who - like herself - believe in changing the world through art and social action. She feels like being part of a community is essential because to her  sustainability means building a network where we can help each other to have a better life. She also love writing, learning new languages and meeting new people. Julia has led the investigation to create the first Afro-Argentine history tour.",
        name: "Julia",
        bio: "Afro-Argentine history expert, activist and artist.",
        role: "Afro-argentine + Tango Specialist",
        credentials: ""
    },
    {
        image: "https://i.imgur.com/AUDrsbA.png",
        description: "Julia is a tour guide, film student and activist. She's part of a project called Kukily Afrofeminist Collective, alongside three other women artists with different origins who - like herself - believe in changing the world through art and social action. She feels like being part of a community is essential because to her  sustainability means building a network where we can help each other to have a better life. She also love writing, learning new languages and meeting new people. Julia has led the investigation to create the first Afro-Argentine history tour.",
        name: "Julia",
        bio: "Afro-Argentine history expert, activist and artist.",
        role: "Afro-argentine + Tango Specialist",
        credentials: ""
    },
    {
        image: "https://i.imgur.com/bd5zpjj.jpeg",
        description: "Loli was born and raised in Buenos Aires City and for as long as she can remember, she's been prone to narrate stories. \n" +
            "Growing up in the neighborhood of Recoleta, she has always been fascinated by unraveling the marvelous past of the so-called Paris of South America. From young she collected personal memories in landmarks like Teatro Colon, where she saw her first ballet at only 6 years old or Recoleta’s cemetery where her mom would show her the people behind the street names. The love for these places is what motivated her to tell their wonders to others.\n" +
            "Loli finished her Bachelors Degree in Design in the University of Buenos Aires. She has participated in research programmes at her faculty, and currently volunteers as an ad-honorem teacher over there. She deeply believes that her knowledge as a designer feeds her capacity of understanding of Argentine history, and the relation between social studies and urbanism.\n" +
            "Loli’s experience as a tour guide goes back 7 years in Buenos Aires city, both in English and in Spanish. She is fluent in both and can speak a little Chinese.\n",
        name: "Loli",
        bio: "Approachable and kid friendly, makes tours effortlessly memorable",
        role: "Generalist Guide + Family Travel Specialist",
        credentials: ""
    },
    {
        image: "https://i.imgur.com/p9SPVmW.jpg",
        description: "Dominique is a porteña, tour guide and traveler with a degree in Tourism and Tour Guiding whose neverending interests drive her all around the world seeking new experiences and adventures.\n" +
            "With a mixed european background including French, Austrian and Spanish, Buenos Aires is her hometown and continues to capture her heart with its limitless diversity, vibrance, and intrigue. \n" +
            "Sharing it with others has become one of her most rewarding passions. Proud of her cities' architectural and cultural patrimony, she'll show you the hidden gems and reveal the history behind them. \n" +
            "When she's not guiding you can likely find her sharing an 'asado' (barbecue) and some 'mate' with friends, or better yet traveling and looking for mountains to hike in.\n",
        name: "Dominique",
        bio: "Professional tour guide, nature lover and raconteuse",
        role: "Generalist Guide + Tigre & San Isidro Specialist",
        credentials: ""
    },
    {
        image: "https://i.imgur.com/ZC5iDF4.jpg",
        description: "Fernando is a tour guide and lawyer who has spent the last 6 years sharing the stories of his native Buenos Aires with tourists from all around the world.\n" +
            "Between 2007 and 2013 he worked as Madrij in the Netzer tnua and in the Judaica Youth belonging to the masotrí NCI Emanu-el community and in 2014 he led a Taglit gastronomic trip throughout Israel.\n" +
            "After graduating from the UBA with orientation in Public International Law focused on Human Rights, he’s taken advanced courses in intellectual property protection and trademark registration. Since 2013, he has been part of Abogadxs Culturales, participating in the areas of legal advice, financing and institutional representation.\n",
        name: "Fernando",
        bio: "All-things-Jewish expert and kosher-friendly itinerary designer.",
        role: "Head of Jewish Heritage + Jewish Heritage Guide",
        credentials: ""
    },
    {
        image: "https://i.imgur.com/2UEpTmu.jpg",
        description: "Juan Cruz is a lecturer in History of Design at the School of Architecture, Design and Urbanism of the national Universidad de Buenos Aires. He is also a researcher, currently involved in a project about the models of feminine beauty in Buenos Aires in the period 1800 - 1830.  He has participated in a wide range of seminars and courses related to design, architecture, art history, music and painting. \n" +
            "   Juan Cruz has also graduated with a degree in music and plays violin in a symphonic orchestra as well as being a part of a tango group. In the past, he has worked in two vastly different cultural institutions: an opera house and a center of contemporary art. \n" +
            "   He has travelled through four continents and considers travelling one of the most enlightening experiences and ways to learn. This has motivated Juan Cruz to share his passion for arts, architecture and design through tours specialised in those topics, with the goal of spreading the local heritage and helping visitors to understand it.\n",
        name: "Juan Cruz",
        bio: "Design expert with insider access to Argentina’s local scene",
        role: "Art, Architecture & Design Guide + Personal Shopper",
        credentials: ""
    },
    {
        image: "https://i.imgur.com/U6E5FnI.jpeg",
        description: "Having experienced the heat of the 2001 social conflicts himself, Martín, a born-and-raised porteño studied sociology at the University of Buenos Aires trying to gain a deeper understanding of the drivers behind Argentine culture and behavior. \n" +
            "Passionate about economic history, culinary culture and football, Martín brings in-depth knowledge of the social processes, history and transformations of Argentina through the ages.\n" +
            "As a Jewish Heritage guide, he weaves the history and development of the Argentine Jewish identity into the broad experiences the Argentine society has undergone.\n",
        name: "Martin",
        bio: "Sociologist with a deep understanding of History and social quirks.",
        role: "Argentine Society Expert + Jewish Heritage Guide",
        credentials: ""
    },
    {
        image: "https://i.imgur.com/OruKTKj.jpeg",
        description: "Esteban Bellotto Kuzminsky is a film producer, sound designer and tour guide based in Buenos Aires, the city where he grew up. After studying sociology he changed to audiovisual arts and cinema to enrich his historical knowledge with storytelling and artistic creativity. \n" +
            "After working as a guide in the Casa Rosada Museum, the presidential palace of the Argentine state, he began guiding private and group tours in which he focuses on the cultural and urbanistic heritage of the city. He is your go-to-guide to discover the next cultural districts of the city,  the architectural identities and tendencies of different neighbourhoods or to explore the city center like an urban-archeologist. \n" +
            "He’s currently finishing his first documentary film as director, “Scenographers”, about the urban transformations on the city’s southern districts and the terraformation of the old swamps and marshlands that now are whole neighborhoods. He was selected with his new project, “Museum of Nature” based on the history of the Misiones natural biodiversity and patrimony, to participate on the Berlinale’s Buenos Aires Talents 2020 as one of the promising latin american new independent filmmakers.\n",
        name: "Esteban",
        bio: "Documentalist and movie producer with a focus on Urbanism, Gentrification and Cinema",
        role: "Generalist Guide + Urbanism and Cinema Expert",
        credentials: ""
    },
    {
        image: "https://i.imgur.com/tgYiExl.jpg",
        description: "Angie was born in Patagonia, but was reborn when she moved to Italy at age 24 and discovered the magic of its food. Driven by a curious palate, she explored Europe’s vineyards and markets until she discovered the Slow Food movement and decided to dedicate the rest of her life to culinary culture.\n" +
            "In 2016, she graduated with honors from Pollenzo’s University of Culinary Sciences, with a Master’s Degree in Culinary Culture and Communication. Her thesis explored the influence of Doña Petrona and her iconic, must-have cookbooks on Argentine culinary culture.\n" +
            "After working in NYC, she returned to Argentina and settled in Buenos Aires, where she ghost-writes books for some of the most famous chefs of Argentina and leads spectacular food tours with traditional or contemporary itineraries.\n" +
            "Angie is a fan of the intersectionality of food, and how it encompasses agriculture, history, art, science, technology and most importantly: people. \n",
        name: "Angie",
        bio: "Ghost writer for Argentina’s top chefs who brings out the flavors of BA like no other.",
        role: "Food Expert",
        credentials: ""
    },
    {
        image: "https://i.imgur.com/61eetS5.jpeg",
        description: "Tomás breathes and lives for tango. A clarinetist, bandoneonist and music arranger, he leads Tu Vieja en Tango, a quintet of new tango that takes the old codes and reinvents them to suit the expressive needs of the new generation.\n" +
            "Somewhat of a tango fundamentalist, he’s our go-to guy to help us choose the most authentic experiences, honoring the tradition and authenticity of the genre. Tomás also leads our tailor-made tango tours, opening the gates of for-locals tango to tourists from all over the world.\n" +
            "When he’s not rehearsing, you will find Tomás sampling craft brews or whiskies, or cooking impressive meals at his home in Boedo.\n",
        name: "Tomás",
        bio: "Tango musician, nostalgic soul and guide to the local tango scene",
        role: "Tango Expert",
    }
]