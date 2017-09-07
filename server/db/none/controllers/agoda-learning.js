import Chance from 'chance';

const chance = new Chance();

export function userList(req, res) {
    const usersList = [];
    for (let i = 1; i <= 105; i += 1) {
        usersList.push({
            id: i,
            first_name: chance.first(),
            last_name: chance.last(),
            email: chance.email(),
            telephone: chance.phone({ country: 'us' })
        });
    }

    return res.json({
        usersList
    });
}

export default {
    userList
};
