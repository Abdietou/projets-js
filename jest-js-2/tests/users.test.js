import Users from "../src/user";
import axios from "axios";

jest.mock('axios');

describe('Users', () => {

    beforeEach(()  => {
        axios.mockClear();
    });

    const fakeResponse = [{name: 'John Doe'}];

    it('should return last user', async () => {
        axios.get.mockResolvedValue({data: fakeResponse})
        expect(await Users.getLastUserName()).toBe('John Doe')
    });

    it('should return last user witch fetch', async () => {
        fetch.mockResponseOnce(JSON.stringify(fakeResponse));
        expect(await Users.getLastUserNameFetch()).toBe('John Doe')
    });
}); 