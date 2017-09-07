class FakeStore {
    constructor() {
        this.data = {};

        this.getData = this.getData.bind(this);
        this.setData = this.setData.bind(this);
    }

    getData() {
        return this.data;
    }

    setData(key, value) {
        this.data[key] = value;
    }
}

let mFakeStore = null;

export default {
    getStore: () => {
        if (!mFakeStore) {
            mFakeStore = new FakeStore();
        }

        return mFakeStore;
    }
};
