import { shallowMount } from '@vue/test-utils'
import Accueil from '../../src/views/Accueil.vue'

describe('Test sur le h1 d\' accueil envoie le bon composant', () => {
  it('H1 doit avoir la valeur de content dans Data', () => {
    const wrapper = shallowMount(Accueil, {
      data() {
        return {
            content: 'Accueil de mon app',
        }
      }
    })
    // vérifie que `content` est restitué
    expect(wrapper.find('h1').text()).toEqual('Accueil de mon app')
  })
})