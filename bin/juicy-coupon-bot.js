#!/usr/bin/env node
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('ts-node').register({ transpileOnly: true });
require('../bin/juicy-coupon-bot.ts');