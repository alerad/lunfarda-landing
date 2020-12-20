import React, {useEffect, useState} from "react"
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
    {
        root: {
            marginBottom: '2rem'
        }
    }
));


interface TourFiltersProps {
    filters: string[],
    activeFilters: string[],
    onChange: (filters: string[]) => void
}

export const TourFilters: React.FC<TourFiltersProps> = (props) => {
    const classes = useStyles();

    const [filters, setFilters] = useState<string[]>(props.activeFilters)

    const onClickFilter = (filter: string) => {
        if (filters.includes(filter)) {
            const newFilters = filters.filter(x => x !== filter)
            props.onChange(newFilters)
            setFilters(newFilters)
        }
        else {
            const newFilters = [...filters, filter]
            props.onChange(newFilters)
            setFilters(newFilters)
        }
    }


    return (
        <Grid item container xs={12} className={classes.root} spacing={4}>
            {props.filters.map((x,i) => {
                return (
                    <Grid item xs={6} md={2} key={i}>
                        <Filter onClick={onClickFilter} filterName={x} currentFilters={props.activeFilters}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

interface FilterProps {
    filterName: string,
    currentFilters: string[],
    onClick: (filter: string) => void
}

const Filter = (props: FilterProps) => {
    let styles = {
        borderRadius: '2rem',
        border: '0.07rem solid black',
        color: "black",
        fontSize: "1rem",
        backgroundColor: 'white',
        minHeight: '2rem',
        cursor: 'pointer'
    }

    const [active, setActive] = useState(false)


    if (active) {
        styles.backgroundColor = "#00a0b2"
        styles.color = 'white'
    }

    const handleClick = (filter: string) => {
        setActive(!active)
        props.onClick(filter)
    }

    useEffect(() => {
        if (props.currentFilters.map(x => x.toLowerCase()).includes(props.filterName.toLowerCase()))
            setActive(true)
    }, [props.currentFilters])

    return (
        <Grid item container xs={12} style={styles} onClick={() => handleClick(props.filterName)} alignItems={"center"} justify={"center"}>
            <Grid item xs={12} style={{textAlign:"center", textTransform:"capitalize"}}>
                {props.filterName}
            </Grid>
        </Grid>
    )
}

