import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, Stack } from "@mui/system";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 1px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  columnGap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  columnGap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Input = styled(InputBase)(({ theme }) => ({
  padding: "0px 5px",
}));

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Stack alignItems="center">
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              facebook
            </Typography>
            <Typography
              variant="h6"
              sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}
            >
              <FacebookIcon color="white" />
            </Typography>
          </Stack>
          <Search>
            <Input placeholder="Search" />
          </Search>
          <Icons>
            <Badge badgeContent={"99+"} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={"99+"} color="error">
              <Notifications />
            </Badge>
            <Avatar
              onClick={() => setOpen((prev) => !prev)}
              sx={{ width: 25, height: 25 }}
              alt="Hamza Altamas"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFNCdQXR0PEAg/profile-displayphoto-shrink_200_200/0/1649796568748?e=1675296000&v=beta&t=tRJGHfqGZdibXNPO402O7d0VG7bQ9SFFCOQ_iRSH-U8"
            />
          </Icons>
          <UserBox>
            <Avatar
              onClick={() => setOpen((prev) => !prev)}
              sx={{ width: 25, height: 25 }}
              alt="Hamza Altamas"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFNCdQXR0PEAg/profile-displayphoto-shrink_200_200/0/1649796568748?e=1675296000&v=beta&t=tRJGHfqGZdibXNPO402O7d0VG7bQ9SFFCOQ_iRSH-U8"
            />
            <Typography variant="p">Hamza</Typography>
          </UserBox>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={() => setOpen(false)}
            // onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
