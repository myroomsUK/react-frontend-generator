export function routeManipulatorWithFilters(route, filters){

    Object.keys(filters).forEach((key,index)=> {
        let suffix = (index === 0) ? "" : "&";

        if(Array.isArray(filters[key])){
            filters[key].forEach(filterValue => {
                route = route.concat(`${suffix}${key}[]=${filterValue}`)
                if(suffix===""){
                    suffix = "&";
                }
            })
        }else{
            route = route.concat(`${suffix}${key}=${filters[key]}`)
        }
    })

    return route;
}