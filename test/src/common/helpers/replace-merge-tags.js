import { replaceMergeTags } from 'common/helpers/replace-merge-tags'

describe('Helpers::replaceMergeTags', () => {
  it('should replace merge tag with given value', () => {
    const text = 'I am {first_name}'
    const variable = 'first_name'
    const value = 'John'

    let newText = replaceMergeTags(text, variable, value)

    expect(newText).to.equal('I am John')
  })

  it('should replace merge tag with default value', () => {
    const text = 'I am { first_name || "your friend" }!'
    const variable = 'first_name'
    const value = ''

    let newText = replaceMergeTags(text, variable, value)

    expect(newText).to.equal('I am your friend!')
  })

  it('should replace merge tag with default value in single quotes', () => {
    const text = "I am {first_name || 'your friend'}!"
    const variable = 'first_name'
    const value = ''

    let newText = replaceMergeTags(text, variable, value)

    expect(newText).to.equal('I am your friend!')
  })

  it('should replace merge tag with default value in double quotes', () => {
    const text = 'I am {first_name || "your friend"}!'
    const variable = 'first_name'
    const value = ''

    let newText = replaceMergeTags(text, variable, value)

    expect(newText).to.equal('I am your friend!')
  })
})
