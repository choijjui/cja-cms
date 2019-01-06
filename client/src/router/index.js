import VueRouter from 'vue-router'
import MainComponent from '../components/MainComponent'

import BoardWriteComponent from '../components/board/BoardWriteComponent'

export default new VueRouter({
    routes: [
        { path: "/", component: MainComponent },
        { path: "/board/write", component: BoardWriteComponent }
    ]
})