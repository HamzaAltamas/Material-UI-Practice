import { Delete } from "@mui/icons-material";
import {
  Avatar,
  Fab,
  IconButton,
  Modal,
  Tooltip,
  Typography,
  styled,
  TextField,
  Button,
  ButtonGroup,
  Stack,
} from "@mui/material";
import React from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { Box } from "@mui/system";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ImageIcon from "@mui/icons-material/Image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,

  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: "3%",
          left: { xs: "calc(50% - 25px)", sm: "3%" },
        }}
        onClick={handleOpen}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} bgcolor={"background.default"} color={"text.primary"}>
          <Typography
            id="modal-modal-title"
            color="gray"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Create Post
          </Typography>
          <Box display="flex" columnGap="5px" alignItems="center">
            <Avatar
              sx={{ width: 35, height: 35 }}
              alt="Hamza Altamas"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFNCdQXR0PEAg/profile-displayphoto-shrink_200_200/0/1649796568748?e=1675296000&v=beta&t=tRJGHfqGZdibXNPO402O7d0VG7bQ9SFFCOQ_iRSH-U8"
            />
            <Typography variant="span" fontWeight="bold">
              Hamza Altamas
            </Typography>
          </Box>
          <TextField
            id="standard-basic"
            label="Write Something..."
            sx={{ marginTop: "30px", width: "100%" }}
          />
          <Stack direction="row" spacing={1} marginTop="10px">
            <LocationOnIcon color="primary" />
            <CameraAltIcon color="success" />
            <ImageIcon color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
            sx={{ marginTop: "10px" }}
          >
            <Button sx={{ width: "80%" }}>Post</Button>
            <Button sx={{ width: "20%" }}>
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
