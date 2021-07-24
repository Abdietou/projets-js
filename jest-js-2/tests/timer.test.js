import { sleep } from "../timer.js"

describe('Timer', () => {

    it.skip('shoud wait 3 seconds', async () => {
        const t = Date.now();
        await sleep(3);
        expect(Date.now() - t).toBeGreaterThanOrEqual(3000);
    });

    it.skip('shoud wait 3 seconds', async () => {
        const t = Date.now();
        await sleep(2);
        expect(Date.now() - t).toBeGreaterThanOrEqual(2000);
    });
});