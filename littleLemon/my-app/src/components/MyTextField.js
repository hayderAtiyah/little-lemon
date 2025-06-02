import { styled } from "@mui/material/styles";
import { collapseClasses, TextField } from "@mui/material";

const MyTextField = styled(TextField)(({ theme }) => ({
  width: "50%",

  marginBottom: theme.spacing(0),
  "& .MuiInputBase-root": {
    backgroundColor: "#ffffff",
  },
  "& .MuiFilledInput-root:hover , & .MuiFilledInput-root.Mui-focused": {
    backgroundColor: "#F4CE14",
    color: "#000000",
  },

  "& .MuiInputLabel-root": {
    color: "#000000",
  },

  "& .MuiFilledInput-underline": {
    "&:before": {
      borderBottomColor: "#000000",
    },
    "&:after": {
      borderBottomColor: "#ffffff",
      borderBottomWidth: 5,
    },
  },
}));

MyTextField.defaultProps = {
  variant: "filled",
  color: "secondary",
};

export default MyTextField;
