import { makeStyles } from '@material-ui/core/styles';

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
    color: '#d32f2f !important',
    marginLeft: '50px',
  },
}));

export default useStyles;
