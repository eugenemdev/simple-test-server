'use strict'
import Model from './model.js'
import View from './view.js'

/**
 * controller Home
 * @param model
 * @param view
 *
 * @return posts
 */

class Home {
  constructor () {
    this.model = new Model()
    this.view = new View()
    this.posts = {}
  }

  async render () {
    this.posts = await this.model.setPosts()
    const section = await this.view.appendPosts(this.posts)
    return section
  }

  afterRender () {
  }
}

export default Home
