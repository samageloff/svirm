import Prefixer from 'inline-style-prefixer'

const InlineStylePrefixer = (styles) => {

  const prefixer = new Prefixer()
  const prefixedStyles = prefixer.prefix(styles)

  return prefixedStyles
}

export default InlineStylePrefixer
