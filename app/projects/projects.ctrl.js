import { ProjectsView } from './projects.view'

class ProjectsComponent {
  constructor(el) {
    this.container = el
    this.view = new ProjectsView()
    this.initProjectsComponent()
  }

  initProjectsComponent() {
    this.setupView()
  }

  setupView() {
    this.view.render(this.container)
  }
}

const projects = {
  init(wrapperEl) {
    // const wrapperEl = document.querySelector('#projects')
    if (wrapperEl) {
      const dash = new ProjectsComponent(wrapperEl) // eslint-disable-line no-unused-vars
    }
  },
}

export default projects