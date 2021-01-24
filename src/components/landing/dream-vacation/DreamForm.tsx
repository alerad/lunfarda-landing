import React, {useState} from "react"
import {FormControl, Grid, TextareaAutosize, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {TextInput} from "../../forms/TextInput";
import {CustomDateInput} from "../../CustomDateInput";
import {CtaButton} from "../../CtaButton";
import emailjs, {init} from "emailjs-com";
import {AmountPicker} from "./AmountPicker";
import {FormOk} from "../../forms/FormOk";
import { ToastContainer, toast } from 'react-toastify';

const useStyles = makeStyles(theme => (
    {
        root: {},
        textArea: {
            border: '1px solid',
            borderColor: theme.palette.text.primary,
            backgroundColor: 'black',
            resize: 'none',
            width: '100%',
            color: theme.palette.neutralText.secondary
        },
        formSpacing: {
            marginBottom: '5%'
        },
        datePicker: {
            "& .MuiFormLabel-root": {
                color: theme.palette.text.primary
            },
            fill: theme.palette.text.primary
        },
        inputLabelStyle: {
            color: theme.palette.text.primary
        }
    }
));


interface DreamFormProps {

}

export const DreamForm: React.FC<DreamFormProps> = (props) => {
    const classes = useStyles();
    init("user_cj6HL59j1sB0doOAAkpof");

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [moreInfo, setMoreInfo] = useState("")
    const [amt, setAmt] = useState("")
    const [submitted, setSubmitted] = useState(false)


    const handleDateChange = (date: any) => {
        setDate(date)
    }

    const onSubmitForm = (formData: any) => {
        if (validate(email, name).length === 0) {
            setSubmitted(true)
            emailjs.send("testemail","template_jtobqor",{
                from_name: name,
                email: email,
                tour_date: date,
                tourist_count: amt,
                extra_info: moreInfo,
            }).then(x => {
                console.log("Mail sent")
            });
        } else {
            validate(email, name).forEach(x => {
                toast.error(x, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
        }

    }

    const validateEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validate = (email: string, name: string) => {
        let errors = []

        if (!email)
            errors.push("Email is required")

        if (email && !validateEmail(email))
            errors.push("Email is invalid")

        if (!name)
            errors.push("Name is required")

        return errors
    }


    if (submitted) {
        return (
            <Grid item container xs={12}>
                <FormOk/>
            </Grid>
        )
    } else {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <FormControl onSubmit={onSubmitForm}>
                    <form>

                    <Grid item container xs={12}>
                        <Grid item xs={12} className={classes.formSpacing}>
                            <TextInput label={"Name"} onChange={e => setName(e.target.value)} autocomplete={"name"}/>
                        </Grid>
                        <Grid item xs={12} className={classes.formSpacing}>
                            <TextInput label={"Email"} onChange={e => setEmail(e.target.value)} autocomplete={"email"}/>
                        </Grid>
                        <Grid item container xs={12} className={classes.formSpacing}>
                            <Grid item xs={5} md={6}>
                                <CustomDateInput
                                    onChange={handleDateChange}
                                />
                            </Grid>
                            <Grid item xs={7} md={6}>
                                <AmountPicker onAmountChanged={setAmt}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.formSpacing}>
                            <Typography color={"secondary"} variant={"subtitle2"}>
                                What do you have in mind?
                            </Typography>
                            <br/>
                            <TextareaAutosize aria-label="minimum height" rowsMin={6} className={classes.textArea} onChange={e => setMoreInfo(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12}>
                            <CtaButton style={{marginTop: "2rem", width: '40%'}} onClick={onSubmitForm}>
                                Send
                            </CtaButton>
                        </Grid>
                    </Grid>
                    </form>

                </FormControl>

            </MuiPickersUtilsProvider>
        )
    }


}