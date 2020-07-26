import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: '50px',
    marginLeft: '35px',
  },
  chipSelected: {
    backgroundColor: '#d32f2f !important',
    color: theme.palette.getContrastText(red[700]),
    borderColor: red[700],
    marginLeft: '10px',
    fontSize: '17px',
  },
  chipNotSelected: {
    color: red[700],
    borderColor: red[700],
    marginLeft: '10px',
    fontSize: '17px',
    backgroundColor: 'transparent !important',
  },
}));

export default useStyles;
