import { mount } from '@vue/test-utils'
import AddTodo from '@/components/Todos/AddTodo.vue'

describe('AddTodo', () => {
  const wrapper = mount(AddTodo)

  it('renders the correct form', () => {
    expect(wrapper.find('input#inputName').exists()).toBe(true)
    expect(wrapper.find('input#inputTime').exists()).toBe(true)
    expect(wrapper.find('div#buttonClose').exists()).toBe(true)
    expect(wrapper.find('div#buttonSubmit').exists()).toBe(true)
  })  

  it('form: Name - is working', () => {
    expect(wrapper.vm.title).toBe('')

    const inputName = wrapper.find('input#inputName')
    inputName.setValue('SomeGoodGuys')

    expect(inputName.element.value).toBe('SomeGoodGuys')
  })  
})