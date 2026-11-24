# Nosy — One Word From Grandma

[![One Word From Grandma](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![Rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/museshiro/one-word-grandma-20261124/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![Reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/museshiro/one-word-grandma-20261124/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

Entry for [One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16) on make.fun.

## The word

**Nosy**

The single word our grandma would text about AI. The machine knows your searches, your messages, your habits, everything about you — so she scolds it the way she scolds the neighbour who watches the street from behind the curtain: it is nosy.

## How it works

`main.ts` (Node 22, standard library only) writes exactly one word to `$MAKEFUN_OUTPUT_DIR/entry.txt`. It refuses to write anything that is not exactly one word of 1–30 characters, mirroring the competition's gate. The output is deterministic: no clock, no randomness, no network.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Referral

Built with [make.fun](https://make.fun/r/xrr5vp10).
