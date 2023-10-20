import { TEST_CONSTANTS } from './constants'

describe('config vars', () => {
  it('should return environment variable', () => {
    const environment = TEST_CONSTANTS.ENVIRONMENT
    expect(environment).not.toBeNull
    expect(typeof environment).toBe('string')
    expect(environment.length).toBeGreaterThan(0)
  })
  it('should return xAuthToken variable', () => {
    const token = TEST_CONSTANTS.X_AUTH_TOKEN
    expect(token).not.toBeNull
    expect(typeof token).toBe('string')
    expect(token.length).toBeGreaterThan(0)
  })
  // it('should return channel variable', () => {
  //     expect(typeof global.channelId).toBe('string')
  // })
  // it('should return path variable', () => {
  //     expect(typeof global.path).toBe('string')
  // })
})
