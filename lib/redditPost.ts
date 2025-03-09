/*
 * Copyright (c) 2019-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import logger from './logger.ts';
import colors from 'colors';
import { PostParameters } from './types/types.ts';
import generateCouponMessage from './utils/generateCoupon.ts';

const prepareRedditPost = (params: PostParameters): string => {
  const status = generateCouponMessage(params);
  logger.info(`[${colors.green('✔')}] Reddit post prepared: ${colors.cyan(status)}`);
  return status;
}

export default prepareRedditPost;