/**
 * An object that contains an AbortSignal as
 * the optional `signal` property.
 *
 * @example
 *
 * ```js
 * const controller = new AbortController()
 *
 * aLongRunningOperation({
 *   signal: controller.signal
 * })
 *
 * // later
 *
 * controller.abort()
 * ```
 */
export interface AbortOptions {
  signal?: AbortSignal
}
