import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDOM';

class StoryList extends LitWithoutShadowDom {
  static properties = {
    stories: { type: Array, reflect: true },
  };

  constructor(){
    super()

    this.stories = []
  }

  render(){
    return html`
        <div class="d-flex justify-content-between align-items-center">
            <h1>People Stories</h1>
            <a class="btn btn-primary text-capitalize" href="/add-story.html">
                <i class="bi bi-plus-lg me-1"></i>Share Story
            </a>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-3 g-4">
            ${this.stories.map(this._renderStoryItem)}
        </div>
    `
  }

  _renderStoryItem(story){
    return html`
        <story-card
            name=${story.name}
            photoUrl=${story.photoUrl}
            description=${story.description}
            createdAt=${story.createdAt}
            classes='shadow-sm'
        ></story-card>
    `
  }
}

customElements.define('story-list', StoryList)