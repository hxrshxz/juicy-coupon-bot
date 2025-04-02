/*
 * Copyright (c) 2019-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from './logger.ts'
import colors from 'colors'
import { type PostParameters } from './types/types.ts'
import generateCouponMessage from './utils/generateCoupon.ts'

const prepareMastodonPost = (params: PostParameters): string => {
  const status = generateCouponMessage(params)
  logger.info(`[${colors.green('✔')}] Mastodon post prepared: ${colors.cyan(status)}`)
  return status
}

export default prepareMastodonPost
