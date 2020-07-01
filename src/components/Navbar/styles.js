import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: '30px',
    justifyContent: 'space-between',
    backgroundColor: '#d32f2f',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    color: '#fff',
    backgroundColor: '#d32f2f',
  },
}));

export default useStyles;
