import React from 'react';

import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import BoundingBox from './BoundingBox';
import GVisionResults from './GVisionResults';
import ImsearchResults from './ImsearchResults';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        height: '100%'
    },
    content: {
        display: 'flex',
        overflowY: 'hidden',
        paddingTop: theme.spacing(0.5)
    }
}));


export default ({ data }) => {
    const classes = useStyles();
    const visionData = data.googleVisionResults;
    const imsearchData = data.imsearchResults;
    const handleClick = (clickedObject) => {
        console.log(clickedObject.name);
    }

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Grid item md={3} sm={6}>
                        <BoundingBox url={data.url} objects={data.objects} clickHandler={handleClick} />
                    </Grid>
                    <Grid item md={9} sm={12}>
                        <ExpansionPanel defaultExpanded={true}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography component="h1" variant="h5">Google Vision Results</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <GVisionResults data={visionData} />
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel defaultExpanded={true}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography component="h1" variant="h5">imSearch Results</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <ImsearchResults data={imsearchData} />
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    </Grid>
            </main>
        </div>
    );
}