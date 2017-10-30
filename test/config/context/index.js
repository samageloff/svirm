// require all test .js files
const testsContext = require.context('../../', true, /^(?!\.\/config\/).*\.js$/)
testsContext.keys().forEach(testsContext)

// require all lib component .js files
const componentsContext = require.context('../../src/', true, /^.*\.js$/)
componentsContext.keys().forEach(componentsContext)
