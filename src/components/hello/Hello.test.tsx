import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';
// import Hello from './components/hello/Hello';

it('renders the correct text when no enthuasm level is given', () => {
    const hello = enzyme.shallow(<Hello name="Daniel" />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
    const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
});

it('throws error when the enthusiasm level is 0', () => {
    expect(() => {
        enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
    }).toThrow();
});