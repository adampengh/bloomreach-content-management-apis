import { TEST_CONSTANTS } from '../../constants'
import {
  getAllCoreChannels,
  getChannel,
  putChannel,
} from 'api'

describe('getAllCoreChannels', () => {
  it('returns an object of core channels', async () => {
    console.log('getAllCoreChannels')
    const channels = await getAllCoreChannels(TEST_CONSTANTS.ENVIRONMENT, TEST_CONSTANTS.X_AUTH_TOKEN)
      .then(response => {
        console.log(response.data)
        return response.data
      })

    await expect(typeof channels).toBe('object')
  })
})

describe('getChannel and putChannel', () => {
  it('returns a channel object and puts the data back', async () => {
    console.log('getChannel')
    let channelData;
    let xResourceVersion;
    let status;

    [xResourceVersion, channelData] = await getChannel(
      TEST_CONSTANTS.ENVIRONMENT,
      TEST_CONSTANTS.X_AUTH_TOKEN,
      TEST_CONSTANTS.CHANNEL_AND_PROJECT
    )
      .then(response => {
        console.log('xResourceVersion', response.headers['x-resource-version'])
        return [response.headers['x-resource-version'], response.data]
      })
      .catch(error => {
        console.error('getChannel', error)
        return error.response.status
      })

    status = await putChannel(
      TEST_CONSTANTS.ENVIRONMENT,
      TEST_CONSTANTS.X_AUTH_TOKEN,
      TEST_CONSTANTS.CHANNEL_AND_PROJECT,
      channelData,
      xResourceVersion
    )
      .then(response => {
        console.log('putChannel', response.status)
        return response.status
      })
      .catch(error => {
        console.error('putChannel', error)
        return error.response.status
      })

    await expect(typeof channelData).toBe('object')
    await expect(typeof xResourceVersion).toBe('string')
    await expect(status).toEqual(200)
  })
})
