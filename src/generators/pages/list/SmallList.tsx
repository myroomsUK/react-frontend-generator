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
import {makeStyles} from "@material-ui/core/styles";
import {Operation} from "./listHelpers/Operation";
import {Direction, SimpleTableHead} from "./listHelpers/SimpleTableHead";
import OperationButton from "../../../rendering/components/buttons/OperationButton";

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

export interface SmallListProps{
    data: any[],
    totalItems: number,
    headCells: any[],
    columns: (row: any)=> React.DetailedReactHTMLElement<any, any>[]
    page: number,
    setPage: any,
    selected?: number[],
    setSelected?: any,
    title?: string,
    itemOperations?: Operation[]
    collectionOperations?: Operation[],
    allColumns?: any[],
    setTable?: any,
    noToolbar?: boolean

}

export const SmallList: React.FC<SmallListProps> = ({data:rows, totalItems,  page, setPage, selected, setSelected, title, itemOperations = [], collectionOperations = [], headCells, columns, allColumns= [], setTable, noToolbar= false,}) => {
    headCells = (itemOperations.length!==0) ?  headCells.concat({ numeric:true, disablePadding:false, label:"Actions"}) : headCells

    const classes = useStyles();
    const [order, setOrder] = React.useState<Direction>('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(30);

    const handleRequestSort = (event: any, property:any) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: any) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: number) => {
        if(selected){
            const selectedIndex = selected.indexOf(name);
            let newSelected: number[] = [];

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
        }
    };

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => setPage(newPage)

    const isSelected = (name: number) => (selected) ? selected.indexOf(name) !== -1 : false;
    const numSelected = (selected) ? selected.length : 0

    return  (
        <>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    {!noToolbar && <SimpleTableToolbar selected={selected} numSelected={numSelected} title={title}
                                         collectionOperations={collectionOperations} setTable={setTable}
                                         allColumns={allColumns}/>}
                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                            aria-label="enhanced table"
                        >
                            <SimpleTableHead
                                useSelect={selected!==undefined}
                                classes={classes}
                                numSelected={numSelected}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                                headCells={headCells}
                            />
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(rowsPerPage * page, rowsPerPage * (page+1))
                                    .map((row: any, index: React.Key | null | undefined) => {
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
                                                {selected && <TableCell padding="checkbox" id={labelId}>
                                                    <Checkbox
                                                        checked={isItemSelected}
                                                        onClick={(event) => handleClick(event, row.id)}
                                                        inputProps={{'aria-labelledby': labelId}}
                                                    />
                                                </TableCell>}
                                                {
                                                    columns(row).map((column, localIndex)=>
                                                        <TableCell key={localIndex}>
                                                            {column}
                                                        </TableCell>
                                                    )
                                                }
                                                {itemOperations?.length!==0 && <TableCell align="right">
                                                    <ButtonsHorizontalList>
                                                        {itemOperations.map(({color, icon, onClick,text, visibility, requiresConfirmation}) => <OperationButton color={color} text={text} icon={icon} onClick={() => onClick(row)} visible={visibility(row)} requiresConfirmation={requiresConfirmation}/>) }
                                                    </ButtonsHorizontalList>
                                                </TableCell>}
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