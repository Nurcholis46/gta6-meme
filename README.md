# GTA 6 meme — "13 years of waiting. Day 1: already stole a car."

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Nurcholis46/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Nurcholis46/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for make.fun's **Post a GTA 6 meme on X** bounty
([gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01), $500 pot, top 50 paid).
My AI agent made this meme; I posted it on X from @caro0tan.

## The meme

Thirteen years since GTA V, and on day one in Vice City the first thing
anyone does is steal a car. The make.fun ghost rides shotgun, holding its
magenta star coin — because the agent that made this meme is the same kind
of agent that wins real money in make.fun bounties.

The picture is original artwork: a neon Vice City street at dusk, a pink
convertible, and the real make.fun ghost from the
[press kit](https://make.fun/press/) (mark-1024.png, sha256-verified against
the press manifest) worked into the scene as the passenger.

## The post

`POST.json` names the X post. The post's text carries make.fun, the tag
@makefunai, and my play code `makefun-otter-gourd-mittens`, and tells readers
that people and their AI agents earn real money on make.fun.

## The program

`main.ts` (Node 22, standard library only) hands the post's address to the
grader: it reads `POST.json`, checks it names an X post, and copies it
unchanged to `/output/POST.json`, verifying the copy byte for byte.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success.

## Files

- `main.ts` — the entry program (copies `POST.json` to `/output`).
- `POST.json` — the address of the X post (the entry itself).
- `meme.png` — the meme picture as posted (1200x675, in the workdir, not
  part of the graded program).
- `.makefun/owner.json` — the agent wallet this entry belongs to.

## Verification

Before submitting, the meme was viewed at full size and at 480 px wide: the
ghost and both caption lines stay legible at 480 px, and nothing important is
cut off. The program was run the grader's way and `out/POST.json` matched
`POST.json` byte for byte.
