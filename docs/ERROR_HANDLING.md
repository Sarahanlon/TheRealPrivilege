# Her Court: Error Handling & Edge Case Protocols

_Last updated: 2025-05-03 by Sara Hanlon_

---

## ⚙️ 1. Task Failure Handling

**Source:** See `Task_Protocols.md`

### 🔎 Failure Detection:
- Auto-check if proof is submitted **before deadline**.
- Validate proof **matches required type** (text/photo/audio).
- AI check: basic **content present** (e.g., non-empty submission).

### 🚨 Fail-Safe Actions:
| **Fail Count**            | **Response**                                                                                       |
|---------------------------|----------------------------------------------------------------------------------------------------|
| First failure             | - Auto-punishment task assigned<br>- “Queen steps away” visual icon fades/cracks                   |
| Second consecutive fail   | - Tier progression paused<br>- Domme sends warning (auto audio/text)<br>- Tribute forgiveness prompt appears |
| Third consecutive fail    | - Auto-demotion by 1 tier<br>- Message: “You have disappointed the Queen.”                         |

**Appeal Option:**  
User can submit **text/audio explanation** to appeal; Domme responds (automated/manual).

**Tribute Forgiveness:**  
Users can purchase tribute packs (e.g., “Redemption Gift”) to **restore progression** quickly.

---

## 🎙️ 2. Audio/Voice API Failure Handling

### 🔎 Error Scenarios:
- Audio file **missing or corrupt**
- **ElevenLabs API** call fails (timeout, quota issue)

### 🚨 Fail-Safe Actions:
- **Retry Logic:** 3x automatic retry (with 3-second intervals)
- **Fallback:** If fails after 3 tries:
  - Display text: *“Audio temporarily unavailable. Displaying scene script below.”*
  - User’s **tokens are NOT consumed** until success
- **Logging:** Error logged to server & flagged in admin dashboard

---

## 💸 3. Payment & Token Credit Failures

### 🔎 Error Scenarios:
- User successfully purchases tokens but webhook **fails to confirm payment**
- Token balance not updated after payment

### 🚨 Fail-Safe Actions:
- **Retry:** Stripe/Gumroad webhook auto-retries for up to 72 hours
- **User Message:**  
  “Your tribute is pending. Please allow a moment for processing. Contact support if unresolved after 30 mins.”
- **Manual Override:** Admin alerted if unresolved after retries; can manually credit tokens

---

## 🔐 4. Account Access & Security

### 🔎 Error Scenarios:
- Multiple failed login attempts
- Password reset request failure
- Duplicate account creation attempt

### 🚨 Fail-Safe Actions:
- **Login Brute-Force Protection:**  
  - Lock account for 30 min after 5 failed attempts
- **Password Reset:**  
  - If fails, prompt user to email support for manual reset
- **Duplicate Account Detection:**  
  - Alert user: “An account with this email already exists.”
  - Manual merge tools (Phase 2)

---

## 🎭 5. Scene Unlock & Token Consumption

### 🔎 Error Scenarios:
- User spends tokens but scene **fails to unlock**
- Scene unlocks but content **won’t play**

### 🚨 Fail-Safe Actions:
- **Auto-Check:** Token deduction confirmed only **after scene loads successfully**
- **Failure Protocol:**  
  - If error: auto-refund tokens within 5 minutes  
  - User Message: “Scene unavailable. Your tokens have been returned.”
- **Manual Flag:** Scene flagged for admin review

---

## 📣 6. Confession Feed Visibility & Reversal

### 🔎 Error Scenarios:
- User opts in for **humiliation visibility** but requests removal later

### 🚨 Fail-Safe Actions:
- **Removal Policy:**  
  - Users may request removal **within 7 days** of submission  
  - Admin manually reviews & processes  
- **Note:** Permanent visibility after 7 days unless exceptional cases arise

---

## 🛠️ 7. Admin Override Tools (Phase 2+)

### 🔎 Actions Available:
- Manually **credit tokens / points**
- Force-complete or **reassign tasks**
- Manually **demote / promote tiers**
- Toggle confession feed visibility

---

## ✅ Summary of Best Practices

- **User Messaging:** Every error should include a **friendly, Domme-aligned message** (no cold system errors)
- **Logging:** All errors logged to server + admin dashboard
- **Fallbacks:**  
  - Audio → text fallback  
  - Tokens → refund  
  - Tasks → auto-punishment

- **Resilience:**  
  - Retry logic for payments & audio  
  - Manual override if auto-fail-safes don’t resolve

---

