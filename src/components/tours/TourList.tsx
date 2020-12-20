import React, {useEffect, useState} from "react"
import {Grid} from "@material-ui/core";
import {BookTour} from "./BookTour";
import {BokunRequest} from "../../services/BokunService";

interface TourListProps {
    filters?: string[]
}


export const TourList : React.FC<TourListProps> = (props) => {
    const [bokunResponse, setBokunResponse] = useState([]);

    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        if (bokunResponse.length == 0) {
            BokunRequest("/activity.json/search").then(x => {
                setAllItems(x.items)
                console.log(x)
                setResponse(x.items)
            })
        }
    }, []);

    useEffect( () => {
        setResponse(allItems)
    },[props.filters])

    const setResponse = (items: any) => {
        if (props.filters && props.filters.length > 0) {
            const lowerFilters = props.filters.map(x => x.toLowerCase());

            const filtered = items.filter((item: any) => {
                const keywords = item.keywords.map((y:string) => y.toLowerCase());
                return keywords.some((r:any)=> lowerFilters.includes(r))
            })
            setBokunResponse(filtered)
        } else {
            setBokunResponse(items)
        }
    }

    return (
        <Grid item container xs={12} spacing={2}>
            {bokunResponse.map(x => {
                return (
                    <Grid item xs={12} sm={6} md={4}>
                        <BookTour tour={x}/>
                    </Grid>
                )
            })}
        </Grid>
    )

}