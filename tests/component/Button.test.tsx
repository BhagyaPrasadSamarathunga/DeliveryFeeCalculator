import {fireEvent, render, screen} from '@testing-library/react'
import React from 'react';
import Button from '../../src/component/Button';

const styles = {
    calculateButton: {
      padding: '10px',
      paddingVertical: '30px',
      fontSize: '15px',
      marginTop: '10px'
    }
  };

describe("Button", () => {
    test("renders Button", () => {
        const onClick = jest.fn();
        const title = "Calculate Delivery Price";
        const accessibilityLabel = 'Input Cart value';
        render(<Button onClick={onClick} title={title} style={styles.calculateButton} isDisable={false} accessibilityLabel={accessibilityLabel}/> )
        expect(screen.getByTestId("button")).toBeTruthy();
   });
   test("onClick function calls when button click ", () => {
        const onClick = jest.fn();
        const title = "Calculate Delivery Price";
        const accessibilityLabel = 'Input Cart value';
        render(<Button onClick={onClick} title={title} isDisable={false} accessibilityLabel={accessibilityLabel} style={styles.calculateButton}/> );
        const button = screen.getByTestId("button");
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
});
});