import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import TableSortLabel from "@material-ui/core/TableSortLabel";
export const SimpleTableHead = ({ headCells, filters = [], numSelected, onRequestSort, rowCount, classes, onSelectAllClick, order, orderBy, useSelect }) => {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    return (_jsxs(TableHead, { children: [_jsxs(TableRow, { children: [useSelect && _jsx(TableCell, Object.assign({ padding: "checkbox" }, { children: _jsx(Checkbox, { indeterminate: numSelected > 0 && numSelected < rowCount, checked: rowCount > 0 && numSelected === rowCount, onChange: onSelectAllClick, inputProps: { 'aria-label': 'select all desserts' } }, void 0) }), void 0),
                    headCells.map((headCell, index) => (_jsx(TableCell, Object.assign({ align: headCell.numeric ? 'right' : 'left', padding: headCell.disablePadding ? 'none' : 'default', sortDirection: orderBy === headCell.id ? order : false }, { children: _jsxs(TableSortLabel, Object.assign({ active: orderBy === headCell.id, direction: orderBy === headCell.id ? order : 'asc', onClick: createSortHandler(headCell.id) }, { children: [headCell.label, orderBy === headCell.id ? (_jsx("span", Object.assign({ className: classes.visuallyHidden }, { children: order === 'desc' ? 'sorted descending' : 'sorted ascending' }), void 0)) : null] }), void 0) }), index)))] }, void 0),
            _jsxs(TableRow, { children: [_jsx(TableCell, { padding: "checkbox" }, void 0),
                    filters.length !== 0 && headCells.map((headCell, index) => {
                        var _a;
                        return (_jsx(TableCell, Object.assign({ align: "left", padding: "none", sortDirection: orderBy === headCell.id ? order : false }, { children: (_a = filters.find(filter => filter.name === headCell.id)) === null || _a === void 0 ? void 0 : _a.component }), index));
                    })] }, void 0)] }, void 0));
};
