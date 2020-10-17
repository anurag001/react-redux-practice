import React from 'react';
import { shallow,mount } from 'enzyme';
import App from './app';
import './setupTests';
import SomeChild from './somechild';



  it('whether contains child or not ',()=>{
    const component = mount(<App/>);
    expect(component.find(SomeChild).exists()).toBe(true);
  });

  it('should contain hello in child comp', () => {
    const component = mount(<App/>);
    const hello = <h1>Hello Child Component!!</h1>;
    expect(component.contains(hello)).toEqual(true);
    // expect(component).toMatchSnapshot();
  });

  it('child contains li value',()=>{
    const component = mount(<App/>);
    expect(component.find('li').exists()).toBe(true);
  });

 