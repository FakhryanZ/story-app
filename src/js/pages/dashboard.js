const Dashboard = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchStories = await fetch('/data/DATA.json');
    const responseStories = await fetchStories.json();
    this._peopleStories = responseStories.listStory;
    this._populateStoryDataToCard(this._peopleStories);
  },

  _populateStoryDataToCard(storiesData = null) {
    if (!(typeof storiesData === 'object')) {
      throw new Error(`Parameter responseRecords should be an object.`);
    }

    if (!Array.isArray(storiesData)) {
      throw new Error('Parameter peopleStories should be an array.');
    }

    const storiesWrapper = document.querySelector("story-list")
    const storiesDataConv = JSON.stringify(storiesData)

    storiesWrapper.setAttribute('stories', storiesDataConv)
  },
};

export default Dashboard;
