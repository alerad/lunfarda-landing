import React, {useState} from "react"
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {members, TeamMemberSelector} from "./TeamMemberSelector";
import {TeamMember} from "./TeamVisualizeComponent";

const useStyles = makeStyles(theme => (
    {
        root: {
            margin: '4rem 0'
        },
        circledImage: {
            backgroundSize: '100% 100%!important',
            borderRadius: '5rem',
            minHeight: '9rem',
            maxWidth: '9rem'
        },
        panelContent: {
            marginTop: '3rem'
        },
        defaultPaddingTop: {
            marginTop: '2rem'
        }
    }
));


interface TeamMemberViewProps {

}

export const TeamMemberView: React.FC<TeamMemberViewProps> = (props) => {
    const classes = useStyles();
    const [currentMember, setCurrentMember] = useState(members[0])

    const onChange = (member: TeamMember) => {
        setCurrentMember(member)
    }

    const text = currentMember.description.replace(/\n/g, '<br/>')

    return (
        <Grid item container xs={12} className={classes.root}>
            <Grid item container xs={12}>
                <TeamMemberSelector onChange={onChange}/>
            </Grid>
            <Grid item container xs={12} className={classes.panelContent} alignItems={"center"}>
                <Grid item xs={12} md={6}>
                    <LeftPanel member={currentMember}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid item xs={12}>
                        <Typography variant={"body1"} style={{color:'black'}} dangerouslySetInnerHTML={{__html: text}}>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}

const LeftPanel = (props: any) => {
    const classes = useStyles()
    return (
        <Grid item container xs={12} justify={"center"}>
            <Grid item xs={12}>
                <CircledImage src={props.member.image}/>
            </Grid>
            <Grid item xs={12} className={classes.defaultPaddingTop}>
                <Typography variant={"h3"} color={"textSecondary"}>
                    {props.member.name}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={"h3"} color={"textSecondary"}>
                    {props.member.role}
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.defaultPaddingTop}>
                <Typography variant={"body1"} style={{color: 'black'}}>
                    {props.member.bio}
                </Typography>
            </Grid>
        </Grid>
    )
}


interface CircledImageProps {
    src: string
}

const CircledImage = (props: CircledImageProps)  => {
    const classes = useStyles()


    const style = {
        background: "url('"+props.src+"') no-repeat center",
        margin: 'auto'
    }

    return (
        <div className={classes.circledImage} style={style}>

        </div>
    )
}