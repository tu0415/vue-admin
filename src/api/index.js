const modulesContext = require.context('./modules', true, /\.js$/)
let API = {}
modulesContext.keys().forEach((modules) => {
	let attr = modules.replace(/^\.\/|\.js$/g, '')
	API[attr] = modulesContext(modules).default
})

export default API
