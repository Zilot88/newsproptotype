import { NewsStorageService } from '../application/ports'

import { useStore } from './store'

// It's also possible to split the whole storage into atomic stores.
// Inside corresponding hooks we can apply memoization, optimizations, selectors...
// Well, you get the idea.

export function useNewsStorage(): NewsStorageService {
  return useStore()
}
