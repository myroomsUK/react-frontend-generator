import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import React from "react";

export type Direction = "asc" | "desc" |undefined;

interface Props{
    headCells: any[],
    filters?: any[],
    numSelected:number,
    rowCount:number,
    classes?: any,
    onSelectAllClick: any,
    order: Direction,
    orderBy:string,
    onRequestSort: any,
    useSelect: boolean

}

export const SimpleTableHead: React.FC<Props> = ({headCells, filters = [], numSelected, onRequestSort,rowCount, classes, onSelectAllClick, order, orderBy,useSelect}) => {
    const createSortHandler = (property: any) => (event: any) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {useSelect && <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{'aria-label': 'select all desserts'}}
                    />
                </TableCell>}
                {headCells.map((headCell, index) => (
                    <TableCell
                        key={index}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
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
            <TableRow>
                <TableCell padding="checkbox">
                </TableCell>
                {filters.length!==0 && headCells.map((headCell, index) => (
                    <TableCell
                        key={index}
                        align="left"
                        padding="none"
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {filters.find(filter => filter.name === headCell.id)?.component}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
