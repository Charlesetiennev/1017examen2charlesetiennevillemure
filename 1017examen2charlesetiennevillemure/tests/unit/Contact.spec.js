import { shallowMount } from '@vue/test-utils'
import Contact from '../../src/views/Contact.vue'

describe('Test sur le nombres d\'options dans le sélecteur du formulaire', () => {
  it('Vérifie la longueur de option qui est égal aux nombres de choix', () => {
    const wrapper = shallowMount(Contact)
    // vérifie que option est égal a 3 choix
    expect(wrapper.findAll('option').length).toBe(3)
  })
})