import { shallowMount } from '@vue/test-utils'
import Profile from '../../src/views/Profile.vue'

describe('Verification de la valeur du H1', () => {
  it('Vérifie la valeur du H1 car le texte ne provient pas de data', () => {
    const wrapper = shallowMount(Profile)
    // vérifie que H1 est égal au résultat attendu.
    expect(wrapper.find('h1').text()).toEqual('Profile utilisateur')
  })
})