import React from 'react';
import { render } from 'react-dom';
import { shallow } from 'enzyme';
import Button from 'Button';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Button>reset</Button>, div);
  });
  describe('render', () => {
    it('should render the button', () => {
      const button = shallow(<Button>reset</Button>);
      expect(button.text()).toEqual('reset');
    });
    it('should handle click', () => {
      var clicked = false;
      const button = shallow(<Button onClick={() => {clicked = true}}>reset</Button>);
      button.simulate("click");
      expect(clicked).toBe(true);
    });
    it('should handle hover', () => {
      const button = shallow(<Button onClick={() => {clicked = true}}>reset</Button>);
      expect(button).toMatchSnapshot();
      button.simulate("mouseOver");
      expect(button).toMatchSnapshot();
      button.simulate("mouseleave");
      expect(button).toMatchSnapshot();
    });
  });
});
