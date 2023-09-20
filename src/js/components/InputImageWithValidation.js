import { html, nothing } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDOM';

class InputImageWithValidation extends LitWithoutShadowDom {
  static properties = {
    imageId: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();

    this.validFeedbackMessage = '';
    this.invalidFeedbackMessage = '';

    this._checkAvailabilityProperty()
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('imageId')) {
      throw new Error(
        `Atribut "imageId" harus diterapkan pada elemen ${this.localName}`,
      );
    }
  }

  render() {
    return html`
      <input
        type="file"
        class="form-control form-control-sm"
        id=${this.imageId || nothing}
        accept="image/*"
        ?required=${this.required}
      />
      <div class="valid-feedback">${this.validFeedbackMessage}</div>
      <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
    `;
  }
}

customElements.define('input-image-with-validation', InputImageWithValidation);
