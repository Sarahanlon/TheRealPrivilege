# Her Court: Admin & Moderation Panel Specification

_Last updated: 2025-05-03 by Sara Hanlon_

---

## 🎛️ Overview

The Admin Panel (Phase 2+) is the **control center** for Her Court, allowing The Queen (admin) to manage critical elements of the app's ecosystem.

Goals:
- Maintain **tight control** over user progression & visibility
- Enable **manual intervention** when automated systems need override
- Manage **cam model collaborations & integrations**
- Ensure **privacy & safety** while enhancing user immersion

---

## 🔑 Phase 1: Manual Admin Controls

Until the panel UI is built, initial admin functions will be **handled manually via:**
- Database tools (e.g., Supabase, Xano, direct DB edits)
- Simple admin-only API endpoints (secured via auth)

---

## 🛠️ Phase 2: Admin Panel Functional Requirements

### 1️⃣ Confession Feed Management

- **View all confessions:**
  - Sort/filter by: user, date, domme, rating, visibility
- **Control visibility:**
  - Toggle between Private / Removed
- **Edit Domme comments/ratings:**
  - Manual updates to enhance personalization

**Future UI Mockup:**  
- Table of confessions with action buttons for visibility & edits

---

### 2️⃣ Token & Tribute Management

- **Manually credit tokens:**
  - Add bonus tribute tokens to any user
- **Adjust token balance:**
  - Fix errors in tribute payments
- **View token history:**
  - Per-user token purchase & usage log

**Future UI Mockup:**  
- User search bar + token balance editor

---

### 3️⃣ Tier & Progression Control

- **View user tier & obedience points**
- **Manually promote/demote:**
  - Override auto-tier system
- **Reset task status:**
  - Force-complete or reassign tasks as needed

---

### 4️⃣ Cam Model & Findom Integrations

- **Log partner models:**
  - Add/remove cam model partners (Name, Contact Info, Notes)
- **View session requests:**
  - See user requests for cam model sessions
- **Manually approve/deny sessions:**
  - Mark sessions as completed

---

### 5️⃣ Voice Drops & Scene Control

- **Upload new voice drops:**
  - Name, audio file, Domme persona
- **Track delivery:**
  - View which users have received/opened voice drops
- **Upload/edit scenes:**
  - Manage scene library (audio/script files)

---

### 6️⃣ User Monitoring & Security

- **Login activity log:**
  - IP addresses, device info
- **Flag suspicious behavior:**
  - Mark accounts for review
- **Suspend users:**
  - Temporarily disable account access (manual action)

---

## 🖥️ Technical Specs

- **Auth Required:**  
  - Admin-only access via secure login (multi-factor recommended)

- **Initial Build Options:**  
  - Light-weight admin UI using React or integrated into backend (FastAPI admin interface)  
  - Later: Tailwind-styled full admin dashboard

- **Data Privacy:**  
  - Full audit log of admin actions (e.g., token grants, confession visibility changes)

---

## 🚧 Future Enhancements (Phase 3+)

- **Analytics Dashboard:**  
  - User engagement metrics  
  - Tribute/token revenue charts  
  - Confession activity trends

- **Automation Helpers:**  
  - Auto-flag repeated failures for review  
  - AI-suggested punishment adjustments

- **Cam Model Portal:**  
  - Separate login for cam models to manage their sessions & feedback

---

# ✅ Summary

In Phase 2, we’ll prioritize:
- Confession feed moderation
- Token & tribute adjustments
- Tier control & progression overrides
- Cam model session tracking

The initial build will focus on **core admin tasks**, with a clear pathway to expanding into a **full-featured dashboard** that supports growth, immersion, and easy control.

---
