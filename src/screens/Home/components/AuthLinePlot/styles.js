import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    margin: '0 auto',
    padding: '50px',
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
}));

export default useStyles;
