// Shared source of truth for the Adventura privacy policy. Rendered by both the
// Served at /privacy.
const adventuraPrivacy = `# Privacy Policy

**Last Updated:** March 22, 2026\\
**Effective Date:** March 5, 2026

Saentari ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Adventura (the "App"). Please read this Privacy Policy carefully. By using our App, you consent to the data practices described in this policy.

## 1. Information We Collect

### 1.1 Character and Game Data
- **Character Information:** We store your tabletop RPG character data locally on your device, including names, stats, equipment, and game progress.
- **Character Portraits:** If you select a portrait image for your character from your device's photo library, that image is stored locally on your device. If you create an account and sign in, portrait images are also uploaded to our cloud service to enable access across devices.
- **Campaign and Party Data:** If you create campaigns or join parties, we store campaign details (name, description, house rules) and party membership data (character snapshots shared with party members) locally and, if signed in, in our cloud service.
- **Custom Content:** You may import custom content packs into the App by providing a URL. The App fetches the content from the URL you provide. This content is stored locally on your device.

### 1.2 Device Information
- **Anonymous Identifier:** When you first open the App, we generate a random anonymous identifier that is not linked to your identity. This identifier is used for analytics and crash reporting purposes. If you later create an account and sign in, this identifier is replaced by your account identifier for analytics and crash reporting services.
- **Device Information:** We collect information about your device including device model, operating system version, and platform (iOS/Android) to ensure compatibility and improve app performance.

### 1.3 Usage Data
- **App Usage Statistics:** We collect anonymous information about how you interact with the App, including screens visited and app performance metrics, through Firebase Analytics.
- **Crash Reports:** In the event of an app crash or error, we collect diagnostic information including error messages and stack traces through Firebase Crashlytics. Personal information is filtered from crash reports before submission.
- **Feature Configuration:** We use Firebase Remote Config to manage feature availability within the App. This service contacts Google servers to retrieve configuration data.

### 1.4 Account Information (Optional)
Creating an account is entirely optional. The App works fully without one. If you choose to create an account, we collect the following:
- **Email and Password:** If you sign up with email and password, we collect your email address. Your password is securely handled by our authentication provider (Supabase) and is not stored by us directly.
- **OAuth Profile Information:** If you sign in via Google or Apple, we receive basic profile information (such as your name and email address) from the OAuth provider.
- **Subscription Data:** If you subscribe to a paid tier, we store your subscription status, tier, store of purchase, and subscription period. Payment processing is handled by the respective app store (Apple App Store or Google Play Store); we do not collect or store payment card details.

## 2. How We Use Your Information

We use the information we collect for the following purposes:

- **Core App Functionality:** To store your character data and provide game features. If you create an account, to sync your data across devices.
- **App Improvement:** To identify and fix bugs, improve app performance, and enhance user experience through analytics and crash reporting.
- **Feature Management:** To manage feature availability and deliver app updates through remote configuration.
- **Technical Support:** To diagnose technical issues and provide customer support when needed.

## 3. Data Storage and Retention

### 3.1 Local Storage
- **Primary Storage:** Your character data and game state are stored locally on your device using a local database (SQLite). We retain a reference to your account locally to display your previously synced characters after you sign out.
- **Offline-First:** The App is designed to work fully offline without an account. All core features are available without creating an account or connecting to the internet.

### 3.2 Cloud Storage (Optional)
- **Cloud Sync:** If you create an account and sign in, your character data is synced to our cloud service (Supabase) to enable backup and access across devices. Sync occurs periodically (approximately every 15 minutes) when you are signed in and connected to the internet, and automatically when your device reconnects to the internet.
- **Portrait Storage:** If you are signed in, character portrait images are also stored in our cloud service.
- **You control cloud sync:** Cloud storage is only active when you are signed in. If you sign out, no further data is transmitted to our cloud service.

### 3.3 Data Retention
- **Local Data:** Data stored locally on your device remains until you delete the App or manually delete your characters within the App.
- **Cloud Data:** If you have an account, your synced character data and portraits are retained in our cloud service until you delete them through the App or delete your account.
- **Analytics and Crash Data:** Anonymous usage data and crash reports sent to Google Firebase are retained according to Google's data retention policies.

## 4. Third-Party Services

### 4.1 Analytics, Crash Reporting, and Configuration
- **Google Firebase:** We use Firebase Analytics to collect anonymous usage statistics (such as screens visited, session data, and device type), Firebase Crashlytics to collect crash reports in production builds, and Firebase Remote Config to manage feature availability. These services are provided by Google. An anonymous identifier is generated for all users. Personal information is filtered from crash reports before submission. Google's privacy policy can be found at: https://policies.google.com/privacy

### 4.2 Cloud Services (for Account Holders)
- **Supabase:** If you create an account, we use Supabase for authentication, cloud data storage, and file storage. Supabase processes your email address (or OAuth profile information), character data, portrait images, and subscription status. Supabase's privacy policy can be found at: https://supabase.com/privacy

### 4.3 Subscription Management
- **RevenueCat:** If you subscribe to a paid tier, we use RevenueCat to manage your subscription and entitlements. RevenueCat processes your anonymous app user ID, subscription status, and purchase receipts. RevenueCat's privacy policy can be found at: https://www.revenuecat.com/privacy

## 5. Data Sharing and Disclosure

We do not sell, trade, or rent your personal information to third parties. We only share your information in the following circumstances:

- **Service Providers:** We share anonymous usage data and crash reports with Google Firebase as described in Section 4.1. If you create an account, we share your data with Supabase as described in Section 4.2. If you subscribe, we share subscription data with RevenueCat as described in Section 4.3.
- **Legal Requirements:** We may disclose your information if required by law, court order, or governmental authority.
- **Business Transfers:** In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.

## 6. Your Rights and Choices

### 6.1 Access and Control
- **Access Your Data:** You can view your data through the App's interface, including your characters and game progress.
- **Export Your Data:** You can export your character data as PDF files.
- **Delete Your Data:** You can delete your characters, campaigns, and party data through the App. If you have an account, deletion removes your data from both your device and our cloud service, including any synced character portraits. You can also contact us to request complete data deletion.
- **Delete Your Account:** If you have an account, you can delete it through the App's settings. This removes all your data from our cloud service.

### 6.2 Data Portability
You have the right to receive your data in a portable format. You can export your character data as PDF files through the App.

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

Our cloud services (Supabase and Google Firebase) may process your data in servers located outside your country of residence. If you are located in the European Economic Area, your data may be transferred to and processed in countries outside the EEA. These transfers are subject to appropriate safeguards in accordance with applicable data protection laws.

## 10. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any material changes by:

- **In-App Notification:** Displaying a notice within the App when you launch it after an update.
- **Updated Date:** Updating the "Last Updated" date at the top of this Privacy Policy.

## 11. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

- **Email:** contact@saentari.com

We will respond to your inquiries within a reasonable timeframe.

*By using the Adventura mobile application, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described herein.*`;

export default adventuraPrivacy;
