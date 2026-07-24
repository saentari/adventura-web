import MarkdownPage from "@/components/MarkdownPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Support",
	description: "Get help and support for Adventura",
};

const supportContent = `# Support

Having trouble with Adventura, or want to suggest something? We're happy to help.

## Contact us

The fastest way to reach us is email:

- **Email:** contact@saentari.com

We typically respond within 2 business days. When reporting a problem it helps to include your **device model** and **OS version** — or, if you're playing in a browser, which **browser** you're using.

## Common questions

### Which platforms are supported?
Adventura is available on iOS and Android, and in the browser at [app.adventura.gg](https://app.adventura.gg).

### Where is my data stored?
On mobile, Adventura works offline and most of your data stays on your device. If you sign in, your characters sync to the cloud so you can reach them from another device or the browser. The browser version needs an account, because there is no local storage to fall back on.

For exactly what is collected and how it is used, see the [Privacy Policy](/privacy).

### Do I need an account?
Not on mobile — you can create and manage characters entirely offline. An account is only needed for cloud sync, purchases, and the browser version.

### How do purchases and refunds work?
Purchases made in the mobile apps are processed by the Apple App Store or Google Play, and refunds are handled by the store you purchased from, under their policies.

### How do I delete my data?
Uninstalling the app removes its local data from your device. To delete your account and everything stored in the cloud, use the delete option in the app's account settings, or email us to request it.

### I found a bug or have a feature request
We'd love to hear it — email contact@saentari.com with a short description of what happened, and steps to reproduce it if you can.

## Get Adventura

- [App Store](https://apps.apple.com/us/app/adventura-ttrpg/id6759534191) · [Google Play](https://play.google.com/store/apps/details?id=com.saentari.adventura) · [Play in your browser](https://app.adventura.gg)
- [Community](https://www.reddit.com/r/adventura/)
- [Privacy Policy](/privacy) · [Terms & Conditions](/terms)

---

Have a question that isn't covered here? Email **contact@saentari.com** and we'll help.`;

export default function SupportPage() {
	return <MarkdownPage content={supportContent} />;
}
