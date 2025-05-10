# Her Court: API Route Map

_Last updated: 2025-05-03 by Sara Hanlon_

---

## 🔐 1. Authentication Routes

### ➔ POST `/signup`

- **Purpose:** Create a new user account
- **Input:**  
  `{ email, username, password, safeword, orientation, relationship_status, fantasy_tags, limits }`
- **Response:**  
  `{ success: true, user_id, message }`

---

### ➔ POST `/login`

- **Purpose:** Log in user
- **Input:**  
  `{ email, password }`
- **Response:**  
  `{ success: true, userProfile: { user_id, domme_assigned, token_balance, tier_status } }`

---

## 📝 2. Task Routes

### ➔ GET `/tasks/assigned`

- **Purpose:** Fetch current tasks for user
- **Input:**  
  *(Auth token)*
- **Response:**  
  `{ tasks: [ { id, type, description, due_at, proof_type_required, status } ] }`

---

### ➔ POST `/tasks/submit`

- **Purpose:** Submit proof for a task
- **Input:**  
  `{ task_id, proof_type, proof_content }`
- **Response:**  
  `{ success: true, points_awarded, new_obedience_points, message }`

---

### ➔ GET `/tasks/history`

- **Purpose:** Get past tasks & statuses
- **Input:**  
  *(Auth token)*
- **Response:**  
  `{ history: [ { id, type, status, points_awarded, submitted_at } ] }`

---

## 💬 3. Confession Routes

### ➔ POST `/confessions/submit`

- **Purpose:** Submit a confession (text or audio)
- **Input:**  
  `{ content_type, content }`
- **Response:**  
  `{ success: true, confession_id, message }`

---

### ➔ GET `/confessions/user`

- **Purpose:** Fetch user’s past confessions & Domme feedback
- **Input:**  
  *(Auth token)*
- **Response:**  
  `{ confessions: [ { id, content_type, content, domme_comment, domme_rating, submitted_at } ] }`

---

## 🎙️ 4. Voice Drop Routes

### ➔ GET `/voice-drops/latest`

- **Purpose:** Get latest voice drop sent to user
- **Input:**  
  *(Auth token)*
- **Response:**  
  `{ voice_drop: { id, name, domme_persona, audio_url, description, sent_at } }`

---

## 💸 5. Tribute & Token Routes

### ➔ POST `/tokens/purchase`

- **Purpose:** Process a tribute/token purchase
- **Input:**  
  `{ payment_method, token_pack_id }`
- **Response:**  
  `{ success: true, new_token_balance, message }`

---

### ➔ GET `/tokens/history`

- **Purpose:** Fetch token purchase history
- **Input:**  
  *(Auth token)*
- **Response:**  
  `{ purchases: [ { id, amount, payment_status, purchased_at } ] }`

---

## 🎬 6. Scene Routes

### ➔ GET `/scenes/available`

- **Purpose:** Fetch available scenes (locked & unlocked status)
- **Input:**  
  *(Auth token)*
- **Response:**  
  `{ scenes: [ { id, name, domme_persona, token_cost, type, unlocked } ] }`

---

### ➔ POST `/scenes/unlock`

- **Purpose:** Unlock a new scene using tokens
- **Input:**  
  `{ scene_id }`
- **Response:**  
  `{ success: true, new_token_balance, unlocked_scene: { id, audio_url } }`

---

## 🙋 7. Appeals & Forgiveness Routes

### ➔ POST `/appeals/submit`

- **Purpose:** Submit an appeal for a task failure
- **Input:**  
  `{ task_id, appeal_text, appeal_audio_url (optional) }`
- **Response:**  
  `{ success: true, appeal_id, message }`

---

### ➔ POST `/forgiveness/tribute`

- **Purpose:** Offer tribute to regain progression
- **Input:**  
  `{ task_id, tokens_spent }`
- **Response:**  
  `{ success: true, new_token_balance, message }`

---

## 🤝 8. Cam Model Session Routes

### ➔ POST `/cam-session/request`

- **Purpose:** Request a cam model session
- **Input:**  
  `{ cam_model_name, fantasy_tags }`
- **Response:**  
  `{ success: true, session_id, message }`

---

### ➔ GET `/cam-session/history`

- **Purpose:** View past cam session requests
- **Input:**  
  *(Auth token)*
- **Response:**  
  `{ sessions: [ { id, cam_model_name, fantasy_tags, status, requested_at, completed_at } ] }`

---

## 🔧 9. Admin & Misc (Phase 2+)

- `/admin/override` (POST): Manually credit tokens, adjust tiers
- `/admin/tasks/manual-assign` (POST): Manually assign tasks

---

# ✅ Notes

- **Auth:** All routes (except `/signup` and `/login`) require **auth token header**
- **Errors:** Returns `{ success: false, error_message }` for errors
- **Security:** Data validation & anti-spam measures on submit routes

---
