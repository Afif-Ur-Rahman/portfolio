## 🏁 Getting Started

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
yarn build
```

Start the production server (after building):

```bash
yarn start
```

Start using the standalone Next.js build (useful for containerized/production deployments):

```bash
yarn start:standalone
```

Run the linter:

```bash
yarn lint
```

---

## 🚀 Status
✅ Project completed — all core modules (Customers, Unit Information, Payments, Receipts, Leads, Employees, Profile) are live and integrated end-to-end across the frontend and backend.

# The Conqueror Developers — Real Estate Management System

A full-stack real estate management application built for **The Conqueror Developers**, a property development company based in Bahria Town, Lahore. The platform gives the internal team a single dashboard to manage customers, property units, payments, receipts, and incoming sales leads — with role-based access for Super Admins, Admins, and Accountants.

---

## 🛠️ Tech Stack

**Frontend**
- Next.js (App Router) + TypeScript
- React 19
- Tailwind CSS + Radix UI
- Zustand (with persisted storage) for global state
- React Hook Form + Zod for form handling and validation
- `react-to-print` for printable receipts and statements
- `date-fns` for date calculations

**Backend**
- Node.js + Express + TypeScript
- MongoDB (Mongoose)
- Service-layer architecture
- Modular email system (OTP, lead notifications, receipt confirmations)

---

## 📄 Pages & Features

### 1. Customers
The entry point for managing all registered customers.
- Displays every customer with their registration number, CNIC, name, and contact details.
- **Live search/filter** across registration number, CNIC, name, and email — no extra API calls needed as you type.
- **Add Customer** on success the new customer is appended directly to local state for an instant UI update (no refetch required).
- Loading and submitting states are tracked separately so the list and the form don't block each other.
- Clicking a customer row navigates to that customer's detailed **Unit Information** page.

### 2. Customer Information / Unit Information
The dedicated profile page for a single customer (route-based, keyed by customer ID).
- Shows full customer details (name, father's name, CNIC, address, phone, email) alongside every **property unit** booked under their name.
- **Edit Customer** — update customer details inline through a dialog, with the store updated immediately on success.
- **Add Unit** — book a new unit (block, unit number, type, category, size, building, price) against the customer.
- Each unit displays live financials: **received amount, outstanding amount, hold amount, and overdue amount**, calculated and synced from the backend.
- State resets automatically when navigating between different customers, so no stale data leaks from a previously viewed profile.
- Role-aware: Super Admins and Admins get elevated permissions (e.g. editing), while Accountants have restricted access.

### 3. Payments
The financial hub for a specific unit (route-based, keyed by unit ID).
- Lists every payment record tied to a unit — purpose, due amount, received amount, remaining balance, and due/paid dates.
- **Add Payment** supports both **Custom** and **Installment** payment types, with installment schedules auto-generated and evenly distributed balloon payments.
- **Edit Payment** and **Edit Unit** dialogs allow corrections without leaving the page.
- Deep integration with **Receipts**: recording a receipt against a payment automatically recalculates and syncs both the payment and unit totals in the store.
- Skeleton loaders and per-action submitting states keep the UI responsive during network calls.

### 4. Receipts (within Payments)
- **Record Payment** — log a received amount, payment method, date, and optional note against a specific payment.
- **Edit Receipt** — correct a previously recorded receipt; both the parent payment and unit totals recalculate automatically.
- **Receipt history** for a payment loads on demand when opened, with its own loading state.
- **Print & Preview** — receipts and full customer statements can be generated as printable A4 documents, including a CNIC formatter and pagination fixes so headers/footers don't repeat across pages.

### 5. Leads
Manages incoming sales inquiries so no prospective customer is missed.
- Fetches all leads on mount and stores them in the global (persisted) store.
- **Tabbed filtering** — All / Contacted / Pending, with live counts for each tab.
- **Mark as Contacted** toggles a lead's status. Only the affected row shows a spinner.
- A **pending leads badge** is shown across desktop and mobile navigation, so the team always sees at a glance how many leads still need follow-up.

### 6. Employees
Internal staff management for the organization.
- Add, view, search, and filter employees by role/status.
- Soft-delete support, so employee records are deactivated rather than permanently removed.
- Restricted to Super Admin / Admin roles.

### 7. Profile
Personal account settings for the logged-in user.
- **Change Password** flow with validation: new password must be at least 8 characters and must match its confirmation before submitting.

---

## 🔐 Access Control
The app supports three roles — `superAdmin`, `admin`, and `accountant` — enforced both in Next.js middleware and at the layout level, with role checks driven by an allow-list (`.includes()`) rather than fragile equality checks. Certain actions (editing units, managing employees, etc.) are restricted to Super Admins and Admins.

## 💾 State Management
A single persisted Zustand store holds the authenticated user, active customer profile, units, payments, and leads — kept in sync with local storage so state survives page refreshes. All mutations use functional updates to avoid stale-closure bugs, and clears customer-scoped data when switching between customer profiles.

## ✉️ Notifications
- Automated email confirmations are fired (fire-and-forget) when a receipt is recorded.
- New lead submissions trigger notification emails to the team.
- OTP emails support secure account actions.
