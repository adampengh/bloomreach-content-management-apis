import { TEST_CONSTANTS } from '../../constants'
import {
  getAllLayouts,
  getLayout,
  putLayout,
  deleteLayout
} from 'api'
import { testLayout } from '../../mock-data/test-layout'

describe('Get All Layouts', () => {
  it('returns an object of all layouts', async () => {
    const channels = await getAllLayouts(
      TEST_CONSTANTS.ENVIRONMENT,
      TEST_CONSTANTS.X_AUTH_TOKEN,
      TEST_CONSTANTS.CHANNEL_AND_PROJECT
    )
      .then(response => {
        console.log(response.data)
        return response.data
      })
      .catch(error => {
        console.error('getAllLayouts', error)
        return error.response.status
      })

    await expect(typeof channels).toBe('object')
  })
})


describe('Create Layout', () => {
  it('creates a new layout', async () => {
    const layoutJson = {
      ...testLayout,
      name: TEST_CONSTANTS.LAYOUT
    }

    const status = await putLayout(
      TEST_CONSTANTS.ENVIRONMENT,
      TEST_CONSTANTS.X_AUTH_TOKEN,
      TEST_CONSTANTS.CHANNEL_AND_PROJECT,
      TEST_CONSTANTS.LAYOUT,
      layoutJson
    )
      .then(response => {
        console.log('putLayout', response.status)
        return response.status
      })
      .catch(error => {
        console.error('putLayout', error)
        return error.response.status
      })

    await expect(status).toEqual(201)
  })
})


describe('Get Layout', () => {
  it('returns the newly created layout', async () => {
    const layout = await getLayout(
      TEST_CONSTANTS.ENVIRONMENT,
      TEST_CONSTANTS.X_AUTH_TOKEN,
      TEST_CONSTANTS.CHANNEL_AND_PROJECT,
      TEST_CONSTANTS.LAYOUT
    )
      .then(response => {
        console.log('getLayout', response.data)
        return response.data
      })
      .catch(error => {
        console.error('getLayout', error)
        return error.response.status
      })

    await expect(typeof layout).toBe('object')
    await expect(layout.name).toEqual(TEST_CONSTANTS.LAYOUT)
  })
})


describe('Delete Layout', () => {
  it('deletes the newly created layout', async () => {
    const status = await deleteLayout(
      TEST_CONSTANTS.ENVIRONMENT,
      TEST_CONSTANTS.X_AUTH_TOKEN,
      TEST_CONSTANTS.CHANNEL_AND_PROJECT,
      TEST_CONSTANTS.LAYOUT
    )
      .then(response => {
        console.log('deleteLayout', response.status)
        return response.status
      })
      .catch(error => {
        console.error('deleteLayout', error)
        return error.response.status
      })

    await expect(status).toEqual(200)
  })
})
