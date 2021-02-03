import ProjectsHTML from './projects.html'

class ProjectsView {
  constructor() {
    this.content = ProjectsHTML
  }

  render(container) {
    container.innerHTML = this.content
  }
}

export { ProjectsView }
