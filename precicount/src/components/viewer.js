import React from 'react';
import PanZoom from 'react-image-leaflet';
import EventListener from 'react-event-listener';
import Typography from "./album";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
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

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
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
    const [url, setUrl] = React.useState('https://source.unsplash.com/random');

    return (
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
    );
};
