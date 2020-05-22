import React from 'react';
import { navigate } from "@reach/router";
import { Avatar, Link, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';

const useStyles = makeStyles((theme) =>({
    root: {
        borderRadius: 34,
        color: 'black',
        fontSize: 12,
        borderColor: 'black',
        marginLeft: 'auto',
        transition: '.2s',
        '&:hover': {
            background: "#fff",
            color: '#3f51b5',
        }
    },
    avatar: {
        width: 80,
        height: 80,
        marginRight: 40,
        [theme.breakpoints.down('xs')]: {
            width: 60,
            height: 60,
            marginRight: 20,
        },
    },
    link: {
        color: 'black',
        fontSize: 16,
        fontWeight: 500,
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'none',
        },
    },
}));

export default function User(props) {
    const { avatar, login, url } = props;
    const classes = useStyles();

    const handleClick = function () {
        navigate(`${process.env.PUBLIC_URL}/${login}`);
    };

    return (
        <div className="User">
            <Link onClick={handleClick} className={classes.link}>
                <Avatar src={avatar} className={classes.avatar} />
            </Link>
            <Link onClick={handleClick} className={classes.link}>
                {login}
            </Link>
            <Button
                classes={{
                    root: classes.root,
                }}
                variant="outlined" color="primary" size="large"
                href={url} target="_blank"
            >
                Button
            </Button>
        </div>
    );
}
