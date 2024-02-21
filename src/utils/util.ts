import { DAYS, ITEM_COUNT_TRESHOLD, PEAK_TIME_END, PEAK_TIME_START, CART_VALUE_TRESHOLD, 
    INITIAL_ORDER_SURCHARGE, CART_VALUE_CUTOFF, DELIVERY_DISTANCE_INITIAL_VALUE_CUTOFF,
    DELIVERY_DISTANCE_VALUE_CUTOFF, MAXIMUM_DELIVERY_COST, PEAK_TIME_SURCHARGE_RATIO,
    ITEM_AMOUNT_CUTOFF, ORDER_SURCHARGE_RATIO, ITEM_AMOUNT_CUTOFF_SURCHARGE,
    DELIVERY_DISTANCE_INITIAL_VALUE_CUTOFF_SURCHARGE, DELIVERY_DISTANCE_EXTRA_SURCHARGE} from './constants';

function isTimeWithinRange({dateTime, startTime, endTime}:{dateTime: Date; startTime: number, endTime: number}) {
    const start = new Date(dateTime);
    const end = new Date(dateTime);
    
    start.setHours(startTime, 0, 0, 0); // Set to 3:00 PM
    end.setHours(endTime, 0, 0, 0); // Set to 5:00 PM

    if (dateTime >= start && dateTime <= end) {
        return true;
    } else {
        return false;
    }
}

const CalculateDeliveryFee = ({cartValue,deliveryDistance,itemAmount,selectedDateTime}:
    {cartValue:string;deliveryDistance:string;itemAmount:string;selectedDateTime:Date}) => {

    const cartTotalValue:number = +cartValue;
    const deliveryDistanceValue:number = +deliveryDistance;
    const itemAmountValue:number = +itemAmount;

    let orderSurcharge:number = INITIAL_ORDER_SURCHARGE;
    const cartValueCutOff:number = CART_VALUE_CUTOFF;
    const deliveryDistanceInitialValueCutOff:number = DELIVERY_DISTANCE_INITIAL_VALUE_CUTOFF;
    const deliveryDistanceValueCutOff:number = DELIVERY_DISTANCE_VALUE_CUTOFF;

    if(cartTotalValue >= CART_VALUE_TRESHOLD)
    {
        return orderSurcharge;
    }
    else if(cartTotalValue < cartValueCutOff) {
        orderSurcharge =  cartValueCutOff - cartTotalValue;
    }
    if(deliveryDistanceValue > deliveryDistanceInitialValueCutOff)
    {
        orderSurcharge = orderSurcharge + DELIVERY_DISTANCE_INITIAL_VALUE_CUTOFF_SURCHARGE;
        orderSurcharge = orderSurcharge + Math.trunc((deliveryDistanceValue - deliveryDistanceInitialValueCutOff)/deliveryDistanceValueCutOff);
        if((deliveryDistanceValue % deliveryDistanceValueCutOff) > 0) {
            orderSurcharge = orderSurcharge + DELIVERY_DISTANCE_EXTRA_SURCHARGE;
        }
    }
    else {
        orderSurcharge = orderSurcharge + DELIVERY_DISTANCE_INITIAL_VALUE_CUTOFF_SURCHARGE;
    }
    if(itemAmountValue >= ITEM_COUNT_TRESHOLD) {
        orderSurcharge = orderSurcharge + (itemAmountValue - ITEM_COUNT_TRESHOLD)* ORDER_SURCHARGE_RATIO;
        if(itemAmountValue > ITEM_AMOUNT_CUTOFF){
            orderSurcharge = orderSurcharge + ITEM_AMOUNT_CUTOFF_SURCHARGE;
        }
    }
    if(selectedDateTime.getDay() === DAYS.FRIDAY) {
        const dateTime = selectedDateTime;
        const startTime = PEAK_TIME_START;
        const endTime = PEAK_TIME_END;
        const validTimeRange = isTimeWithinRange({dateTime, startTime, endTime});     
        if(validTimeRange){
            orderSurcharge = orderSurcharge * PEAK_TIME_SURCHARGE_RATIO;
        }
    }
    if(orderSurcharge > MAXIMUM_DELIVERY_COST) {
        return MAXIMUM_DELIVERY_COST;
    }
    else{
        return orderSurcharge;
    }
};
export {CalculateDeliveryFee,isTimeWithinRange};