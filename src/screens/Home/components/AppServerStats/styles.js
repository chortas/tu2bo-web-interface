import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '50px',
    margin: theme.spacing(1),
  },
  plotContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  params: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  titleParams: {
    fontSize: '20px',
  },
  param: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  grid: {
    margin: '50px',
    marginTop: theme.spacing(1),
    padding: theme.spacing(3),
  },
  titleVideos: {
    marginTop: theme.spacing(8),
    color: red[700],
    fontSize: 20,
    fontWeight: 500,
  },
}));

export default useStyles;
