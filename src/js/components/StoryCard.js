import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDOM";
import DateConverter from "../utils/DateConverter";

class StoryCard extends LitWithoutShadowDom{
    static properties = {
        photoUrl: { type: String, reflect: true},
        name: { type: String, reflect: true},
        description: { type: String, reflect: true},
        createdAt: { type: String, reflect: true},
        classes: {type: String, reflect: true}
    }

    constructor(){
        super()

        this.photoUrl = ''
        this.name = ''
        this.description = ''
        this.createdAt = ''
        this.classes = ''
    }

    render(){
        return html `
            <div class"col">
                <div class="card ${this.classes}">
                    <img src=${this.photoUrl} class="card-img-top" alt=${this.name}-photos" />
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text">${this.description}</p>
                    </div>
                <div class="card-footer text-muted">${DateConverter(this.createdAt)}</div>
                </div>
            </div>
        `
    }
}

customElements.define('story-card', StoryCard)