import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0px',
    margin: theme.spacing(1),
  },
  titleParams: {
    fontSize: '20px',
  },
  grid: {
    margin: '50px',
    marginTop: theme.spacing(1),
  },
  titleVideos: {
    marginTop: theme.spacing(8),
    color: red[700],
    fontWeight: 500,
  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(7),
  },
  circularProgress: {
    marginLeft: '40px',
    marginTop: '25px',
    color: red[700],
  },
}));

export default useStyles;
