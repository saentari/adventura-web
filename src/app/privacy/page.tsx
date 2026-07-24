import MarkdownPage from "@/components/MarkdownPage";
import privacyContent from "@/content/legal/adventura-privacy";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description: "Privacy Policy for the Adventura mobile application",
};

export default function PrivacyPage() {
	return <MarkdownPage content={privacyContent} />;
}
