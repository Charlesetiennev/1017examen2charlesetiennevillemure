import { shallowMount } from '@vue/test-utils'
import Header from '../../src/components/Header.vue';

describe('Header', () => {
  it('Vefirie que le menu contient 3 liens', () => {
    const wrapper = shallowMount(Header, {
      data() {
        return {
            routes: [
                {id: 1, name: 'Accueil', router:'/'},
                {id: 2, name: 'Contact', router:'/contact'},
                {id: 3, name: 'Projet', router:'/projet'},
            ]
        }
      }
    })
 const liensMenu = shallowMount(Header,{data: {Header},stubs:['router-link']});
expect(liensMenu.findAllComponents(liensMenu).length).toBe(stubs.length);
    // vérifie que `error` est restituée
    expect(wrapper.find('.liensMenu').exists()).toBeTruthy()

  })
})