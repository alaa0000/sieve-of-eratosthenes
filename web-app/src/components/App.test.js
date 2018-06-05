import 'raf/polyfill';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from './App';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('should renders without crashing', () => {
    const wrapper = shallow(<App
      result={[]}
      value=""
      loading={false}
      setValue={jest.fn()}
      reset={jest.fn()}
      cancel={jest.fn()}
    />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should pass the value to TextField component', () => {
    const wrapper = shallow(<App
      result={[]}
      value="123"
      loading={false}
      setValue={jest.fn()}
      reset={jest.fn()}
      cancel={jest.fn()}
    />);

    expect(wrapper.find('#value').props().value).toEqual('123');
  });

  it('should call setValue prop when the input value changes', () => {
    const setValueMock = jest.fn();

    const wrapper = shallow(<App
      result={[]}
      value="123"
      loading={false}
      setValue={setValueMock}
      reset={jest.fn()}
      cancel={jest.fn()}
    />);

    wrapper.find('#value').simulate('change', { target: { value: '1234' } });

    expect(setValueMock).toHaveBeenCalledTimes(1);
    expect(setValueMock).toHaveBeenCalledWith('1234');
  });

  it('should call cancel prop when the cancel button is clicked', () => {
    const cancelMock = jest.fn();

    const wrapper = shallow(<App
      result={[]}
      value="123"
      loading={false}
      setValue={jest.fn()}
      reset={jest.fn()}
      cancel={cancelMock}
    />);

    wrapper.find('#cancel').simulate('click');

    expect(cancelMock).toHaveBeenCalledTimes(1);
  });

  it('should call reset prop when the reset button is clicked', () => {
    const resetMock = jest.fn();

    const wrapper = shallow(<App
      result={[]}
      value="123"
      loading={false}
      setValue={jest.fn()}
      reset={resetMock}
      cancel={jest.fn()}
    />);

    wrapper.find('#reset').simulate('click');

    expect(resetMock).toHaveBeenCalledTimes(1);
  });

  it('should show the progress when the loading prop is true', () => {
    const wrapper = shallow(<App
      result={[]}
      value=""
      loading
      setValue={jest.fn()}
      reset={jest.fn()}
      cancel={jest.fn()}
    />);

    expect(wrapper.find('#progress').length).toEqual(1);
  });

  it('should not show the progress when the loading prop is false', () => {
    const wrapper = shallow(<App
      result={[]}
      value=""
      loading={false}
      setValue={jest.fn()}
      reset={jest.fn()}
      cancel={jest.fn()}
    />);

    expect(wrapper.find('#progress').length).toEqual(0);
  });

  it('should show the singular text when the result prop contains one entry', () => {
    const wrapper = shallow(<App
      result={[123]}
      value=""
      loading={false}
      setValue={jest.fn()}
      reset={jest.fn()}
      cancel={jest.fn()}
    />);

    expect(wrapper.find('#result-text-singular').length).toEqual(1);
  });

  it('should not show the singular text when the result prop contains more than one entry', () => {
    const wrapper = shallow(<App
      result={[123, 456]}
      value=""
      loading={false}
      setValue={jest.fn()}
      reset={jest.fn()}
      cancel={jest.fn()}
    />);

    expect(wrapper.find('#result-text-singular').length).toEqual(0);
  });

  it('should show the plural text when the result prop contains more than one entry', () => {
    const wrapper = shallow(<App
      result={[123, 456]}
      value=""
      loading={false}
      setValue={jest.fn()}
      reset={jest.fn()}
      cancel={jest.fn()}
    />);

    expect(wrapper.find('#result-text-plural').length).toEqual(1);
  });

  it('should not show the plural text when the result prop contains one entry', () => {
    const wrapper = shallow(<App
      result={[123]}
      value=""
      loading={false}
      setValue={jest.fn()}
      reset={jest.fn()}
      cancel={jest.fn()}
    />);

    expect(wrapper.find('#result-text-plural').length).toEqual(0);
  });
});
