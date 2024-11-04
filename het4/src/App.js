import './App.css';
import {Container} from "@mui/material";
import {Outlet} from "react-router-dom";

function App() {
  return (
   <Container sx={{mt: 2}}>
     <Outlet />
   </Container>
  );
}

export default App;
