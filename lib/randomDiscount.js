/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

const logger = require('../lib/logger')
const colors = require('colors')

module.exports = () => {
  const discount = 10 * (Math.floor(Math.random() * 4) + 1) // 10, 20, 30 or 40
  logger.info(`[${colors.green('✔')}] Randomized discount: ${colors.cyan(discount + '%')}`)
  return discount
}
