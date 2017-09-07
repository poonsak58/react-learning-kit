import {
    apiEndpoint
} from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

export default () => {
    const client = createRestApiClient().withConfig({
        baseURL: apiEndpoint
    });
    return {
        userList: ({
            page = 1,
            sort = null,
            sortDir = 1
        }) => client.request({
            method: 'GET',
            url: '/api/agoda-learning/user-list',
            params: {
                page,
                sort,
                sortDir
            }
        }),
    };
};
