# 03 – Effects and Fetch

A focused demo of `useEffect` for data fetching in React.

## What this covers

| # | Concept | Where |
|---|---------|-------|
| 1 | `useEffect` with **empty dependency array `[]`** — runs once on mount | User list fetch in `App.jsx` |
| 2 | `useEffect` with a **dependency** — re-runs when state changes | Post list fetch in `App.jsx` |
| 3 | **Cleanup function** — `AbortController` cancels stale requests | Both fetch effects |
| 4 | **Non-fetch side effect** — updating the document title | Effect 3 in `App.jsx` |
| 5 | **Loading / error / success** state pattern | All data state in `App.jsx` |

## Key points

```jsx
// Run once on mount (empty array)
useEffect(() => { /* fetch */ return () => controller.abort() }, [])

// Re-run when selectedUserId changes
useEffect(() => { /* fetch */ return () => controller.abort() }, [selectedUserId])
```

The cleanup function returned from `useEffect` runs:
- Before the effect runs again (when a dependency changes)
- When the component unmounts

This prevents **race conditions**: if the user clicks a different user before the first
response arrives, the stale request is aborted and its result is silently dropped.

## Running

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. The app needs an internet connection because it fetches sample data from JSONPlaceholder.

## Completed tasks

- Fetched all users once when the app mounts
- Used an empty dependency array for the first `useEffect`
- Fetched posts again when the selected user changes
- Used `selectedUserId` as an effect dependency
- Used `AbortController` to cancel old or unmounted requests
- Added loading, error, idle, and success states
- Updated the browser tab title with a separate effect

## Test in the browser

1. Check that the page first shows `Loading users…`.
2. Confirm that a list of users appears.
3. Before choosing a user, confirm the posts section says `Pick a user`.
4. Click a user and confirm the posts section changes to `Loading posts…`.
5. Confirm that posts for the selected user appear.
6. Click a different user and confirm the post list changes.
7. Check that the browser tab title changes to the selected user's name.

The app already handles fetch failures and shows an error message if JSONPlaceholder cannot be reached.
