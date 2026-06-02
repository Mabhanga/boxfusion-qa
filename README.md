# Boxfusion Careers Bug Report — Playwright Test

## Bug Summary
A broken link was found on the [Boxfusion](https://boxfusion.io) careers page during exploratory testing.

Clicking **"Find A Job"** on the Experienced Hires page opens a new tab that returns a **404 error**.

## Steps to Reproduce
1. Go to https://boxfusion.io/
2. Navigate to **Careers → Experienced Hires**
3. Click **"Find A Job"**

## Expected Result
A job listings page opens successfully.

## Actual Result
A new tab opens displaying:
> 404,  The page you requested was not found.

## Impact
Experienced candidates are blocked at the final step of the hiring funnel with no alternative path or error recovery.

## Automated Test
This bug has been verified using **Playwright** across three browsers:
- ✅ Chromium
- ✅ Firefox
- ✅ WebKit

## How to Run
```bash
npm install
npx playwright install
npx playwright test tests/boxfusion-careers.spec.js
```

## Tech Stack
- [Playwright](https://playwright.dev/)
- JavaScript
