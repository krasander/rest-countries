import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const regions = [
  'All regions',
  'Europe',
  'Americas',
  'Asia',
  'Oceania',
  'Africa',
  'Antarctic',
  'Polar'
];

export default function Regions({ allCountries, onRegionChange }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    const region = event.target.innerText
    let filteredCountries
    if (region === 'All regions') {
      filteredCountries = allCountries
    } else {
      filteredCountries = allCountries.filter(country => country.region === region)
    }
    
    onRegionChange(filteredCountries)
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Regions"
        sx={{ bgcolor: 'background.paper', width: 150 }}
      >
        <ListItem
          button
          id="button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="select region"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="Select region"
            secondary={regions[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {regions.map((region, index) => (
          <MenuItem
            key={region}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {region}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
