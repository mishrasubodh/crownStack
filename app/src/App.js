import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import './App.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(10),
  },
  table: {
    minWidth: 450,
  },
}));

function App() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [currency, setCurrency] = React.useState([]);

  useEffect(async () => {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=redux',
    );
    setData(result.data);
  });

  const handleChange = (event) => {
    setAge(event.target.value);
    axios.get(`https://api.exchangeratesapi.io/latest?base=USD`)
      .then(res => {
        const data = Object.entries(res.data.rates);
        const entries = data.map((val) => {
          return {
            currency: val[0],
            rate: val[1]
          }
        });
        setCurrency(entries);
      })
      .catch(err => {
        console.log(err);
      })
  };


  return (
    <div className="App">
      <div className={classes.selectEmpty}></div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <div className={classes.selectEmpty}></div>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currency.map((row) => (
            <TableRow key={row.currency}>
              <TableCell>{row.currency}</TableCell>
              <TableCell>{row.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default App;
