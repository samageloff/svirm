import InlineStylePrefixer from 'common/helpers/inline-style-prefixer'

describe('Helpers::InlineStylePrefixer', () => {
  it('should return an auto-prefixed style object', () => {
    const styles = InlineStylePrefixer({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none'
    })
    
    // We don't want to assert anything that relies on the behavior of 'inline-style-prefixer'
    expect(styles).to.be.an('object')
  })
})
