import React from "react";
import Grid from "@material-ui/core/Grid";
import {Divider} from "@material-ui/core";
import UnitEnquiryCreate from "./UnitEnquiryCreate";

export default function PropertyCreate(props){

    const {model} = props;
    return <div >
        <Grid container spacing={2}>
            <Grid md={6} xs={12} item>
                {model.getInputField("propertyName", props)}
            </Grid>
            <Grid md={6} xs={12} item>
                {model.getInputField("type", props)}
            </Grid>
            <Divider/>
            <Grid xs={12} md={6} item>{model.getInputField("address", props)}</Grid>
            <Grid xs={12} md={6} item>{model.getInputField("city", props)}</Grid>
            <Grid xs={12} md={6} item>{model.getInputField("country", props)}</Grid>
            <Grid md={6} xs={12} item>{model.getInputField("county", props)}</Grid>
            <Grid md={6} xs={12} item>{model.getInputField("area", props)}</Grid>
            <Grid md={6} xs={12} item>{model.getInputField("postcode", props)}</Grid>
            <Grid md={6} xs={12} item>{model.getInputField("neighborhood", props)}</Grid>
            <Grid md={6} xs={12} item>{model.getInputField("askedPrice", props)}</Grid>
            <Grid md={6} xs={12} item>{model.getInputField("units", {...props})}</Grid>
            {/*<MarginCalculator {...props}/>*/}
        </Grid>
    </div>
}

function MarginCalculator(props){

    const askedPrice = props.formValue.askedPrice;
    const sumUnitsPrices = (accumulator, unit) => accumulator + unit.price;
    const roomsEstimatedPrices = props.formValue.units?.reduce(sumUnitsPrices,0);

    return <div>
        <div>Asked price: {askedPrice}</div>
        <div>Rooms estimated cumulative prices: {roomsEstimatedPrices}</div>
        <div>Margin: {roomsEstimatedPrices - askedPrice}</div>

    </div>
}
