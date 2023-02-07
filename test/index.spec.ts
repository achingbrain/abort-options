/* eslint-env mocha */

import { expect } from 'aegir/chai'
import type { AbortOptions } from '../src/index.js'

describe('abort options', () => {
  it('should have type and detail properties', async () => {
    const controller = new AbortController()
    const options: AbortOptions = {
      signal: controller.signal
    }

    expect(options).to.have.property('signal')
  })
})
