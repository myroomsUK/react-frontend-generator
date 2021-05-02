import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
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
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { push } from "connected-react-router";
import { useDebouncedCallback } from "use-debounce";
import _ from 'lodash';
import Skeleton from "@material-ui/lab/Skeleton";
import { Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import ListPageFilterBar from "./utils/ListPageFilterBar";
import { useGetResourceModel } from "../../resource-models/modelsRegistry";
import { useList } from "../../redux/actions/verbs/list";
import { getComparator, stableSort } from "./utils/ListPageGeneratorUtils";
import ButtonsHorizontalList from "../../rendering/components/buttons/ButtonsHorizontalList";
import { GenericField } from "../fields/genericField";
import { TableFilters } from "../filters/TableFilters";
function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headCells, filters } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    return (_jsxs(TableHead, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, Object.assign({ padding: "checkbox" }, { children: _jsx(Checkbox, { indeterminate: numSelected > 0 && numSelected < rowCount, checked: rowCount > 0 && numSelected === rowCount, onChange: onSelectAllClick, inputProps: { 'aria-label': 'select all desserts' } }, void 0) }), void 0),
                    headCells.map((headCell, index) => (_jsx(TableCell, Object.assign({ align: headCell.numeric ? 'right' : 'left', padding: headCell.disablePadding ? 'none' : 'default', sortDirection: orderBy === headCell.id ? order : false }, { children: _jsxs(TableSortLabel, Object.assign({ active: orderBy === headCell.id, direction: orderBy === headCell.id ? order : 'asc', onClick: createSortHandler(headCell.id) }, { children: [headCell.label, orderBy === headCell.id ? (_jsx("span", Object.assign({ className: classes.visuallyHidden }, { children: order === 'desc' ? 'sorted descending' : 'sorted ascending' }), void 0)) : null] }), void 0) }), index)))] }, void 0),
            _jsxs(TableRow, { children: [_jsx(TableCell, { padding: "checkbox" }, void 0),
                    headCells.map((headCell, index) => {
                        var _a;
                        return (_jsx(TableCell, Object.assign({ align: "left", padding: "none", sortDirection: orderBy === headCell.id ? order : false }, { children: (_a = filters.find(filter => filter.name === headCell.id)) === null || _a === void 0 ? void 0 : _a.component }), index));
                    })] }, void 0)] }, void 0));
}
EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    headCells: PropTypes.array.isRequired
};
const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        width: "100%"
    },
    highlight: theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
        },
    title: {
        flex: '1 1 100%',
    },
    paper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: theme.spacing(2),
        marginRight: theme.spacing(1)
    }
}));
const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected, clearFilters, components, showClearFilters } = props;
    const [expanded, setExpanded] = useState(false);
    const handleChange = () => {
        setExpanded(!expanded);
    };
    return (_jsx(_Fragment, { children: _jsxs(Accordion, Object.assign({ expanded: expanded, elevation: 0 }, { children: [_jsx(AccordionSummary, Object.assign({ "aria-controls": "panel1a-content", id: "panel1a-header" }, { children: _jsxs(Toolbar, Object.assign({ className: classes.root }, { children: [numSelected > 0 ? (_jsxs(Paper, Object.assign({ elevation: 0, className: clsx(classes.paper, {
                                    [classes.highlight]: numSelected > 0,
                                }) }, { children: [_jsxs(Typography, Object.assign({ className: classes.title, color: "inherit", variant: "subtitle1", component: "div" }, { children: [numSelected, " selected"] }), void 0),
                                    _jsx(Tooltip, Object.assign({ title: "Delete" }, { children: _jsx(IconButton, Object.assign({ "aria-label": "delete" }, { children: _jsx(DeleteIcon, {}, void 0) }), void 0) }), void 0)] }), void 0)) : (_jsx(Typography, Object.assign({ className: classes.title, variant: "h6", id: "tableTitle", component: "div" }, { children: props.title }), void 0)),
                            (showClearFilters) && (_jsx(Button, Object.assign({ onClick: clearFilters }, { children: "Clear filters" }), void 0)),
                            (!!components.length) && _jsx(Tooltip, Object.assign({ title: "Filter list" }, { children: _jsx(IconButton, Object.assign({ "aria-label": "filter list", onClick: handleChange }, { children: _jsx(FilterListIcon, {}, void 0) }), void 0) }), void 0)] }), void 0) }), void 0),
                _jsx(AccordionDetails, { children: _jsx(ListPageFilterBar, { components: components }, void 0) }, void 0)] }), void 0) }, void 0));
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
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}
function randomArray() {
    return new Array(getRandomInt(3, 7)).fill(1);
}
export function GenericList({ resourceName, filters: lockedFilters }) {
    const [rows, setRows] = useState([]);
    const [selected, setSelected] = React.useState([]);
    const { model, title, table, tableActions: customActions } = useGetResourceModel(resourceName);
    let headCells = table.map(({ id, label }) => { return { propertyModel: model.getProperty(id), tableItemName: { id: id, label: label } }; }).map(({ propertyModel, tableItemName: { id, label } }) => {
        return { id: id, numeric: false, disablePadding: false, label: label };
    });
    headCells = headCells.concat({ numeric: true, disablePadding: false, label: "Actions" });
    const { filters, components, clearFilters } = TableFilters(resourceName, lockedFilters);
    //get Data as a first step.
    const dispatch = useDispatch();
    const { data, get, loading } = useList();
    const { list, totalItems } = data;
    const [localLoading, setLocalLoading] = useState(false);
    useEffect(() => { setLocalLoading(loading); }, [loading]);
    const goToNew = () => dispatch(push(`/${resourceName}/new`));
    const goToEdit = (id) => dispatch(push(`/${resourceName}/${id}/edit`));
    const goToShow = (id) => dispatch(push(`/${resourceName}/${id}/show`));
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(30);
    useEffect(() => {
        setRows([]);
        setSelected([]);
    }, [resourceName]);
    const debounced = useDebouncedCallback(() => get(resourceName, page + 1, filters), 1000);
    useEffect(() => {
        setLocalLoading(true);
        debounced();
        setLocalLoading(false);
    }, [resourceName, filters, page]);
    useEffect(() => {
        setRows(data.list);
    }, [data]);
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
        }
        else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        }
        else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        }
        else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }; //const [rows, setRows] = useState([]);
    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };
    const isSelected = (name) => selected.indexOf(name) !== -1;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const filterBarComponents = components.filter(component => !headCells.some(headCell => headCell.id === component.name));
    const showClearFilters = !!components.length;
    return (_jsx(_Fragment, { children: _jsx("div", Object.assign({ className: classes.root }, { children: _jsxs(Paper, Object.assign({ className: classes.paper }, { children: [_jsx(EnhancedTableToolbar, { numSelected: selected.length, title: title, clearFilters: clearFilters, components: filterBarComponents, showClearFilters: showClearFilters }, void 0),
                    _jsx(TableContainer, { children: _jsxs(Table, Object.assign({ className: classes.table, "aria-labelledby": "tableTitle", size: dense ? 'small' : 'medium', "aria-label": "enhanced table" }, { children: [_jsx(EnhancedTableHead, { classes: classes, numSelected: selected.length, order: order, orderBy: orderBy, onSelectAllClick: handleSelectAllClick, onRequestSort: handleRequestSort, rowCount: rows.length, headCells: headCells, filters: components }, void 0),
                                _jsxs(TableBody, { children: [localLoading ?
                                            (randomArray()).map((value, index) => _jsxs(TableRow, Object.assign({ hover: true, 
                                                //onClick={(event) => handleClick(event, row.id)}
                                                role: "checkbox", tabIndex: -1 }, { children: [_jsx(TableCell, { padding: "checkbox" }, void 0),
                                                    table.map((tableItem, index) => _jsxs(TableCell, { children: [_jsx(Skeleton, { variant: "text" }, void 0), " "] }, index)),
                                                    _jsx(TableCell, { align: "right" }, void 0)] }), index))
                                            :
                                                stableSort(rows, getComparator(order, orderBy))
                                                    .slice(0, rowsPerPage)
                                                    .map((row, index) => {
                                                    const isItemSelected = isSelected(row.id);
                                                    const labelId = `enhanced-table-checkbox-${index}`;
                                                    return (_jsxs(TableRow, Object.assign({ hover: true, 
                                                        //onClick={(event) => handleClick(event, row.id)}
                                                        role: "checkbox", "aria-checked": isItemSelected, tabIndex: -1, selected: isItemSelected }, { children: [_jsx(TableCell, Object.assign({ padding: "checkbox", id: labelId }, { children: _jsx(Checkbox, { checked: isItemSelected, onClick: (event) => handleClick(event, row.id), inputProps: { 'aria-labelledby': labelId } }, void 0) }), void 0),
                                                            table.map(({ id, label }) => {
                                                                const split = _.split(id, ".");
                                                                const reducer = (start, value) => (start) ? start[value] : undefined;
                                                                const record = split.reduce(reducer, row);
                                                                const propertyModel = model.getProperty(id);
                                                                propertyModel.label = label;
                                                                return { propertyModel: propertyModel, record: record };
                                                            }).map(({ propertyModel, record }, localIndex) => {
                                                                return _jsx(TableCell, { children: _jsx(GenericField, { table: true, propertyRecord: record, propertyModel: propertyModel, resourceName: resourceName, originalId: row.id }, void 0) }, localIndex);
                                                            }),
                                                            _jsx(TableCell, Object.assign({ align: "right" }, { children: _jsxs(ButtonsHorizontalList, { children: [_jsx(Button, Object.assign({ variant: "contained", color: "primary", onClick: () => goToShow(row.id) }, { children: "Show" }), void 0),
                                                                        _jsx(Button, Object.assign({ variant: "contained", color: "secondary", onClick: () => goToEdit(row.id) }, { children: "Edit" }), void 0)] }, void 0) }), void 0)] }), index));
                                                }),
                                        false && emptyRows > 0 && (_jsx(TableRow, Object.assign({ style: { height: (dense ? 33 : 53) * emptyRows } }, { children: _jsx(TableCell, { colSpan: 6 }, void 0) }), void 0))] }, void 0)] }), void 0) }, void 0),
                    _jsx(TablePagination, { component: "div", count: totalItems, rowsPerPage: rowsPerPage, rowsPerPageOptions: [30], page: page, onChangePage: handleChangePage }, void 0)] }), void 0) }), void 0) }, void 0));
}
