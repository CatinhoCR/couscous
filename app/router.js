import Router from './_config/routing'
import Dashboard from './dashboard/dashboard.ctrl'
import Projects from './projects/projects.ctrl'

class RoutingModule {
  constructor(container) {
    this.body = container
    this.viewContainer = document.querySelector('#page-content')
    this.router()
  }

  router() {
    const router = new Router({
      mode: 'hash',
      root: '/',
    })
    // TODO: Login, Session Cookies, Auth Guards, Set Dynamic Token session
    // TODO: Actual routes, dashboard, components, get/set query params and resp
    router
      .add('dashboard', () => {
        Dashboard.init(this.viewContainer)
      })
      .add('projects', () => {
        Projects.init(this.viewContainer)
      })
      .add('', () => {
        this.viewContainer.innerHTML = '404'
        // TODO: Wildcard route handling and AUTH GUARDS
        console.log('webpack starterkit') // eslint-disable-line no-console
      })
  }
}

const routerModule = {
  init(el) {
    const app = new RoutingModule(el) // eslint-disable-line no-unused-vars
  },
}

export default routerModule
