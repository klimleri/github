import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    card: {
        borderRadius: 0,
        boxShadow: 'none',
    },
    header: {
        padding: '20px 30px'
    },
}));

export default function Loader(props) {
    const { length } = props;
    const classes = useStyles();

    return (
        Array.apply(null, { length: length }).map((e, i) => (
            <Card key={i} className={classes.card}>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Skeleton animation="wave" variant="circle" width={80} height={80} />
                    }
                    title={
                        <Skeleton animation="wave" height={15} width="90%" style={{ marginBottom: 6 }} />
                    }
                    subheader={<Skeleton animation="wave" height={10} width="60%" />}
                />
            </Card>
        ))
    );
}
