import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(() => ({
  chart: {
    width: '1000px',
    height: '500px',
    marginTop: '80px',
  },
  circularProgress: {
    color: red[700],
    marginLeft: '50px',
    marginTop: '50px',
  },
}));

export default useStyles;
