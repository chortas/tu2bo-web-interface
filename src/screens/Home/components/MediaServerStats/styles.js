import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '50px',
  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(7),
  },
}));

export default useStyles;
