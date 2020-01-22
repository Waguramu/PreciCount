import React from 'react';
import PanZoom from 'react-image-leaflet';
import EventListener from 'react-event-listener';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Mail';
import Slider from '@material-ui/core/Slider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



const drawerWidth = 340;


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    icon: {
        marginRight: theme.spacing(2),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const wrapper = {
    margin: 0,
    padding: 0,
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const container = {
    width: '80%',
    height: '80%',
};

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 20,
        label: '20',
    },
    {
        value: 37,
        label: '80',
    },
    {
        value: 100,
        label: '100',
    },
];

function valuetext(value) {
    return `${value}%`;
}

function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
}

export default function Viewer() {
    // const classes = useStyles();
    // const [url, setUrl] = React.useState('https://source.unsplash.com/random');
    // const macOS = window.navigator.userAgent.includes('Mac OS X');
    // const attribution = '<a target="_blank" href="https://source.unsplash.com/">source.unsplash.com</a>';
    //
    // const preventDefault = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    // };
    //
    // const handleOnDrop = (e) => {
    //     preventDefault(e);
    //
    //     if (e.dataTransfer) {
    //         const file = e.dataTransfer.files[0];
    //         if (!file.type.match('image.*')) return;
    //
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             const img = new Image();
    //             img.src = reader.result;
    //
    //             setUrl(img.src);
    //         };
    //
    //         reader.readAsDataURL(file);
    //     }
    // };
    //
    // return (
    //     <React.Fragment>
    //         <div style={wrapper}>
    //             <div style={container}>
    //                 <EventListener
    //                     target='window'
    //                     onDragEnter={(e) => preventDefault(e)}
    //                     onDragOver={(e) => preventDefault(e)}
    //                     onDragLeave={(e) => preventDefault(e)}
    //                     onDrop={(e) => handleOnDrop(e)}
    //                 />
    //                 <PanZoom
    //                     url={url}
    //                     zoomSnap={macOS ? 0.3 : 0}
    //                     doubleClickReset={true}
    //                     getFocus={true}
    //                     attribution={attribution}
    //                 />
    //             </div>
    //         </div>
    //     </React.Fragment>
    // );
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const [url, setUrl] = React.useState('https://source.unsplash.com/random');

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <div style={wrapper}>
                    <div style={container}>
                        <div style={{ width: '80vw', height: '80vh' }}>
                            <PanZoom
                                url={url}
                                attribution='<a target="_blank" href="https://source.unsplash.com/">source.unsplash.com</a>'
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <div className={classes.toolbar} />
                <Typography variant="h3">
                    Result
                </Typography>
                <Divider />
                <Typography id="discrete-slider-always" gutterBottom>
                    Confidence
                </Typography>
                <Slider
                    defaultValue={80}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-always"
                    step={10}
                    marks={marks}
                    valueLabelDisplay="on"
                />
                <Divider />
                <FormGroup column>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange('checkedB')}
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Type 1"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange('checkedB')}
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Type 2"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange('checkedB')}
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Type 3"
                    />
                </FormGroup>
                <Divider />
                <List>
                    {['Export', 'Reconfigure'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MenuIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};
