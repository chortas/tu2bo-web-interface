import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(() => ({
  plotContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  params: {
    marginTop: '20px',
    marginRight: '30px',
    display: 'flex',
    flexDirection: 'column',
  },
  titleParams: {
    fontSize: '20px',
  },
  param: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
  },
  circularProgress: {
    color: red[700],
    marginLeft: '50px',
  },
}));

export default useStyles;
