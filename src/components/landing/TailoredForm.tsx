import React, {useState} from "react"
import {
    ClickAwayListener,
    FormControlLabel,
    Grid,
    Hidden,
    Modal,
    Radio,
    RadioGroup,
    Slider,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {TextInput} from "../forms/TextInput";
import {CustomDateInput} from "../CustomDateInput";
import {CustomCheckbox} from "../forms/CustomCheckbox";
import {AmountPicker} from "./dream-vacation/AmountPicker";
import {CtaButton} from "../CtaButton";
import CloseIcon from '@material-ui/icons/Close';
import emailjs, {init} from "emailjs-com";
import {FormOk} from "../forms/FormOk";
import {toast} from "react-toastify";

const useStyles = makeStyles(theme => (
    {
        root: {
            backgroundColor: 'black',
            padding: '1rem'
        },
        checkbox: {
            color: theme.palette.neutralText.secondary
        },
        defaultPad: {
            padding: '1rem 0'
        }
    }
));


interface TailoredFormProps {
    open: boolean,
    close: () => void
}

type TripKind = {
    solo: boolean,
    couples: boolean,
    family: boolean,
    friends: boolean,
    business: boolean,
    [key: string]: boolean
}

type TailoredFormData = {
    checkedDate: boolean,
    firstTime: string,
    visitOtherParts: string,
    email: string,
    from_name: string,
    extra_data: string
};

interface TravelerLikes {
    history: boolean;
    food: boolean;
    music: boolean;
    museums: boolean;
    art: boolean;
    architecture: boolean;
    nature: boolean;
    shopping: boolean;
    jewishHeritage: boolean;
    sports: boolean;
    other: string;
    [key: string]: string|boolean;
}

interface EmailData {
    email: string,
    from_name: string,
    tourist_count: string,
    traveler_likes: string,
    trip_kind: string,
    extra_data: string,
    intensity: number,
    date: string,
    [key: string]: string|number
}

export const TailoredForm: React.FC<TailoredFormProps> = (props) => {
    const classes = useStyles();
    init("user_cj6HL59j1sB0doOAAkpof");

    const [selectedDate, setDate] = useState(new Date());


    const [state, setState] = React.useState<TailoredFormData>({
        checkedDate: false,
        firstTime: "Yes",
        visitOtherParts: "",
        email: "",
        from_name: "",
        extra_data: ""
    });

    const [amt, setAmt] = useState("")


    const [tripKind, setTripKind] =  React.useState<TripKind>({
        solo: false,
        couples: false,
        family: false,
        friends: false,
        business: false
    })

    const [likes, setLikes] =  React.useState<TravelerLikes>({
        history: false,
        food: false,
        music: false,
        museums: false,
        art: false,
        architecture: false,
        nature: false,
        shopping: false,
        jewishHeritage: false,
        sports: false,
        other: ""
    })

    const [submitted, setSubmitted] = React.useState(false)

    const [tripIntensity, setTripIntensity] = React.useState(0.5)

    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleTextChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const handleTripKindChange = (event: any) => {
        setTripKind({ ...tripKind, [event.target.name]: event.target.checked });
    };

    const handleLikesChange = (event: any) => {
        setLikes({ ...likes, [event.target.name]: event.target.checked });
    };

    const handleRadioChange = (event: any) => {
        setState({...state, [event.target.name]: event.target.value})
    }

    const handleIntensityChange = (event: any, newValue: any) => {
        setTripIntensity(newValue);
        console.log("Intensity " + tripIntensity)
    };

    const handleClickAway = () => {
        props.close();
    };

    const createEmailData = () => {
        // @ts-ignore
        var data : EmailData = {
            from_name: state.from_name,
            email: state.email,
            tourist_count: amt,
            traveler_likes: Object.keys(likes).filter(x => likes[x] === true).toString(),
            trip_kind: Object.keys(tripKind).filter(x => tripKind[x]).toString(),
            extra_info: state.extra_data,
            intensity: tripIntensity,
            date: selectedDate.toString()
        }
        return data;
    }

    const onSubmit = () => {
        if (validate(state.email, state.from_name).length === 0) {
            setSubmitted(true)
            emailjs.send("testemail","template_xl313hl", createEmailData()).then(x => {
                console.log("Mail sent")
            });
        } else {
            validate(state.email, state.from_name).forEach(x => {
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

    const SetDateInput = () => {
        if (state.checkedDate) {
            return (<React.Fragment/>)
        } else {
            return (
                <div className={classes.defaultPad}>
                    <CustomDateInput onChange={setDate}/>
                </div>
            )
        }
    }

    if (submitted) {
        return (
            <Grid item container xs={12} justify={"center"} alignItems={"center"}>
                <Modal
                    open={props.open}
                    onClose={props.close}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    style={{overflow: 'scroll'}}
                >
                    <Grid item container xs={12} justify={"center"} alignItems={"center"}>
                        <Grid item container xs={10} className={classes.root} spacing={4}>
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <Grid item container xs={12}>
                                    <FormOk/>
                                </Grid>
                            </ClickAwayListener>
                        </Grid>
                    </Grid>
                </Modal>
            </Grid>
        )
    } else {
        return (
            <Grid item container xs={12} justify={"center"} alignItems={"center"}>
                <Modal
                    open={props.open}
                    onClose={props.close}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    style={{overflow: 'scroll'}}
                >
                    <Grid item container xs={12} justify={"center"} alignItems={"center"}>
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <Grid item container xs={10} md={6} className={classes.root} spacing={4}>
                                <Grid item xs={10}>
                                    <Typography variant={"h2"} color={"secondary"}>
                                        You ask, we tailor.
                                    </Typography>
                                    <Typography variant={"body1"} color={"secondary"}>
                                        Tell us about your dream vacation and we’ll craft something unique.
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <CloseIcon
                                        style={{width: '100%', color: 'white', textAlign: "center", fontSize: '50px'}}
                                        onClick={handleClickAway}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormSeparator/>
                                </Grid>
                                <Grid item sm={12} md={6}>
                                    <TextInput label={"Name"} name={"from_name"} onChange={handleTextChange}/>
                                </Grid>
                                <Grid item sm={12} md={6}>
                                    <TextInput label={"Email"} name={"email"} onChange={handleTextChange}/>
                                </Grid>
                                <Grid item sm={12} md={6}>
                                    <Typography color={"secondary"} variant={"h4"}>
                                        Date of travel
                                    </Typography>
                                    <SetDateInput/>
                                    <FormControlLabel
                                        control={<CustomCheckbox checked={state.checkedDate} onChange={handleChange}
                                                                 name={"checkedDate"}/>}
                                        label="I still don't have a date"
                                        className={classes.checkbox}
                                    />
                                </Grid>
                                <Grid item sm={12} md={6}>
                                    <Typography color={"secondary"}>
                                        Is this your first time in Buenos Aires?
                                    </Typography>

                                    <RadioGroup aria-label="gender" name="firstTime" value={state.firstTime}
                                                onChange={handleRadioChange} row className={classes.defaultPad}>
                                        <FormControlLabel value={"Yes"} control={<Radio/>} label="Yes"/>
                                        <FormControlLabel value={"No"} control={<Radio/>} label="No"/>
                                    </RadioGroup>

                                </Grid>
                                <Grid item xs={12}>
                                    <FormSeparator/>
                                </Grid>
                                <Grid item container xs={12} md={6}>
                                    <Grid item xs={12}>
                                        <Typography variant={"h4"} color={"secondary"}>
                                            Kind of trip
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.defaultPad}>
                                        <FormControlLabel value={"Solo"}
                                                          control={<CustomCheckbox checked={tripKind.solo}
                                                                                   onChange={handleTripKindChange}
                                                                                   name={"solo"}/>} label="Solo"/>
                                        <FormControlLabel value={"Couples"}
                                                          control={<CustomCheckbox checked={tripKind.couples}
                                                                                   onChange={handleTripKindChange}
                                                                                   name={"couples"}/>} label="Couples"/>
                                        <FormControlLabel value={"Family"}
                                                          control={<CustomCheckbox checked={tripKind.family}
                                                                                   onChange={handleTripKindChange}
                                                                                   name={"family"}/>} label="Family"/>
                                        <FormControlLabel value={"Friends"}
                                                          control={<CustomCheckbox checked={tripKind.friends}
                                                                                   onChange={handleTripKindChange}
                                                                                   name={"friends"}/>} label="Friends"/>
                                        <FormControlLabel value={"Business"}
                                                          control={<CustomCheckbox checked={tripKind.business}
                                                                                   onChange={handleTripKindChange}
                                                                                   name={"business"}/>}
                                                          label="Business"/>
                                    </Grid>
                                </Grid>

                                <Grid item container xs={12} md={6}>
                                    <Grid item xs={12}>
                                        <Typography variant={"h4"} color={"secondary"}>
                                            Amount of travelers
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.defaultPad}>
                                        <AmountPicker onAmountChanged={setAmt}/>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormSeparator/>
                                </Grid>

                                <Grid item container xs={12}>
                                    <Grid item xs={12}>
                                        <Typography variant={"h4"} color={"secondary"}>
                                            I like
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.defaultPad}>
                                        <FormControlLabel value={"History"}
                                                          control={<CustomCheckbox checked={likes.history}
                                                                                   onChange={handleLikesChange}
                                                                                   name={"history"}/>} label="History"/>
                                        <FormControlLabel value={"Museums"}
                                                          control={<CustomCheckbox checked={likes.museums}
                                                                                   onChange={handleLikesChange}
                                                                                   name={"museums"}/>} label="Museums"/>
                                        <FormControlLabel value={"Nature"}
                                                          control={<CustomCheckbox checked={likes.nature}
                                                                                   onChange={handleLikesChange}
                                                                                   name={"nature"}/>} label="Nature"/>
                                        <FormControlLabel value={"Sports"}
                                                          control={<CustomCheckbox checked={likes.sports}
                                                                                   onChange={handleLikesChange}
                                                                                   name={"sports"}/>} label="Sports"/>
                                        <FormControlLabel value={"Food"} control={<CustomCheckbox checked={likes.food}
                                                                                                  onChange={handleLikesChange}
                                                                                                  name={"food"}/>}
                                                          label="Food"/>
                                        <FormControlLabel value={"Art"} control={<CustomCheckbox checked={likes.art}
                                                                                                 onChange={handleLikesChange}
                                                                                                 name={"art"}/>}
                                                          label="Art"/>
                                        <FormControlLabel value={"Shopping"}
                                                          control={<CustomCheckbox checked={likes.shopping}
                                                                                   onChange={handleLikesChange}
                                                                                   name={"shopping"}/>}
                                                          label="Shopping"/>
                                        <FormControlLabel value={"Music"} control={<CustomCheckbox checked={likes.music}
                                                                                                   onChange={handleLikesChange}
                                                                                                   name={"music"}/>}
                                                          label="Music"/>
                                        <FormControlLabel value={"Architecture"}
                                                          control={<CustomCheckbox checked={likes.architecture}
                                                                                   onChange={handleLikesChange}
                                                                                   name={"architecture"}/>}
                                                          label="Architecture"/>
                                        <FormControlLabel value={"Jewish Heritage"}
                                                          control={<CustomCheckbox checked={likes.jewishHeritage}
                                                                                   onChange={handleLikesChange}
                                                                                   name={"jewishHeritage"}/>}
                                                          label="Jewish Heritage"/>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormSeparator/>
                                </Grid>

                                <Grid item container xs={12} style={{textAlign: 'center'}}>
                                    <Grid item xs={12} style={{marginBottom: '2rem'}}>
                                        <Typography variant={"h4"} color={"secondary"} style={{textAlign: 'left'}}>
                                            I want my trip to be
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant={"h4"} color={"secondary"}>
                                            Laid back
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant={"h4"} color={"secondary"}>
                                            Somewhat active
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography variant={"h5"} color={"secondary"}>
                                            Very active
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.defaultPad}>
                                        <Slider value={tripIntensity} onChange={handleIntensityChange}
                                                aria-labelledby="continuous-slider"/>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormSeparator/>
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography color={"secondary"} variant={"h4"}>
                                        Do you want to visit other parts of Argentina?
                                    </Typography>

                                    <RadioGroup aria-label="gender" name="visitOtherParts" value={state.visitOtherParts}
                                                onChange={handleRadioChange} row className={classes.defaultPad}>
                                        <FormControlLabel value={"Yes"} control={<Radio/>} label="Yes"/>
                                        <FormControlLabel value={"No"} control={<Radio/>} label="No"/>
                                    </RadioGroup>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormSeparator/>
                                </Grid>

                                <Grid item container sm={12} md={6}>
                                    <Typography color={"secondary"} variant={"h4"}>
                                        Something else you would like us to know?
                                    </Typography>
                                    <Grid item xs={12} className={classes.defaultPad}>
                                        <TextInput label={""} name={"extra_data"} onChange={handleTextChange}/>
                                    </Grid>
                                </Grid>

                                <Hidden smDown>
                                    <Grid item container md={6} justify={"center"} alignItems={"center"}>
                                        <Grid item xs style={{textAlign: 'center'}}>
                                            {/*<img src={lunfardaLogo} alt={"Lunfarda Logo"}/>*/}
                                        </Grid>
                                    </Grid>
                                </Hidden>

                                <Grid item container xs={12}>
                                    <Grid item xs={6}>
                                        <CtaButton onClick={onSubmit}>
                                            Send
                                        </CtaButton>
                                    </Grid>
                                </Grid>


                            </Grid>
                        </ClickAwayListener>
                    </Grid>
                </Modal>
            </Grid>
        )
    }
}

const FormSeparator = () => {
    const style = {
        dottedLine: {
            width: '100%',
            border: 'none',
            height: '1px',
            margin: '0.7rem 0rem',
            backgroundImage: 'linear-gradient(to right, #f1ca12 33%, rgba(255,255,255,0) 0%)',
            backgroundSize: '8px 1px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: 'bottom'
        }
    }
    return (
        <div style={style.dottedLine}/>
    )
}
