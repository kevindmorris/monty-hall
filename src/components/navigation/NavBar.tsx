import {
  AppBar,
  AppBarProps,
  Button,
  ButtonProps,
  Toolbar,
  ToolbarProps,
  alpha,
  styled
} from "@mui/material";
import { NavLink, NavLinkProps } from "react-router-dom";
import NavBarBrand from "./NavBarBrand";

const CustomAppBar = styled((props: AppBarProps) => (
  <AppBar position="sticky" elevation={0} {...props} />
))(({ theme }) => ({
  minHeight: 54,
  height: 54,
  maxHeight: 54,
  borderBottomStyle: "solid",
  borderBottomColor: theme.palette.divider,

  borderBottomWidth: "thin",
  borderRadius: 0,
  backgroundColor: alpha(theme.palette.background.paper, 0.2),
  backdropFilter: "blur(10px)",
  color: theme.palette.text.primary,
  zIndex: theme.zIndex.drawer - 1
}));
const CustomToolBar = styled((props: ToolbarProps) => (
  <Toolbar variant="dense" {...props} />
))(({ theme }) => ({
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: theme.spacing(2)
}));
const CustomButton = styled((props: ButtonProps & NavLinkProps) => (
  <Button color="inherit" component={NavLink} {...props} />
))(({ theme }) => ({
  padding: theme.spacing(1, 0.5),
  fontWeight: "bold",
  lineHeight: "100%",
  textTransform: "none"
}));

const NavigationBar = () => {
  return (
    <CustomAppBar>
      <CustomToolBar>
        <NavBarBrand />
        <CustomButton to="about">About</CustomButton>
      </CustomToolBar>
    </CustomAppBar>
  );
};

export default NavigationBar;
