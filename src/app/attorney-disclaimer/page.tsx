import type { Metadata } from "next";
import { FadeUp } from "@/components/Motion";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = { title: "Attorney Disclaimer", description: `Legal disclaimer for ${siteConfig.name}.` };

export default function AttorneyDisclaimer() {
  return (
    <>
      <section className="bg-navy py-16 lg:py-20"><div className="max-w-4xl mx-auto px-6 text-center"><FadeUp><h1 className="font-heading text-4xl font-bold text-white">Attorney Disclaimer</h1><p className="text-white/60 mt-2">Important Legal Notices</p></FadeUp></div></section>
      <section className="py-16 lg:py-20"><div className="max-w-4xl mx-auto px-6 prose prose-gray">
        <FadeUp>
          <h2>No Attorney-Client Relationship</h2>
          <p>The information on this website is for general informational purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. Viewing this website or contacting {siteConfig.name} does not create an attorney-client relationship.</p>
          <h2>Attorney Advertising</h2>
          <p>This website constitutes attorney advertising. The hiring of a lawyer is an important decision that should not be based solely upon advertisements. Prior results do not guarantee a similar outcome.</p>
          <h2>No Guarantee of Results</h2>
          <p>Case results depend upon a variety of factors unique to each case. {siteConfig.name} does not guarantee the outcome of any legal matter. Past verdicts and settlements are presented for illustrative purposes only.</p>
          <h2>Jurisdictional Limitations</h2>
          <p>{siteConfig.attorney} is licensed to practice law in the State of New York and in the federal courts listed on our website. We do not practice in jurisdictions where we are not licensed unless specifically authorized.</p>
          <h2>Confidentiality</h2>
          <p>Do not send confidential information through this website. Information submitted through the contact form or other means is not protected by attorney-client privilege until an engagement agreement has been signed.</p>
          <h2>External Links</h2>
          <p>This website may contain links to external sites. {siteConfig.name} is not responsible for the content or privacy practices of linked websites.</p>
        </FadeUp>
      </div></section>
    </>
  );
}
