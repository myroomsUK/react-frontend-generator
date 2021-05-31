import {lighten, makeStyles} from "@material-ui/core/styles";
import React, {useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from "@material-ui/icons/FilterList";
import ListPageFilterBar from "../../utils/ListPageFilterBar";
import {Operation} from "./Operation";
import {OperationButtonFactory} from "./OperationButtonFactory";


const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        width:"100%"
    },
    highlight:
        theme.palette.type === 'light'
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

interface SimpleTableToolbarProps{
    numSelected: number,
    collectionOperations: Operation[],
    selected?: number[],
    setTable:any,
    allColumns:any[],
    title?: string,
    components?: any[]
    clearFilters?: () => void

}

export const SimpleTableToolbar = ({numSelected, selected, title, collectionOperations, components = [], clearFilters, setTable, allColumns }: SimpleTableToolbarProps) => {
    const classes = useToolbarStyles();
    const areFiltersEnabled = !!components.length;
    const selectedColumns = allColumns.filter(column => column.inColumn === true)
    const handleChangeCols = (event:any)=>{
        const newValues = event.target.value
        setTable(newValues);
    }

    const [expanded, setExpanded] = useState(false);

    const handleChange = () => {setExpanded(!expanded);};

    return (
        <>
            <Accordion expanded={expanded} elevation={0}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Toolbar className={classes.root}>
                        {numSelected > 0 ? (<Paper elevation={0} className={clsx(classes.paper, {
                                [classes.highlight]: numSelected > 0,
                            })}>
                                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                                    {numSelected} selected
                                </Typography>
                                {collectionOperations.map((operation:Operation) =>{
                                    const onClickFunction = ()=>operation.onClick(selected)
                                    operation.onClick = onClickFunction;
                                    return  <Tooltip title={operation.text}>
                                        {
                                            OperationButtonFactory.getOperationButton(operation)
                                        }
                                    </Tooltip>
                                }

                                )}
                            </Paper>
                        ) : (
                            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                                {title}
                            </Typography>
                        )}
                        {setTable && <TextField
                            id="standard-select-currency"
                            select
                            label=""
                            value={selectedColumns}
                            onChange={handleChangeCols}
                            SelectProps={{
                                multiple:true
                            }}
                        >
                            {allColumns.map((option) => (
                                <MenuItem key={option.id} value={option}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField> }
                        {(areFiltersEnabled) && (<Button onClick={clearFilters}>Clear filters</Button>)}
                        {(areFiltersEnabled) && <Tooltip title="Filter list">
                            <IconButton aria-label="filter list" onClick={handleChange}>
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip>}
                    </Toolbar>
                </AccordionSummary>
                {areFiltersEnabled && <AccordionDetails>
                    <ListPageFilterBar components={components}/>
                </AccordionDetails>}
            </Accordion>


        </>
    );
};