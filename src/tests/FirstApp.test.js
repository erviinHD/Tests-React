//import { render } from "@testing-library/react"
import FirstApp from "../FirstApp"

import React from 'react';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Pruebas my FirstApp', () => {
    //test('Mostrar el mensaje hola mundo', () => {
    //    const saludo = "Hello"

    //    const { getByText } = render(<FirstApp words={saludo} />);

    //    expect(getByText(saludo)).toBeInTheDocument
    //})

    test('Debe mostrar <FirstApp /> correctamente', () => {
        const saludo = "Hello"
        const wrapper = shallow(<FirstApp words={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });


    test('Mostrar el subtitulo', () => {
        const saludo = "Hello"
        const sub = "obi wan kenoby"

        const wrapper = shallow(<FirstApp words={saludo} subtitle={sub} />);

        const textParrafo = wrapper.find('p').text();
        expect(textParrafo).toBe(sub)
    })
})