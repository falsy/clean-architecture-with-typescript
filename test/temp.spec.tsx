import * as React from "react";
import { mount } from 'enzyme';
import AddBoard from '@frameworks/web/components/molecules/addBoard';

describe('test', () => {
  it('check status component redner', () => {
    const component = mount(<AddBoard insertFnc={() => {}} />);
    expect(component.find('input').length).toEqual(2);
  });
});