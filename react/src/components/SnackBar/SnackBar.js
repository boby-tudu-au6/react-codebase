import React from 'react'
import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { HIDE_SNACK } from 'action';

function SnackBar() {
    const dispatch = useDispatch();
    const { show, severity, text } = useSelector(state => state.snack);
    console.log()
    return (
        <Snackbar open={show} autoHideDuration={6000} onClose={() => dispatch({ type: HIDE_SNACK })}>
            <Alert severity={severity} onClose={() => dispatch({ type: HIDE_SNACK })} variant="filled">
                {text}
            </Alert>
        </Snackbar>
    )
}

export default SnackBar
