import { GenericFilterArray } from "./GenericFilterArray";
import { GetListingsMap } from "../../utils/referenceFieldUtils";
import { filterOnChangeHandler } from "../forms/formHelpers";
export const FilterList = ({ model, modelFilters, filters, setFilters }) => {
    const { referencesMap } = GetListingsMap(model);
    const filterFieldOnChange = (type) => {
        return (...vars) => filterOnChangeHandler(type, setFilters, filters, vars);
    };
    return GenericFilterArray({
        model: model,
        modelFilters: modelFilters,
        referencesMap: referencesMap,
        inputFieldOnChange: filterFieldOnChange,
        filterValue: filters
    });
};
