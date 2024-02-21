import {CalculateDeliveryFee,isTimeWithinRange} from "../../src/utils/util";

describe("isTimeWithinRange functions", () => {
    const startTime = 15;
    const endTime = 19;
    it("return true for the time is in between 3PM - 7PM", () => {
        const dateTime = new Date('Fri Jan 26 2024 15:30:00 GMT+0100');
      expect(isTimeWithinRange({dateTime, startTime,endTime})).toEqual(true);
    });
    it("return false for the time isn't in between 3PM - 7PM", () => {
        const dateTime = new Date('Fri Jan 26 2024 12:30:00 GMT+0100');
      expect(isTimeWithinRange({dateTime, startTime,endTime})).toEqual(false);
    });
  });

describe("CalculateDeliveryFee functions", () => {
    it("The delivery is free (0€) when the cart value is equal or more than 200€", () => {
        const cartValue = '200';
        const deliveryDistance = '1500';
        const itemAmount = '20';
        const selectedDateTime = new Date('Fri Jan 26 2024 15:30:00 GMT+0100');
      expect(CalculateDeliveryFee({cartValue, deliveryDistance,itemAmount,selectedDateTime})).toEqual(0);
    });
    it("The delivery fee is 15€ when the total fee is equal or more than 15€", () => {
        const cartValue = '3';
        const deliveryDistance = '5000';
        const itemAmount = '2';
        const selectedDateTime = new Date('Fri Jan 26 2024 15:30:00 GMT+0100');
      expect(CalculateDeliveryFee({cartValue, deliveryDistance,itemAmount,selectedDateTime})).toEqual(15);
    });
    it("check the delivery fee for the small order with distance < 1000m , number of item <5 and delivery time is not in rush hours", () => {
        const cartValue = '7';
        const deliveryDistance = '500';
        const itemAmount = '2';
        const selectedDateTime = new Date('Fri Jan 26 2024 12:30:00 GMT+0100');
      expect(CalculateDeliveryFee({cartValue, deliveryDistance,itemAmount,selectedDateTime})).toEqual(5);
    });
    it("check the delivery fee for the small order with distance < 1000m , number of item <5 and delivery time is in rush hours", () => {
        const cartValue = '7';
        const deliveryDistance = '500';
        const itemAmount = '2';
        const selectedDateTime = new Date('Fri Jan 26 2024 15:30:00 GMT+0100');
      expect(CalculateDeliveryFee({cartValue, deliveryDistance,itemAmount,selectedDateTime})).toEqual(6);
    });
    it("check the delivery fee for the big order with distance > 1000m , number of item > 5 and delivery time is in rush hours", () => {
        const cartValue = '100';
        const deliveryDistance = '2000';
        const itemAmount = '20';
        const selectedDateTime = new Date('Fri Jan 26 2024 15:30:00 GMT+0100');
      expect(CalculateDeliveryFee({cartValue, deliveryDistance,itemAmount,selectedDateTime})).toEqual(15);
    });
  });