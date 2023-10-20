import { TEST_CONSTANTS } from '../../constants'
import {
  getAllComponentGroups,
  createComponentGroup,
  getComponentGroup,
  deleteComponentGroup
} from 'api'

describe('Get All Component Groups', () => {
  it('returns an object of all component groups', async () => {
    const channels = await getAllComponentGroups(
      TEST_CONSTANTS.ENVIRONMENT,
      TEST_CONSTANTS.X_AUTH_TOKEN,
      TEST_CONSTANTS.CHANNEL_AND_PROJECT
    )
      .then(response => {
        console.log(response.data)
        return response.data
      })
      .catch(error => {
        console.error('getAllComponentGroups', error)
        return error.response.status
      })

    await expect(typeof channels).toBe('object')
  })
})


describe('Create Component Group', () => {
  it('creates a new component group', async () => {
    const data = {
      name: TEST_CONSTANTS.COMPONENT_GROUP,
      hidden: "false",
      system: "false"
    }

    const status = await createComponentGroup(
      TEST_CONSTANTS.ENVIRONMENT,
      TEST_CONSTANTS.X_AUTH_TOKEN,
      TEST_CONSTANTS.CHANNEL_AND_PROJECT,
      TEST_CONSTANTS.COMPONENT_GROUP,
      data
    )
      .then(response => {
        console.log('createComponentGroup', response.status)
        return response.status
      })
      .catch(error => {
        console.error('createComponentGroup', error)
        return error.response.status
      })

    await expect(status).toEqual(201)
  })
})


describe('Get Component Group', () => {
  it('returns the newly created component group', async () => {
    const componentGroup = await getComponentGroup(
      TEST_CONSTANTS.ENVIRONMENT,
      TEST_CONSTANTS.X_AUTH_TOKEN,
      TEST_CONSTANTS.CHANNEL_AND_PROJECT,
      TEST_CONSTANTS.COMPONENT_GROUP
    )
      .then(response => {
        console.log(response.data)
        return response.data
      })
      .catch(error => {
        console.error('getComponentGroup', error)
        return error.response.status
      })

    await expect(typeof componentGroup).toBe('object')
    await expect(componentGroup.name).toEqual(TEST_CONSTANTS.COMPONENT_GROUP)
  })
})


describe('Delete Component Group', () => {
  it('deletes the newly created component group', async () => {
    const status = await deleteComponentGroup(
      TEST_CONSTANTS.ENVIRONMENT,
      TEST_CONSTANTS.X_AUTH_TOKEN,
      TEST_CONSTANTS.CHANNEL_AND_PROJECT,
      TEST_CONSTANTS.COMPONENT_GROUP
    )
      .then(response => {
        console.log('createComponentGroup', response.status)
        return response.status
      })
      .catch(error => {
        console.error('createComponentGroup', error)
        return error.response.status
      })

    await expect(status).toEqual(200)
  })
})
