import { shallowMount } from '@vue/test-utils'
import EmptyStateComponent from '../../src/EmptyStateComponent';


describe('EmptyStateComponent.vue', () => {

  it('initializes with correct elements no button', () => {
    //no button
    const wrapper = shallowMount(EmptyStateComponent, {
      propsData: {
        data: 1
      }
    });

    // check that the tags are all in place
    expect(wrapper.findAll('img').length).toEqual(1)
    expect(wrapper.findAll('button').length).toEqual(0)

    // check tag content
    expect(wrapper.findAll('p').at(0).text()).toMatch('Nothing to show here')
    expect(wrapper.findAll('p').at(1).text()).toMatch('We couldn\'t find anything to show and thats all we know')

  })

  it('initializes with correct elements with button', () => {
    //with button
    const onClick = jest.fn();
    const wrapper = shallowMount(EmptyStateComponent, {
      propsData: {
        data: 1
      },
      listeners: {
        click: onClick
      }
    });

    // check that the tags are all in place
    expect(wrapper.findAll('img').length).toEqual(1)
    expect(wrapper.findAll('button').length).toEqual(1)

    // check tag content
    expect(wrapper.findAll('p').at(0).text()).toMatch('Nothing to show here')
    expect(wrapper.findAll('p').at(1).text()).toMatch('We couldn\'t find anything to show and thats all we know')

  })

  it('renders props.title when passed', () => {
    const title = 'This is some title'
    const wrapper = shallowMount(EmptyStateComponent, {
      propsData: { 
        data:1,
        title }
    })
    expect(wrapper.text()).toMatch(title)
  })

  it('renders props.subTitle when passed', () => {
    const subTitle = 'This is some subtitle'
    const wrapper = shallowMount(EmptyStateComponent, {
      propsData: { subTitle, data:1 }
    })
    expect(wrapper.text()).toMatch(subTitle)
  })

})
