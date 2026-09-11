// Shared source of truth for the Adventura privacy policy, mirroring
// adventura/assets/texts/privacy_policy.md so the in-app and web copies never
// drift. Edit that file and re-sync rather than editing this one by hand.
// Served at /privacy.
const adventuraPrivacy = `# Privacy Policy

**Last Updated:** September 9, 2026\\
**Effective Date:** March 5, 2026

Saentari ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application Adventura (the "App") and our website at adventura.gg (the "Site"). Please read this Privacy Policy carefully. By using our App, you consent to the data practices described in this policy.

## 1. Information We Collect

### 1.1 Character and Game Data
- **Character Information:** We store your tabletop RPG character data locally on your device, including names, stats, equipment, and game progress.
- **Character Portraits:** If you select a portrait image for your character from your device's photo library, that image is stored locally on your device. If you create an account and sign in, portrait images are also uploaded to our cloud service to enable access across devices. On iOS, the App requests permission to access your photo library when you choose to add a character portrait. The App does not access your photo library for any other purpose.
- **Adventure Data:** Some adventures are AI-free and authored. On iOS and Android these play fully offline, and your progress is stored only on your device. In the browser version, which has no offline storage, your progress is saved to our cloud service under your account instead. For AI-enhanced solo adventures (which require an account), we store your conversation history with the AI Game Master, including your text input, the AI's narrative responses, and mechanical outcomes, in our cloud service associated with your account.
- **Custom Content:** You may import custom content packs into the App by providing a URL or by selecting a file. The App fetches the content from the URL you provide. This content is stored locally on your device and, if you are signed in, synced to our cloud service so that it is available on your other devices. The complete pack — including its name, description, source URL, and full contents — is stored under your account. You are responsible for ensuring that you have the right to import and store any content you add.
- **Sheet Layouts and Preferences:** Your character sheet layout customisations and app preferences are stored on your device. In the browser version, sheet layouts are stored in our cloud service under your account.

### 1.2 Device Information
- **Anonymous Identifier:** When you first open the App, we generate a random anonymous identifier that is not linked to your identity. This identifier is used for analytics and crash reporting purposes. If you later create an account and sign in, this identifier is replaced by your account identifier for analytics and crash reporting services.
- **Device Information:** We collect information about your device including device model, operating system version, and platform (iOS/Android) to ensure compatibility and improve app performance.

### 1.3 Usage Data
- **App Usage Statistics:** We collect anonymous information about how you interact with the App, including screens visited and app performance metrics, through Firebase Analytics.
- **Crash Reports:** In the event of an app crash or error, we collect diagnostic information including error messages and stack traces through Sentry. Personal information is filtered from crash reports before submission.

### 1.4 Account Information (Optional)
Creating an account is entirely optional. The App works fully without one. If you choose to create an account, we collect the following:
- **Email and Password:** If you sign up with email and password, we collect your email address. Your password is securely handled by our authentication provider (Supabase) and is not stored by us directly.
- **OAuth Profile Information:** If you sign in via Google or Apple, we receive basic profile information (such as your name and email address) from the OAuth provider.
- **Subscription Data:** If you subscribe to a paid tier, we store your subscription status, tier, store of purchase, and subscription period. On iOS and Android, payment processing is handled by the respective app store (Apple App Store or Google Play Store). In the browser version, checkout is hosted by RevenueCat and payment is processed by its payment provider. In neither case do we collect or store your payment card details.
- **AI Usage Balance:** If you play AI-enhanced solo adventures, we store your remaining AI narration allowance and a record of the adjustments made to it, associated with your account.

## 2. How We Use Your Information

We use the information we collect for the following purposes:

- **Core App Functionality:** To store your character data and provide game features. If you create an account, to sync your data across devices. To generate AI narration for solo adventures.
- **App Improvement:** To identify and fix bugs, improve app performance, and enhance user experience through analytics and crash reporting.
- **Feature Management:** To manage feature availability based on your subscription tier.
- **Technical Support:** To diagnose technical issues and provide customer support when needed.

## 3. Data Storage and Retention

### 3.1 Local Storage
- **Primary Storage:** Your character data and game state are stored locally on your device using a local database (SQLite). We retain a reference to your account locally to display your previously synced characters after you sign out.
- **Offline-First:** The App is designed to work fully offline without an account. All core features are available without creating an account or connecting to the internet.

### 3.2 Cloud Storage (Optional)
- **Cloud Sync:** If you create an account and sign in, your character data is synced to our cloud service (Supabase) to enable backup and access across devices. Sync occurs periodically (approximately every 15 minutes) when you are signed in and connected to the internet, and automatically when your device reconnects to the internet.
- **Portrait Storage:** If you are signed in, character portrait images are also stored in our cloud service.
- **Custom Content:** If you are signed in, custom content packs you import are stored in our cloud service so that they are available on your other devices.
- **Sheet Layouts:** In the browser version, your character sheet layout customisations are stored in our cloud service under your account.
- **Adventure Progress:** If you play AI-enhanced solo adventures, your conversation history with the AI Game Master (your text input and AI responses) is stored in our cloud service. You can delete this data by deleting the adventure session. On iOS and Android, AI-free authored adventures store their progress only on your device; in the browser version, which has no offline storage, that progress is stored in our cloud service under your account.
- **You control cloud sync:** Character data, portraits, and custom content are only stored in our cloud service while you are signed in, and no further data of that kind is transmitted after you sign out. The App still contacts our servers while you are signed out in order to list the available adventures and to download free adventure packs; these requests include your IP address but are not linked to an account.

### 3.3 Data Retention
- **Local Data:** Data stored locally on your device remains until you delete the App or manually delete your characters within the App.
- **Cloud Data:** If you have an account, your synced character data and portraits are retained in our cloud service until you delete them through the App or delete your account.
- **Analytics and Crash Data:** Anonymous usage data and crash reports sent to Google Firebase and Sentry are retained according to those providers' data retention policies.
- **Purchase Records:** Records of subscription and purchase events are retained in anonymised form after account deletion, no longer linked to your account, as required for financial, tax, and audit purposes.

### 3.4 Cookies and Browser Storage (Web)

This section applies to the browser version of the App (app.adventura.gg) and to the Site (adventura.gg). The iOS and Android apps do not use cookies.

- **No tracking or advertising cookies.** We do not use cookies for advertising, profiling, or cross-site tracking, and we do not share cookie data with third parties. The Site carries no third-party analytics or advertising scripts.
- **Sign-in session:** The browser version of the App stores your sign-in session in your browser's local storage. This is required for it to function — unlike the mobile apps, a browser has no offline store to fall back on. Signing out clears it.
- **Sign-in status cookie (adv_signed_in):** While you are signed in to the browser version of the App, we set a single cookie on the adventura.gg domain so that the Site can show "Open app" instead of "Sign in". It contains only the value 1 — no name, email address, account identifier, or authentication token. It expires after 30 days, is refreshed while you remain signed in, and is deleted when you sign out.
- **Managing cookies:** These are strictly functional, so there is no advertising consent to withdraw. You can clear or block cookies and site data in your browser settings; the only consequence is that you will be signed out and the Site will show "Sign in".

## 4. Third-Party Services

### 4.1 Analytics and Crash Reporting
- **Google Firebase:** We use Firebase Analytics to collect anonymous usage statistics (such as screens visited, session data, and device type) in production builds. This service is provided by Google and is used on mobile only. An anonymous identifier is generated for all users. Google's privacy policy can be found at: https://policies.google.com/privacy
- **Sentry:** We use Sentry to collect crash reports and error diagnostics in production builds, including error messages, stack traces, and the anonymous identifier described above. Personal information is filtered from crash reports before submission. In the browser version, crash reports are relayed to Sentry through our own server, because ad blockers commonly block direct connections to Sentry. Sentry is provided by Functional Software, Inc. Sentry's privacy policy can be found at: https://sentry.io/privacy/

### 4.2 Cloud Services
- **Supabase:** We use Supabase for authentication, cloud data storage, and file storage. If you create an account, Supabase processes your email address (or OAuth profile information), character data, portrait images, custom content packs, and subscription status. Even when you are not signed in, the App contacts Supabase in order to list the available adventures and to download free adventure packs; these requests include your IP address but are not linked to an account. Supabase's privacy policy can be found at: https://supabase.com/privacy

### 4.3 Subscription Management
- **RevenueCat:** If you subscribe to a paid tier, we use RevenueCat to manage your subscription and entitlements. RevenueCat processes your account identifier, subscription status, and purchase receipts. In the browser version, checkout is hosted by RevenueCat and your account identifier forms part of the checkout URL, so that the purchase is credited to your existing account. RevenueCat's privacy policy can be found at: https://www.revenuecat.com/privacy

### 4.4 AI Narration
- **Anthropic:** AI-enhanced adventures are in development and are not available in released versions of the App. Where they are available, and only if you play one, the App sends your character's game data and your text input to an AI service (Anthropic Claude) via our server to generate narrative responses. No conversation data is used to train AI models. Anthropic's privacy policy can be found at: https://www.anthropic.com/privacy

## 5. Data Sharing and Disclosure

We do not sell, trade, or rent your personal information to third parties. We only share your information in the following circumstances:

- **Service Providers:** We share anonymous usage data and crash reports with Google Firebase and Sentry as described in Section 4.1. We share data with Supabase as described in Section 4.2. If you subscribe, we share subscription data with RevenueCat as described in Section 4.3. If you play an AI-enhanced adventure where one is available, we share character game data and your text input with Anthropic as described in Section 4.4.
- **Legal Requirements:** We may disclose your information if required by law, court order, or governmental authority.
- **Business Transfers:** In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.

## 6. Your Rights and Choices

### 6.1 Access and Control
- **Access Your Data:** You can view your data through the App's interface, including your characters and game progress.
- **Export Your Data:** You can export your character data as PDF or JSON files.
- **Delete Your Data:** You can delete your characters, custom content, and adventure data through the App. If you have an account, deletion removes your data from both your device and our cloud service, including any synced character portraits and custom content packs. You can also contact us to request complete data deletion.
- **Delete Your Account:** If you have an account, you can delete it directly from within the App via Settings → Account → Delete Account. Account deletion immediately removes your characters, portraits, custom content packs, sheet layouts, adventure progress, adventure sessions, and account record from our cloud service. Records of subscription and purchase events are retained in anonymised form, no longer linked to your account, as required for financial, tax, and audit purposes. You can also contact us at contact@saentari.com to request deletion; in that case, we will delete all your data from our cloud service within 30 days, subject to that same exception.

### 6.2 Data Portability
You have the right to receive your data in a portable format. You can export your character data as PDF or JSON files through the App.

### 6.3 Right to Complain
If you are located in the European Economic Area, you have the right to lodge a complaint with your local data protection supervisory authority. In the Netherlands, this is the Autoriteit Persoonsgegevens (https://autoriteitpersoonsgegevens.nl).

## 7. Children's Privacy

Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.

## 8. Security Measures

We implement appropriate technical and organizational measures to protect your information:

- **Local Storage:** Your character data is stored securely on your device.
- **Encrypted Transmission:** If you use cloud sync, all data is transmitted securely over HTTPS.
- **Anonymization:** Analytics and crash data are collected using anonymous identifiers that are not linked to your identity (unless you create an account, in which case your account identifier is used).
- **PII Filtering:** Personal information is automatically filtered from crash reports before they are sent to our service providers.
- **Breach Notification:** In the unlikely event of a data breach affecting your personal data, we will notify affected users and relevant supervisory authorities in accordance with applicable data protection laws.

## 9. International Data Transfers

Our service providers (Supabase, Google Firebase, Sentry, RevenueCat, and Anthropic) may process your data on servers located outside your country of residence. If you are located in the European Economic Area, your data may be transferred to and processed in countries outside the EEA. These transfers are subject to appropriate safeguards in accordance with applicable data protection laws.

## 10. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. When we do, we update the "Last Updated" date at the top of this Privacy Policy. The current version is always available in the App under Settings → Privacy policy, and at https://adventura.gg/privacy. We encourage you to review it periodically.

## 11. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

- **Email:** contact@saentari.com

We will respond to your inquiries within a reasonable timeframe.

*By using the Adventura application, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described herein.*`;

export default adventuraPrivacy;
