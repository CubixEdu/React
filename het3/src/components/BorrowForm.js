import Paper from "@mui/material/Paper";
import {Button, Grid, TextField} from "@mui/material";


export function BorrowForm() {
    return (
        <Paper>
            <Grid container spacing={2} padding={2}>
                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={6}>
                        <TextField label="Eqipment" fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Taken by" fullWidth/>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Subject" fullWidth/>
                </Grid>
                <Grid item container spacing={2}>
                    <Grid item xs={6}>
                        <Button fullWidth variant="contained">Borrow</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button fullWidth variant="contained" color="error">Cancel</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}