const GetRouter = {}
const index = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('Src/index/index').default)
    },'index')
}

export default index