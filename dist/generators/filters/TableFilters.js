import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { replace } from "connected-react-router";
import { FilterList } from "./FilterList";
import { useGetResourceModel } from "../../resource-models/modelsRegistry";
export const TableFilters = (resourceNameToUse, presetFilters) => {
    const { urlResourceName } = useParams();
    const location = useLocation();
    const [routeFilters, setRouteFilters] = useState({});
    const [inheritedFilters, setInheritedFilters] = useState({});
    const [filterObject, setFilterObject] = useState({});
    const dispatch = useDispatch();
    const isEmbeddedTable = resourceNameToUse !== urlResourceName;
    const getFiltersFromLocation = (location) => {
        const searchParams = new URLSearchParams(location.search);
        const routeFilters = {};
        // @ts-ignore
        for (let key of searchParams.keys()) {
            // @ts-ignore
            routeFilters[key] = searchParams.get(key);
        }
        return routeFilters;
    };
    useEffect(() => {
        setInheritedFilters(presetFilters);
    }, [presetFilters]);
    useEffect(() => {
        if (inheritedFilters) {
            setFilterObject(inheritedFilters);
        }
    }, [inheritedFilters]);
    useEffect(() => {
        const filtersFromLocation = getFiltersFromLocation(location);
        if (!_.isEqual(routeFilters, filtersFromLocation)) {
            setRouteFilters(filtersFromLocation);
        }
    }, [location]);
    useEffect(() => {
        if (!isEmbeddedTable) {
            if (!_.isEqual(routeFilters, filterObject)) {
                setFilterObject(routeFilters);
            }
        }
    }, [routeFilters]);
    const checkIfFiltersEqualToRouteFilters = useCallback(() => {
        return _.isEqual(filterObject, routeFilters);
    }, [filterObject, routeFilters]);
    useEffect(() => {
        if (!isEmbeddedTable) {
            if (!checkIfFiltersEqualToRouteFilters()) {
                let route = location.pathname + "?";
                Object.keys(filterObject).forEach((key, index) => {
                    if (index === 0) {
                        route = route.concat(`${key}=${filterObject[key]}`);
                    }
                    else {
                        route = route.concat(`&${key}=${filterObject[key]}`);
                    }
                });
                dispatch(replace(route));
            }
        }
    }, [filterObject]);
    const clearFilters = () => setFilterObject({});
    const { model, filters: modelFilters } = useGetResourceModel(resourceNameToUse);
    const propsFiltersList = useMemo(() => { return { model: model, modelFilters: modelFilters, filters: filterObject, setFilters: setFilterObject }; }, [model, modelFilters, filterObject]);
    return { filters: filterObject, components: FilterList(propsFiltersList), clearFilters: clearFilters };
};
