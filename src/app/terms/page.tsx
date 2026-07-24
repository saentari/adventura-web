import MarkdownPage from "@/components/MarkdownPage";
import termsContent from "@/content/legal/adventura-terms";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms & Conditions",
	description: "Terms and Conditions for the Adventura mobile application",
};

export default function TermsPage() {
	return <MarkdownPage content={termsContent} />;
}
