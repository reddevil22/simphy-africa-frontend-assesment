import * as requestPromise from 'request-promise';
import { observable, action, decorate } from 'mobx';

class Store {
    data = [{}];

    getData = async (numberOfImages) => {
        const url = `https://api.thecatapi.com/api/images/get?format=json&results_per_page=${numberOfImages}&size=small&type=png`;

        const response = await requestPromise({ url, json: true });
        this.data = response.map((item, index) => {
            return {
                url: item.url,
                title: `Image ${index + 1}`,
                description: `This is the description for Image ${index + 1}`,
            }
        });
    };
}

decorate(Store, {
    data: observable,
    getData: action,
});

const store = new Store();
store.getData(10);
export default store;