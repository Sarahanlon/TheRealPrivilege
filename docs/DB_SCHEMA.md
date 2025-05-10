# Her Court: Database Schema

_Last updated: 2025-05-03 by Sara Hanlon_

---

## 🗄️ 1. Users Table

| **Field**             | **Type**     | **Description**                                        |
|-----------------------|--------------|--------------------------------------------------------|
| id                    | UUID (PK)    | Unique user ID                                         |
| email                 | String       | User login email                                       |
| username              | String       | Public-facing username                                 |
| password_hashed       | String       | Hashed password                                        |
| safeword              | String       | Required safeword text                                 |
| safeword_audio_url    | String (URL) | Optional: Audio submission of safeword                  |
| orientation           | String       | User’s sexual orientation                              |
| relationship_status   | String       | E.g., Single, Married, Other                            |
| domme_assigned        | String       | Assigned Domme/Dom persona                             |
| fantasy_tags          | Array[String]| E.g., sissy, pain, restraints                           |
| limits                | Text/JSON    | Custom user-defined limits                             |
| tier_status           | String       | Current tier (Watched, Considered, etc.)               |
| obedience_points      | Integer      | Points earned through tasks                            |
| token_balance         | Integer      | Tribute tokens                                         |
| confession_count      | Integer      | Total confessions submitted                            |
| created_at            | Timestamp    | Account creation date                                  |
| last_login_at         | Timestamp    | Last login date                                        |
| last_login_ip         | String       | Last login IP address                                  |
| last_login_device     | String       | User agent string (browser/OS)                          |

---

## 📝 2. Tasks Table

| **Field**            | **Type**     | **Description**                                        |
|----------------------|--------------|--------------------------------------------------------|
| id                   | UUID (PK)    | Unique task ID                                         |
| user_id              | UUID (FK)    | Linked to Users                                        |
| type                 | String       | Task type (Daily, Servitude, Punishment, etc.)         |
| domme_persona        | String       | Who assigned the task                                  |
| description          | Text         | Task description                                       |
| proof_type_required  | String       | Text, Photo, Audio                                     |
| status               | String       | Assigned, Submitted, Completed, Failed                 |
| proof_submission     | Text/URL     | Link or content of proof                               |
| assigned_at          | Timestamp    | Task assigned date/time                                |
| due_at               | Timestamp    | Task deadline                                          |
| submitted_at         | Timestamp    | When proof was submitted                               |
| points_awarded       | Integer      | Obedience points earned                                |
| auto_punishment_flag | Boolean      | Was this an auto-punishment task?                      |

---

## 🎙️ 3. Voice Drops Table

| **Field**         | **Type**     | **Description**                                        |
|-------------------|--------------|--------------------------------------------------------|
| id                | UUID (PK)    | Unique voice drop ID                                   |
| name              | String       | E.g., “Morning Call”, “Punishment Notice”              |
| domme_persona     | String       | Who’s voice it is                                      |
| audio_url         | String (URL) | Link to audio                                          |
| description       | Text         | Optional description                                   |
| created_at        | Timestamp    | Upload date                                            |

---

## 📬 4. UserVoiceDrops Table (Track Sent/Opened)

| **Field**         | **Type**     | **Description**                                        |
|-------------------|--------------|--------------------------------------------------------|
| id                | UUID (PK)    | Unique ID                                             |
| user_id           | UUID (FK)    | Linked to Users                                       |
| voice_drop_id     | UUID (FK)    | Linked to Voice Drops                                 |
| sent_at           | Timestamp    | When it was sent                                      |
| opened_at         | Timestamp    | When user opened it (optional)                        |

---

## 💸 5. Tokens Table

| **Field**         | **Type**     | **Description**                                        |
|-------------------|--------------|--------------------------------------------------------|
| id                | UUID (PK)    | Unique token purchase ID                               |
| user_id           | UUID (FK)    | Linked to Users                                        |
| amount            | Integer      | Number of tokens purchased                             |
| payment_status    | String       | Pending, Confirmed, Failed                             |
| purchased_at      | Timestamp    | Purchase date/time                                     |

