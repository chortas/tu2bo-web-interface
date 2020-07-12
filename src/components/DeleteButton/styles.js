import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.getContrastText(red[700]),
    backgroundColor: red[700],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  option: {
    color: red[700],
  },
}));

export default useStyles;
