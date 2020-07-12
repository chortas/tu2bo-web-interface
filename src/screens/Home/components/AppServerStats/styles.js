import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '50px',
    margin: theme.spacing(1),
  },
  titleParams: {
    fontSize: '20px',
  },
  grid: {
    margin: '50px',
    marginTop: theme.spacing(1),
    padding: theme.spacing(3),
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
}));

export default useStyles;
