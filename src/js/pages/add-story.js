const AddStory = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const storyForm = document.querySelector('#storyForm');
    storyForm.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        storyForm.classList.add('was-validated');

        this._sendPost();
      },
      false,
    );
  },

  _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      this._showModal();
    }
  },

  _getFormData() {
    const storyInput = document.querySelector('#validationCustomStory');
    const photoInput = document.querySelector('#validationCustomPhoto');

    return {
      story: storyInput.value,
      photo: photoInput.files[0],
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _showModal() {
    const modalElem = document.querySelector('modal-alert');
    modalElem.setAttribute('title', 'Success');
    modalElem.setAttribute('body', 'Your story has been posted');
    modalElem.show();
  },
};

export default AddStory;
