describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it.skip('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
});
