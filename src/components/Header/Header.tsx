import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/icon.png";
import s from "../Header/Header.module.css";
import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  "@media all": {
    minHeight: 90,
  },
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar variant="regular" className={s.header}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="App logo" className={s.img} />
          <Typography variant="h5" color="inherit" component="div">
            <div className={s.text}>Learn languages</div>
          </Typography>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
