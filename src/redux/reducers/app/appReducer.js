import * as ActionTypes from '../../actions/app/actions';
import _ from 'lodash';
import {mainTheme} from "../../../rendering/themes/themes";

const initialState = {resource:null, theme: mainTheme, statusBar:{message: undefined, severity:"info"}, resourceBuffer:new Set(), listings: new Map(), registry:[]};


const appReducer = (state = initialState, action) => {
    if(action){
        switch(action.type){
            case ActionTypes.CHANGE_RESOURCE: {
                return {...state,
                    resource: action.resource
                };
            }
            case ActionTypes.SWITCH_THEME: {
                return {
                    ...state,
                    theme: action.theme
                };
            }
            case ActionTypes.FEEDBACK_MESSAGE:{
                return {
                    ...state,
                    statusBar: {message: action.message, severity: action.severity}
                }
            }
            case ActionTypes.CHANGE_RESOURCE_BUFFER:{
                if(!state.resourceBuffer.has(action.resource)){
                    const newResourceBufferSet = _.clone(state.resourceBuffer);
                    newResourceBufferSet.add(action.resource);
                    return {
                        ...state,
                        resourceBuffer: newResourceBufferSet
                    }
                }
                return state;
            }
            case ActionTypes.RESET_RESOURCE_BUFFER:{
                return {...state, resourceBuffer: new Set()};
            }
            case ActionTypes.UPDATE_RESOURCE_LISTINGS:{
                return {
                    ...state,
                    listings: action.listingsMap
                }
            }
            case ActionTypes.SET_REGISTRY:{
                return {
                    ...state,
                    registry: action.registry
                }
            }

            default: return state;


        }
    }

    return state;
};

export default appReducer;
