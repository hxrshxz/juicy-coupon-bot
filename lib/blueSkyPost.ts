/*
 * Copyright (c) 2019-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from './logger'
import colors from 'colors'
import { type PostParameters } from './types/types'
import generateCouponMessage from './utils/generateCoupon'

const prepareBlueSkyPost = (params: PostParameters): string => {
  const status = generateCouponMessage(params)
  logger.info(`[${colors.green('✔')}] BlueSky post prepared: ${colors.cyan(status)}`)
  return status
}

export default prepareBlueSkyPost
