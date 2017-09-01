
import {registry} from './src/registry'

import { ComponentABC } from './src/ComponentABC'


import {
  register,
  isRegistered,
  unregister,
  defaultLoader,
  defaultConfigRegistry
} from './src/loaders'

export default {
  ComponentABC,
  // -- Registry --
  get: registry.get,
  clearCachedDefinition: registry.clearCachedDefinition,

  // -- Loader --
  register,
  isRegistered,
  unregister,
  defaultLoader,
  // "Privately" expose the underlying config registry for use in old-IE shim
  _allRegisteredComponents: defaultConfigRegistry,

  get loaders () { return registry.loaders },
  set loaders (loaders) { registry.loaders = loaders }
}
