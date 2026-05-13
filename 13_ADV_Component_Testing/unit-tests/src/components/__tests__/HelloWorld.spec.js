import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('renders the message prop in h1 element', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Test Message' } })
    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('Test Message')
  })

  it('contains links to Vite and Vue 3 documentation', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Test' } })
    const links = wrapper.findAll('a')
    expect(links).toHaveLength(2)
    expect(links[0].attributes('href')).toBe('https://vite.dev/')
    expect(links[1].attributes('href')).toBe('https://vuejs.org/')
  })

  it('has green class on h1 element', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Test' } })
    const h1 = wrapper.find('h1')
    expect(h1.classes()).toContain('green')
  })

  it('renders h3 with success message', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Test' } })
    const h3 = wrapper.find('h3')
    expect(h3.text()).toContain('successfully created a project')
  })
})
