import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#000002",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#000002",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "grey",
    },
    "&:hover fieldset": {
      borderColor: "#0fe9ef",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000002",
    },
  },
});
