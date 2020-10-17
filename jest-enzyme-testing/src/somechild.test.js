import React from 'react';
import { shallow,mount } from 'enzyme';
import SomeChild from './somechild';
import './setupTests';

it('should contain hello in somechild', () => {
    const component = mount(<SomeChild data={[1,2,3,4,5]}/>);
    const hello = <h1>Hello Child Component!!</h1>;
    expect(component.contains(hello)).toEqual(true);
  });

it('li counts 5', () => {
    const counterWrapper = mount(<SomeChild data={[1,2,3,4,5]}/>);
 
    expect(counterWrapper.find('li').length).toEqual(5);
  });

  it('li has 3', () => {
    const component = mount(<SomeChild data={[1,2,3,4,5]}/>); 
  expect(component.contains(<li>3</li>)).toEqual(true);
 
  });