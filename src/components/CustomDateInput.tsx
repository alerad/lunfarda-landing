import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import * as React from "react"
import {useRef, useState} from "react";
import calendarInput from '../assets/landing/calendar-icon.svg'
import downArrow from '../assets/landing/down-arrow.svg'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles(theme => (
    {
        datePick: {
            cursor: 'pointer'
        },
        picker: {
            border: 0,
            borderBottom: '1px solid ' + theme.palette.text.primary,
            backgroundColor: 'black',
            width: '100%',
            marginLeft: '1rem',
            color: theme.palette.neutralText.secondary
        }
    }
));

interface CustomDateInputProps {
    onChange : (newDate: Date) => void
}

export const CustomDateInput = (props: CustomDateInputProps) => {
    const classes = useStyles();

    let datePickerStartDate = useRef<any>(null)

    const [selectedDate, setDate] = useState(new Date());

    const openDatePicker = () => {
        datePickerStartDate.current.setOpen(true)
    }

    return (
        <Grid item container xs={12} spacing={3} justify={"flex-start"} alignItems={"center"} onClick={openDatePicker} className={classes.datePick}>
            <Grid item xs={1}>
                <img src={calendarInput} alt={"Date"}/>
            </Grid>
            <Grid item xs={6} style={{textAlign: "center"}} >
                <DatePicker
                    selected={selectedDate}
                    onChange={(x: any) => {
                        props.onChange(x)
                        setDate(x)
                    }}
                    className={classes.picker}
                    ref={datePickerStartDate}
                />
            </Grid>
            <Grid item xs={1} className={classes.datePick}>
                <img src={downArrow} alt={"Down"}/>
            </Grid>
        </Grid>
        )
}