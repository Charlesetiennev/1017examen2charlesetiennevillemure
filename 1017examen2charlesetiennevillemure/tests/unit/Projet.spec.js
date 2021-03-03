import { shallowMount } from '@vue/test-utils'
import Projet from '../../src/views/Projet.vue'

describe('Verification que le bon nombre de liens s\'affiche ', () => {
  it('6 liens doit etre retrouver', () => {
    const wrapper = shallowMount(Projet)
    // Le nombre de liens est egal a 6
    expect(wrapper.findAll('li').length).toBe(6)
  })
})