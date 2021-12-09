import React from 'react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import CounterApp from '../CounterApp';

configure({ adapter: new Adapter() });


describe('Pruebas en CunterApp', () => {
    const numer = 5;
    let input = shallow(<CounterApp number={numer} />);

    beforeEach(() => {
        input = shallow(<CounterApp number={numer} />);
    })

    test('debe mostrar el componente <CounterApp />', () => {

        expect(input).toMatchSnapshot();
    })

    test('Mostrar el contador', () => {
        const x = 200

        const wrapper = shallow(<CounterApp number={x} />);

        const textParrafo = wrapper.find('p').text();

        expect(Number(textParrafo)).toBe(x)
    })


    test('Debe incrementar el contador', () => {
        input.find('button').at(0).simulate('click');
        const counterText = input.find('p').text().trim();

        expect(counterText).toBe('6')

    })

    test('Debe decrementar el contador', () => {
        input.find('button').at(2).simulate('click');
        const counterText = input.find('p').text().trim();
        expect(counterText).toBe('4')

    })

    test('Debe colocar el valor por defecto de reset', () => {
        const wrapper = shallow(<CounterApp number={105} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('p').text().trim();

        expect(counterText).toBe('105')

    })
})