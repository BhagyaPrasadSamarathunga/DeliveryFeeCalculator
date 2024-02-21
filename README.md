## Description

Implemented a delivery fee calculator using React.js. It is required to enter the Cart Value, Delivery distance , amount of items and time. The delivery fee is computed by taking into account the following rules based on the input data.
* If the cart value is less than 10€, a small order surcharge is added to the delivery price. The surcharge is the difference between the cart value and 10€.
* A delivery fee for the first 1km is 2€. If the delivery distance is longer than that, 1€ is added for every additional 500 meters that the courier needs to travel before reaching the destination. Even if the distance would be shorter than 500 meters, the minimum fee is always 1€.
* If the number of items is five or more, an additional 50 cent surcharge is added for each item above and including the fifth item. An extra "bulk" fee applies for more than 12 items of 1,20€
* The delivery fee can never be more than 15€, including possible surcharges.
* The delivery is free (0€) when the cart value is equal or more than 200€.
* During the Friday rush, 3 - 7 PM, the delivery fee (the total fee including possible
surcharges) will be multiplied by 1.2x. However, the fee still cannot be more than the max (15€).

<img src="https://github.com/BhagyaPrasadSamarathunga/Assets/blob/main/delivery-fee-calculator.png" width="800" />

## Technical Information

## Tech Stack

React.js, TypeScript, ESLint, css, jest
* Media queries are used to make the app responsive in different screen sizes.
* Jest and @testing-library/react is used for unit testing.
* Accessibility props are used in appropriate places.
* ESLint is used as a code formatter.

## Setup

```
 npm install
```
## Run App

```
npm start
```

## Run Tests

```
 npm test
```
