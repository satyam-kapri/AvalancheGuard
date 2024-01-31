import { TextField } from '@mui/material'
import * as React from 'react';
import '../css/bottom.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Bottom() {
  const [Region, setRegion] = React.useState('');

  const handleChange = (event) => {
    setRegion(event.target.value);
  };
  return (
    <div className='bottom'>
      <span>Local Emergency Nos.</span>
      <br></br>
      <div>
      <div>
     
      <FormControl sx={{width:'350px'}}>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Region}
          label="Region"
          onChange={handleChange}
        >
          <MenuItem value={10}>Nanda Devi</MenuItem>
          <MenuItem value={20}>Kedarnath</MenuItem>
          <MenuItem value={30}>Gangotri</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div>
      <span>Contacts: </span>
      <span>+91 9999999999</span>
      </div>
      </div>
    </div>
  )
}

export default Bottom
