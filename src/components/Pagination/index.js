import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { changePage } from '../../actions/index';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 35,
        display: 'flex',
        justifyContent: 'center',
        '& button': {
            fontSize: 16,
            borderColor: 'transparent',
        },
    },
}));

function PaginationRanges(props) {
    const { count, perPage, dispatch, pages } = props;
    const classes = useStyles();

    const value = Math.ceil(count/perPage);

    const handleChange = (event, page) => {
        dispatch(changePage(page));
    };

    return (
        <div className={classes.root}>
            <Pagination
                count={value}
                page={pages}
                hideNextButton
                hidePrevButton
                variant="outlined"
                onChange={handleChange}
            />
        </div>
    );
}

const mapStateToProps = state => ({
    pages: state.pages,
});

export default connect(mapStateToProps)(PaginationRanges);