---

## 🎬 6. Scenes Table

| **Field**         | **Type**     | **Description**                                        |
|-------------------|--------------|--------------------------------------------------------|
| id                | UUID (PK)    | Unique scene ID                                        |
| name              | String       | Scene name                                            |
| domme_persona     | String       | Owner of the scene                                    |
| token_cost        | Integer      | How many tokens required                              |
| audio_url         | String (URL) | Audio/script link                                     |
| type              | String       | Standard, CamGirl, Queen Exclusive                    |
| created_at        | Timestamp    | Scene creation date                                   |

---

## 🎞️ 7. UserScenes Table (Track Unlocks)

| **Field**         | **Type**     | **Description**                                        |
|-------------------|--------------|--------------------------------------------------------|
| id                | UUID (PK)    | Unique ID                                             |
| user_id           | UUID (FK)    | Linked to Users                                       |
| scene_id          | UUID (FK)    | Linked to Scenes                                      |
| unlocked_at       | Timestamp    | Unlock date                                           |
| completed_at      | Timestamp    | If scene has been completed                           |

---

## 💬 8. Confessions Table

| **Field**         | **Type**     | **Description**                                        |
|-------------------|--------------|--------------------------------------------------------|
| id                | UUID (PK)    | Unique confession ID                                   |
| user_id           | UUID (FK)    | Linked to Users                                        |
| domme_persona     | String       | Which Domme it's sent to                               |
| content_type      | String       | Text or Audio                                          |
| content           | Text/URL     | Actual confession text/audio link                      |
| domme_comment     | Text         | Domme response/comment                                 |
| domme_rating      | Integer      | Domme rating (1–5 or %)                                |
| submitted_at      | Timestamp    | Submission date                                        |
| visibility_status | String       | Private, Removed                                       |

---

## 🙋 9. Appeals Table

| **Field**         | **Type**     | **Description**                                        |
|-------------------|--------------|--------------------------------------------------------|
| id                | UUID (PK)    | Unique appeal ID                                       |
| user_id           | UUID (FK)    | Linked to Users                                        |
| task_id           | UUID (FK)    | Related to Task                                        |
| appeal_text       | Text         | User’s explanation (can be blank if audio only)        |
| appeal_audio_url  | String (URL) | Optional audio link                                    |
| result            | String       | Pending, Approved, Denied                              |
| submitted_at      | Timestamp    | Date/time of appeal submission                         |

---

## 🤝 10. Tribute Forgiveness Table

| **Field**         | **Type**     | **Description**                                        |
|-------------------|--------------|--------------------------------------------------------|
| id                | UUID (PK)    | Unique forgiveness event ID                            |
| user_id           | UUID (FK)    | Linked to Users                                        |
| task_id           | UUID (FK)    | Linked to failed Task                                  |
| tokens_spent      | Integer      | Number of tokens used for forgiveness                  |
| processed_at      | Timestamp    | Date/time of tribute forgiveness                       |

---

## 📊 11. Cam Model Sessions Table

| **Field**         | **Type**     | **Description**                                        |
|-------------------|--------------|--------------------------------------------------------|
| id                | UUID (PK)    | Unique session request ID                              |
| user_id           | UUID (FK)    | Linked to Users                                        |
| cam_model_name    | String       | Name or identifier of model                            |
| fantasy_tags      | Array[String]| Tags shared with the model                             |
| status            | String       | Requested, Completed, Canceled                         |
| requested_at      | Timestamp    | Request time                                           |
| completed_at      | Timestamp    | If completed                                           |

---

# ✅ Notes

- All timestamps stored in UTC
- UUIDs (Universally Unique IDs) are used for **secure, scalable tracking**
- Foreign Keys (FK) reference related tables for **relational integrity**
- Phase 2+ can expand with **Tier History, Admin Logs, etc.**

---
