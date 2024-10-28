import './App.css';
import {Container, Grid, Stack} from "@mui/material";
import {EquipmentTable} from "./components/EquipmentTable";
import {BorrowForm} from "./components/BorrowForm";
import {PostList} from "./components/PostList";

function App() {
  return (
      <Container sx={{mt: 2}}>
          <Grid container spacing={2}>
              <Grid item xs={12} lg={8} spacing={2}>
                  <Stack spacing={2}>
                      <EquipmentTable />
                      <BorrowForm />
                  </Stack>
              </Grid>
              <Grid item xs={12} lg={4}>
                <PostList />
              </Grid>
          </Grid>
      </Container>
  );
}

export default App;
