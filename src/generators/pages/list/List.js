import React from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {getComparator, stableSort} from "../utils/ListPageGeneratorUtils";
import Checkbox from "@material-ui/core/Checkbox";
import ButtonsHorizontalList from "../../../rendering/components/buttons/ButtonsHorizontalList";
import TablePagination from "@material-ui/core/TablePagination";
import {SimpleTableToolbar} from "./listHelpers/SimpleToolbar";
import Tooltip from "@material-ui/core/Tooltip";
import {OperationButtonFactory} from "./listHelpers/OperationButtonFactory";
import {makeStyles} from "@material-ui/core/styles";
import {EnhancedTableHead} from "../ListPageGenerator";

/*
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
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
*/

export function GenericList({data:rows, totalItems,  page, setPage, selected = [], setSelected, title, itemOperations = [], collectionOperations = [], headCells, columns, allColumns, setTable}) {
    headCells = (itemOperations.length!==0) ?  headCells.concat({ numeric:true, disablePadding:false, label:"Actions"}) : headCells

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(30);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.id);
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

    const handleChangePage = (event, newPage) => setPage(newPage)

    const isSelected = (name) => selected.indexOf(name) !== -1;


    return  (
        <>
            <div >
                <Paper >
                    <SimpleTableToolbar numSelected={selected.length} title={title} collectionOperations={collectionOperations} setTable={setTable} allColumns={allColumns} />
                    <TableContainer>
                        <Table

                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                            aria-label="enhanced table"
                        >
                            <EnhancedTableHead

                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                                headCells={headCells}
                            />
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                        .slice(0, rowsPerPage)
                                        .map((row, index) => {
                                            const isItemSelected = isSelected(row.id);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    //onClick={(event) => handleClick(event, row.id)}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={index}
                                                    selected={isItemSelected}
                                                >
                                                    <TableCell padding="checkbox" id={labelId}>
                                                        <Checkbox
                                                            checked={isItemSelected}
                                                            onClick={(event) => handleClick(event, row.id)}
                                                            inputProps={{ 'aria-labelledby': labelId }}
                                                        />
                                                    </TableCell>
                                                    {
                                                        columns(row).map((column, localIndex)=>
                                                            <TableCell key={localIndex}>
                                                                {column}
                                                            </TableCell>
                                                        )
                                                    }
                                                    <TableCell align="right">
                                                        <ButtonsHorizontalList>
                                                            {itemOperations.map((operation) => {
                                                                operation.onClick = () => operation.onClick(row);
                                                                return  <Tooltip title={operation.text}>
                                                                    {
                                                                        OperationButtonFactory.getOperationButton(operation)
                                                                    }
                                                                </Tooltip>
                                                            })}
                                                        </ButtonsHorizontalList>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        component="div"
                        count={totalItems}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[30]}
                        page={page}
                        onChangePage={handleChangePage}
                    />
                </Paper>
            </div>
        </>

    );
}