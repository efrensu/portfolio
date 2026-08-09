import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PortfolioView from '@/views/PortfolioView.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(PortfolioView, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
