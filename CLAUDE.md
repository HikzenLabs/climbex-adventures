# Climbex Adventures

Vite + React site. Content lives in `src/data/*.ts`, images in `public/images/`.
Vercel deploys `main` to production automatically; every PR gets a preview deploy.

## How to ship a change

`main` is protected: no direct pushes, every change goes through a PR with
1 approving review, and PRs can only be **squash** or **rebase** merged.

1. Start from fresh main:
   `git switch main && git pull && git switch -c <type>/<short-name>`
   (types: `feature/`, `fix/`, `content/`)
2. Make changes, check `npx vite build` passes, commit.
3. `git push -u origin HEAD` then `gh pr create --base main --fill`
4. Check the Vercel preview link on the PR.
5. A teammate approves, then: `gh pr merge <n> --squash --delete-branch`
6. `git switch main && git pull` — Vercel deploys main within a minute or two.

## Rules that avoid the usual mess

- Never commit on local `main`. If it happens, move the commits to a branch:
  `git switch -c fix/x && git branch -f main origin/main`
- One branch per PR, and never reuse a branch after its PR is merged —
  squash merges rewrite history, so the old branch diverges from main.
- Use `gh pr merge --squash` (`--merge` is blocked by the ruleset).
