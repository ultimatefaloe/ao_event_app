# AO Event App — Project Completion Guide

## 1) What is already done (from current codebase)

Your project already has:

- Routing and pages for:
  - `/events` (list)
  - `/events/new` (create)
  - `/events/:id` (detail)
  - `/events/:id/edit` (edit)
- Auth pages wired to API (`/auth/login`, `/auth/register`) through:
  - `src/services/auth.service.js`
  - `src/context/AuthContext.jsx`
  - `src/stores/useToken.store.js`
- A reusable fetch helper:
  - `src/libs/backend-fetch.js`
- Local event CRUD in Zustand (currently not API-based):
  - `src/stores/useEvent.store.js`

Your missing core work is:

1. Replace local event CRUD with real API integration.
2. Create and wire **My Events** page (`/events/my-events`) using `GET /events/my-events`.

---

## 2) API base and endpoint map (from docs)

Base URL:

- `https://event-api-service-3jtj.onrender.com/api/v1`

Event endpoints:

- `GET /events`
- `POST /events` (auth required)
- `GET /events/my-events` (auth required)
- `GET /events/{id}` (auth required)
- `PUT /events/{id}` (auth required, owner only)
- `DELETE /events/{id}` (auth required, owner only)

Auth endpoints already in use:

- `POST /auth/login`
- `POST /auth/register`
- `GET /auth/me`
- `POST /auth/logout`

---

## 3) Step-by-step procedure for your student

## Step 1 — Add event endpoint constants

**File:** `src/libs/constants/`

1. Create a new file `event-endpoint.js` with:
   - `LIST: "/events"`
   - `MY_EVENTS: "/events/my-events"`
   - `DETAIL: (id) => \`/events/${id}\``
2. Export it from `src/libs/constants/index.js`.

Reason: avoid hardcoded strings across services/pages.

---

## Step 2 — Create event service layer (API calls)

**File:** `src/services/event.service.js`

Create functions:

1. `getEvents(query)`
2. `getMyEvents(token, query)`
3. `getEventById(token, id)`
4. `createEvent(token, payload)`
5. `updateEvent(token, id, payload)`
6. `deleteEvent(token, id)`

Rules:

- Reuse `backendFetch`.
- Pass `token` for protected endpoints.
- Return consistent shape:
  - success path: API response
  - failure path: `{ error: message }`

---

## Step 3 — Normalize event payload in one place

**File:** `src/services/event.service.js` (or `src/libs/` helper)

Create a small mapper before POST/PUT:

- Ensure payload keys match API:
  - `name`
  - `description`
  - `date` (ISO string)
  - `location`
  - `attendees` (number)
  - `thunmailUrl`

Important:

- `EventForm` currently uses `<input type="date">`, which gives `YYYY-MM-DD`.
- Convert this to ISO (e.g. `new Date(value).toISOString()`) before API call.

---

## Step 4 — Replace local CRUD usage on Create Event page

**File:** `src/pages/NewEvent.jsx`

1. Stop using `useEventStore().createEvent`.
2. Use:
   - token from `useTokenStore`
   - `createEvent` from new event service
3. On success:
   - toast success
   - navigate to `/events` or `/events/:id`
4. On failure:
   - show toast with backend message.

---

## Step 5 — Replace local read/update on Edit Event page

**File:** `src/pages/EditEvent.jsx`

1. Replace store calls (`eventById`, `editEvent`) with API:
   - on load: `getEventById(token, id)`
   - on submit: `updateEvent(token, id, payload)`
2. Keep loading and not-found states explicit.
3. On success:
   - toast success
   - navigate to `/events/:id`.

---

## Step 6 — Replace local read/delete on Event Detail page

**File:** `src/pages/EventDetail.jsx`

1. Load event via `getEventById(token, id)`.
2. Implement delete action using `deleteEvent(token, id)`.
3. Handle:
   - `403` owner-only errors
   - `404` not found
4. On delete success:
   - toast success
   - navigate to `/events`.

---

## Step 7 — Replace local list on Events page

**File:** `src/pages/Events.jsx`

1. Stop consuming `useEventStore().events`.
2. On page load, call `getEvents`.
3. Wire filters into query params:
   - `name` (from searchTerm)
   - `location`, `date`, `attendees` only when needed
4. Add loading + empty + error states.

Note: your current category/status filter UI is local-only and not in API schema.  
Either:

- remove them for now, or
- map them to supported query params later.

---

## Step 8 — Create My Events page

**New file:** `src/pages/MyEvents.jsx`

Build this page by reusing the list pattern from `Events.jsx`:

1. On mount call `getMyEvents(token)`.
2. Render cards using existing `EventCard`.
3. Show:
   - loading state
   - empty state (“You have not created any events yet”)
   - error state (including unauthorized)
4. Add button/link to create a new event.

---

## Step 9 — Add route and navigation for My Events

**Files:**

- `src/App.jsx`
- `src/components/layouts/NavBar.jsx`

1. Add route:
   - `/events/my-events` → `MyEvents` component
2. Add nav link “My Events”.
3. (Recommended) Show it only when authenticated.

---

## Step 10 — Optional cleanup (after API flow works)

Possible cleanup scope:

1. Stop using local event store for primary event data (`useEvent.store.js`).
2. Keep it only if needed for temporary UI cache.
3. Remove dead code/comments from:
   - `src/hooks/useEvent.js`
   - pages where local logic was commented out.

Do this only after all API paths are stable.

---

## Step 11 — Validation checklist (must pass)

Student should verify each item manually:

1. Register user → redirected and authenticated.
2. Login user → token persisted.
3. Create event → appears in:
   - `/events`
   - `/events/my-events`
4. Edit own event → changes visible in detail/list.
5. Delete own event → removed from both lists.
6. Access `/events/my-events` while logged out → blocked or clear unauthorized feedback.
7. Refresh browser → auth remains (persist store).

---

## Step 12 — Final quality pass

Before PR:

1. Run:
   - `npm run lint`
   - `npm run build`
2. Ensure no console-debug leftovers.
3. Open PR with screenshots:
   - Events list
   - My Events list
   - Create/Edit/Delete success flows

---

## 4) Suggested implementation order (strict)

1. Endpoint constants
2. Event service
3. NewEvent API
4. EditEvent API
5. EventDetail API + delete
6. Events list API
7. MyEvents page
8. Route + navbar link
9. Cleanup + lint/build + PR

Following this order reduces breakage and keeps each step testable.