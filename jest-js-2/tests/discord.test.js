import { ping } from "../src/discord";

// testEnvironment: "node"
// pour faire ce test (désactiver par défaut)

describe('Discord', () => {

    it.skip('should dm the user', async () => {
        const channelMock = {
            send : jest.fn()
        }
        const createDMMock = jest.fn().mockResolvedValue(channelMock);
        const message = {
            delete : jest.fn().mockResolvedValue({}),
            reply: jest.fn(),
            author: {
                createDM: createDMMock
            }
        }

        await ping(message);
        expect(message.delete).toHaveBeenCalled();
        expect(channelMock.send).toHaveBeenCalledWith('pong');
    });

    it.skip('should reply to the user if dm are desactived', async () => {
        const createDMMock = jest.fn().mockRejectedValue({});
        const message = {
            delete : jest.fn().mockResolvedValue({}),
            reply: jest.fn(),
            author: {
                createDM: createDMMock
            }
        }

        await ping(message);
        expect(message.delete).toHaveBeenCalled();
        expect(message.reply).toHaveBeenCalledWith('pong');
    });
    
});