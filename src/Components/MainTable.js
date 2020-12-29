import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import MuiTableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Actions from './Actions';
import Bitcoin from './Bitcoin';
import Ethereum from './Ethereum';
import Binance from './Binance';

const TableCell = withStyles({
	root: {
		borderBottom: '8px solid #0a1018',
	},
})(MuiTableCell);

const HeadTableCell = withStyles({
	root: {
		borderBottom: '1px solid #0a1018',
	},
})(MuiTableCell);

function createData(coin, holding, value, price) {
	return { coin, holding, value, price };
}

const rows = [
	createData(<Bitcoin />, 'BTC 0.00256', 0.5268, 1.2586),
	createData(<Ethereum />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Binance />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Bitcoin />, 'BTC 0.00256', 0.5268, 1.2586),
	createData(<Ethereum />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Binance />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Bitcoin />, 'BTC 0.00256', 0.5268, 1.2586),
	createData(<Ethereum />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Binance />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Bitcoin />, 'BTC 0.00256', 0.5268, 1.2586),
	createData(<Ethereum />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Binance />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Bitcoin />, 'BTC 0.00256', 0.5268, 1.2586),
	createData(<Ethereum />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Binance />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Bitcoin />, 'BTC 0.00256', 0.5268, 1.2586),
	createData(<Ethereum />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Binance />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Bitcoin />, 'BTC 0.00256', 0.5268, 1.2586),
	createData(<Ethereum />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Binance />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Bitcoin />, 'BTC 0.00256', 0.5268, 1.2586),
	createData(<Ethereum />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Binance />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Bitcoin />, 'BTC 0.00256', 0.5268, 1.2586),
	createData(<Ethereum />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Binance />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Bitcoin />, 'BTC 0.00256', 0.5268, 1.2586),
	createData(<Ethereum />, 'ETH 0.00256', 0.5268, 1.2586),
	createData(<Binance />, 'ETH 0.00256', 0.5268, 1.2586),
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
	{
		id: 'coin',
		numeric: false,
		disablePadding: false,
		label: 'Coin',
	},
	{ id: 'holding', numeric: false, disablePadding: false, label: 'Holding' },
	{ id: 'value', numeric: true, disablePadding: false, label: 'Value' },
	{ id: 'price', numeric: true, disablePadding: false, label: 'Price' },
	{ id: 'protein', numeric: true, disablePadding: false, label: 'Action' },
];

function EnhancedTableHead(props) {
	const {
		classes,
		onSelectAllClick,
		order,
		orderBy,
		numSelected,
		rowCount,
		onRequestSort,
	} = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<HeadTableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'default'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							<Typography
								style={{ color: '#aaa', fontSize: '14px', fontWeight: 600 }}
							>
								{headCell.label}
							</Typography>
							{orderBy === headCell.id ? (
								<span className={classes.visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</span>
							) : null}
						</TableSortLabel>
					</HeadTableCell>
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
	},
	highlight: {
		color: theme.palette.text.primary,
		backgroundColor: theme.palette.secondary.dark,
	},
	title: {
		flex: '1 1 100%',
		color: '#C0996F',
	},
}));

const EnhancedTableToolbar = () => {
	const classes = useToolbarStyles();

	return (
		<Typography
			className={classes.title}
			variant="h4"
			id="tableTitle"
			component="div"
		>
			Wallet
		</Typography>
	);
};

EnhancedTableToolbar.propTypes = {
	numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	table: {
		width: '900px',
	},
	row: {
		background: '#161c23',
		borderRadius: '12px',
	},
	text: {
		textTransform: 'uppercase',
		fontWeight: 900,
		color: '#aaa',
		fontSize: '16px',
		marginTop: '8px',
		marginLeft: '8px',
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

export default function EnhancedTable() {
	const classes = useStyles();
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('calories');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

	const emptyRows =
		rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

	return (
		<div className={classes.root}>
			<EnhancedTableToolbar numSelected={selected.length} />
			<TableContainer>
				<Table
					className={classes.table}
					aria-labelledby="tableTitle"
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
					<TableBody>
						{stableSort(rows, getComparator(order, orderBy))
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row, index) => {
								const isItemSelected = isSelected(row.coin);
								const labelId = `enhanced-table-checkbox-${index}`;

								return (
									<TableRow
										hover
										onClick={(event) => handleClick(event, row.coin)}
										tabIndex={-1}
										key={row.coin}
										selected={isItemSelected}
										className={classes.row}
									>
										<TableCell
											component="th"
											id={labelId}
											scope="row"
											padding="none"
										>
											{row.coin}
										</TableCell>
										<TableCell align="right">
											<Typography className={classes.text}>
												{row.holding}
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography className={classes.text}>
												{row.value}
											</Typography>
										</TableCell>
										<TableCell align="right">
											<Typography className={classes.text}>
												{row.price}
											</Typography>
										</TableCell>
										<TableCell align="left">
											<Actions />
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
				style={{ color: '#C0996F' }}
			/>
		</div>
	);
}
