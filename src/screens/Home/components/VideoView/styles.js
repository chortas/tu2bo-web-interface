import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles((theme) => ({
  title: {
    color: red[700],
  },
  icon: {
    color: red[700],
    fontSize: '30px',
  },
  container: {
    marginLeft: '10px',
    width: '30px',
    height: '30px',
  },
  card: {
    marginBottom: '50px',
    width: '400px',
    height: '400px',
  },
  cardMedia: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '400px',
    height: '250px',
    padding: '40px',
  },
  button: {
    color: theme.palette.getContrastText(red[700]),
    backgroundColor: red[700],
    '&:hover': {
      backgroundColor: red[700],
    },
    marginRight: '10px',
  },
  circularProgress: {
    color: red[700],
  },
}));

export default useStyles;
