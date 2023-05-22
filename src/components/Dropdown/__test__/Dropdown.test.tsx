import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dropdown } from '../Dropdown';

test('', () => {
    
    const wrapper = <Dropdown children={<div></div>} button={<div></div>}/> 
    expect(wrapper).toBeDefined()
    
})

