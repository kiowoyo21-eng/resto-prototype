# v8.9 — Stock display and persistence troubleshooting

Scope: targeted frontend fix for inventory records continuing to show zero after an Admin operation. Supabase is still disconnected.

## Changes

- Existing Inventory product **Add Stock** button now immediately opens Stock In with that product preselected at **1 unit**; select Multiple units for >1.
- Admin Stock In requires delivery reference and proof/photo; after explicit physical confirmation the ledger credits the selected branch directly. Cashier Stock In remains Pending until Admin review.
- Inventory table now separately shows **Available** versus **Pending In** quantities, with explanations for older existing zero-stock products.
- Admin Add Product returns to its selected branch and highlights the saved product by barcode so an incorrect branch filter cannot obscure it.
- Stock-related operations now save the updated database to browser-local storage before displaying success. If writing local storage fails, the UI reports an error instead of claiming the stock was saved.
- PWA shell cache bumped to v8.9.
- Added save/reload regression test for Admin new-product stock, Admin receiving into legacy zero stock, and Cashier Pending receipts.

## Clarification

A product registered in v8.7 or earlier with zero stock cannot be retroactively assigned 1 unit without a documented physically confirmed Stock In. Likewise, Admin on desktop and Cashier on another device do not share data yet because this is a browser-local demonstration. They will share data only after the planned Supabase integration.

## Verification

- `npm run test:logic` passed.
- TypeScript/TSX syntax transpilation passed for touched modules.
- Full Next.js production build and physical device/browser QA not verified in this environment.
