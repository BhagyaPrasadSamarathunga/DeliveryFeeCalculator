import {fireEvent, render, screen} from '@testing-library/react'
import React from 'react';
import TextInput from '../../src/component/TextInput';

describe("TextInput", () => {
    test("renders TextInput", () => {
        const onInputChange = jest.fn();
        const accessibilityLabel = 'Input Cart value';
        const accessible = true;
        const TexboxInputType = 'number';
        const placeHolder = 'Cart value';
        render(<TextInput onInputChange={onInputChange} accessibilityLabel={accessibilityLabel} accessible={accessible} inputType={TexboxInputType} placeHolder={placeHolder}/> );
        expect(screen.getByTestId("text-input")).toBeTruthy();
   });

    test("On Input change function calls when change input", () => {
        const onInputChange = jest.fn();
        const accessibilityLabel = 'Input Cart value';
        const accessible = true;
        const TexboxInputType = 'number';
        const placeHolder = 'Cart value';
        render(<TextInput onInputChange={onInputChange} accessibilityLabel={accessibilityLabel} accessible={accessible} inputType={TexboxInputType} placeHolder={placeHolder}/> );
        const textInput = screen.getByTestId("text-input");
        fireEvent.change(textInput, { target: { value: '20' } });
        expect(onInputChange).toHaveBeenCalledTimes(1);
    });
});

