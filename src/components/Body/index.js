import React from 'react';
import Loader from "../Loader";
import List from "../List";
import PaginationRanges from "../Pagination";

export default function Body(props) {
    const {isLoaded, count, perPage } = props;

    return (
        !isLoaded ?
            <Loader length={perPage} />
            :
            <>
                <List perPage={perPage} />
                <PaginationRanges count={count} perPage={perPage} />
            </>
    );
}
