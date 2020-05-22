import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

export default function ErrorBoundary() {
    return (
        <Alert severity="error">
            <AlertTitle>Oops, something went wrong</AlertTitle>
            Please try again later.
        </Alert>
    )
}