import React, { useCallback } from 'react';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import { debounce } from 'lodash';

export default function SearchBar({ fetchData, searchValue }) {
  const classes = useStyles();

  const search = useCallback(fetchData, [fetchData]);
  const handler = useCallback(debounce(search, 500), []);

  function onChange(event) {
    handler(event.target.value);
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onChange={onChange}
        placeholder={`Buscar por ${searchValue}`}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}
