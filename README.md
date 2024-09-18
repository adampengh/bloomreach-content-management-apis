# Bloomreach Content Management APIs

This library provides a collection of functions for interacting with the [Bloomreach Content Management APIs](https://documentation.bloomreach.com/content/reference/management-apis)
for JavaScript-based applications.

## Get Started

### Installation

To get the package into your project with [NPM](https://docs.npmjs.com/cli/npm):

```bash
npm install bloomreach-content-management-apis
```

And with [Yarn](https://yarnpkg.com):

```bash
yarn add bloomreach-content-management-apis
```

## Reference

Typedoc for the Bloomreach Content Management APIs is automatically generated and published
to https://adampengh.github.io/bloomreach-content-management-apis/modules.html

### Usage

The following code snippet demonstrates how to copy a component from one CMS environment to another

```javascript
import { getComponent, putComponent } from 'bloomreach-content-management-apis';

const compontentGroup = 'brx-reference-spa';
const componentName = 'referencespa-content';

// Source environment variables
const source = {
  environment: 'test-customer',
  xAuthToken: '12345678-1234-1234-1234-123456789010',
  channelId: 'reference-spa-v1a2B'
}

// Target environment variables
const target = {
  environment: 'customer',
  xAuthToken: 'abcdefgh-abcd-abcd-abcd-abcdefghijkl',
  channelId: 'reference-spa-vA1b2'
}

/**
 * Check if component exists in Target CMS Environment/Channel
 */
const xResourceVersion = await getComponent(
  target.environment,
  target.xAuthToken,
  target.channelId,
  componentGroup,
  componentName
)
  .then(response => {
    console.log('Check for Existing Component Success', response.headers)
    return response.headers['x-resource-version']
  })
  .catch(error => console.error('Get Component Error', error.message))

/**
 * Get component configuration from Source CMS Environment/Channel
 */
const componentData = await getComponent(
  source.environment,
  source.xAuthToken,
  source.channelId,
  componentGroup,
  componentName
)
  .then(response => {
    console.log('Get Component Success', response.data)
    return response.data
  })
  .catch(error => console.error('Get Component Error', error))

/**
 * Put component configuration in Target CMS Environment/Channel
 */
if (componentData) {
  await putComponent(
    target.environment,
    target.xAuthToken,
    target.channelId,
    componentGroup,
    componentName,
    componentData,
    xResourceVersion
  )
    .then(response => console.log('Put Component Success'))
    .catch(error => console.error('Put Component Error', error))
}
```

## License

Published under the [MIT](https://opensource.org/license/mit/) license.
