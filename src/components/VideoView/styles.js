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
    paddingLeft: '10px',
    marginLeft: '10px',
    width: '30px',
    height: '30px',
  },
  card: {
    margin: '20px',
    width: '320px',
    height: '350px',
  },
  cardMedia: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '320px',
    height: '200px',
    padding: '20px',
  },
  button: {
    color: theme.palette.getContrastText(red[700]),
    backgroundColor: red[700],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  circularProgress: {
    color: red[700],
  },
}));

export default useStyles;
