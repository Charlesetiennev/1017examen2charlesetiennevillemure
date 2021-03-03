import { shallowMount } from '@vue/test-utils'
import Footer from '../../src/components/Footer.vue'

describe('Le premier h1 de mon footer doit contenir mon nom complet.', () => {
  it('Data avec valeur de mon nom est correct', () => {
    const wrapper = shallowMount(Footer, {
      data() {
        return {
          nomFooter: 'Charles-Etienne Villemure',
        }
      }
    })
    // vérifie que `nomFooter` est restitué
    expect(wrapper.find('.nomFooter').text()).toEqual('Charles-Etienne Villemure')
  })
})