import React from 'react';
import {shallow} from 'enzyme';
import DogListComponent from "../src/modules/dog/list/dog-list.component";
import {Title} from  "../src/modules/dog/list/dog-list.style";

jest.mock('react-i18next', () => ({
  useTranslation: () => (
      {
        t: (str) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      })
}))

describe('Dog List Component', () => {
  it('Deve conter o título', () => {
    const wrapper = shallow(
        <DogListComponent/>
    );
    expect(wrapper.find(Title).text()).toEqual("Test")
    //expect(wrapper.find('Title').first().text()).toEqual('About')

  });
});
