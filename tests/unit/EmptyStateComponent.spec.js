import { shallowMount } from '@vue/test-utils'
import EmptyStateComponent from '@/components/EmptyStateComponent';


describe('EmptyStateComponent.vue', () => {

  it('initializes with correct elements', () => {
    const wrapper = shallowMount(EmptyStateComponent)

    // check that the tags are all in place
    expect(wrapper.findAll('h3').length).toEqual(1)
    expect(wrapper.findAll('img').length).toEqual(1)
    expect(wrapper.findAll('button').length).toEqual(1)

    // check tag content
    expect(wrapper.findAll('p').at(0).text()).toMatch('We couldn\'t find anything to show and thats all I know')
    expect(wrapper.findAll('h3').at(0).text()).toMatch('Nothing to show here...')

  })

  it('renders props.title when passed', () => {
    const title = 'This is some title'
    const wrapper = shallowMount(EmptyStateComponent, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })

  it('renders props.subTitle when passed', () => {
    const subTitle = 'This is some subtitle'
    const wrapper = shallowMount(EmptyStateComponent, {
      propsData: { subTitle }
    })
    expect(wrapper.text()).toMatch(subTitle)
  })

})
