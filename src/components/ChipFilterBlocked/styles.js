import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: '50px',
    marginLeft: '35px',
  },
  chipSelected: {
    backgroundColor: '#d32f2f !important',
    color: '#fff !important',
    borderColor: '#d32f2f !important',
    marginLeft: '10px',
    fontSize: '17px !important',
  },
  chipNotSelected: {
    color: '#d32f2f !important',
    borderColor: '#d32f2f !important',
    marginLeft: '10px',
    fontSize: '17px !important',
  },
}));

export default useStyles;
