import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import ReceiveButton from './ReceiveButton';

function createData(coin, holding, value, price, actions) {
  return {coin, holding, value, price, actions};
}


const rows = [
  createData('Bitcoin', 'BTC 0.00256', '$0.5268', '$1.2586'),
  createData('Ethereum', 'ETH 0.00256', '$0.5268', '$1.2586'),
  createData('Binance', 'BNB 0.000256', '$0.5268', '$1.2586'),
  createData('Bitcoin', 'BTC 0.00256', '$0.5268', '$1.2586'),
  createData('Ethereum', 'ETH 0.00256', '$0.5268', '$1.2586'),
  createData('Binance', 'BNB 0.000256', '$0.5268', '$1.2586'),
  createData('Bitcoin', 'BTC 0.00256', '$0.5268', '$1.2586'),
  createData('Ethereum', 'ETH 0.00256', '$0.5268', '$1.2586'),
  createData('Binance', 'BNB 0.000256', '$0.5268', '$1.2586'),
  createData('Bitcoin', 'BTC 0.00256', '$0.5268', '$1.2586'),
  createData('Ethereum', 'ETH 0.00256', '$0.5268', '$1.2586'),
  createData('Binance', 'BNB 0.000256', '$0.5268', '$1.2586'),
  createData('Bitcoin', 'BTC 0.00256', '$0.5268', '$1.2586'),
  createData('Ethereum', 'ETH 0.00256', '$0.5268', '$1.2586'),
  createData('Binance', 'BNB 0.000256', '$0.5268', '$1.2586'),
  createData('Bitcoin', 'BTC 0.00256', '$0.5268', '$1.2586'),
  createData('Ethereum', 'ETH 0.00256', '$0.5268', '$1.2586'),
  createData('Binance', 'BNB 0.000256', '$0.5268', '$1.2586'),
  createData('Bitcoin', 'BTC 0.00256', '$0.5268', '$1.2586'),
  createData('Ethereum', 'ETH 0.00256', '$0.5268', '$1.2586'),
  createData('Binance', 'BNB 0.000256', '$0.5268', '$1.2586'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'coin', numeric: false, disablePadding: true, label: 'Coin' },
  { id: 'holding', numeric: true, disablePadding: false, label: 'Holding' },
  { id: 'value', numeric: true, disablePadding: false, label: 'Value' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'actions', numeric: true, disablePadding: false, label: 'Actions' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
            style={{color: "#FFF"}}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            style={{color: "#FFF"}}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              style={{color: "#FFF"}}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    color: "#FFF"
  },
  highlight: {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
    },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Wallet
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" style={{color: "#FFF"}}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list" style={{color: "#FFF"}}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    background: "#0a1018",
    color: "#FFF"
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

function MainTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevatoin={0} variant="outlined">
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody style={{color: "#FFF"}}>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      style={{color: "#FFF"}}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          style={{color: "#FFF"}}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell style={{color: "#FFF"}} component="th" id={labelId} scope="row" padding="none">
                        {row.coin}
                      </TableCell>
                      <TableCell style={{color: "#FFF"}} align="right">{row.value}</TableCell>
                      <TableCell style={{color: "#FFF"}} align="right">{row.holding}</TableCell>
                      <TableCell style={{color: "#FFF"}} align="right">{row.price}</TableCell>
                      <TableCell style={{color: "#FFF"}} align="right">
                          <ReceiveButton />  
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          style={{color: "#FFF"}}
        />
      </Paper>
    </div>
  );
}

const theme = createMuiTheme({
    palette: {
      palette: {
        type: 'dark',
      },
      primary: {
        main: "#0a1018",
      },
      secondary: {
        main: "#DAA107",
      },
    },
});

export default function CustomStyles() {
    return (
      <ThemeProvider theme={theme}>
        <MainTable />
      </ThemeProvider>
    );
  }