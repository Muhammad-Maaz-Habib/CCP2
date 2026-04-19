import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Voice AI Coach',
  description: 'Privacy Policy for Voice AI Coach',
};

const tocItems = [
  { id: 'section-1', label: '1. WHAT INFORMATION DO WE COLLECT?' },
  { id: 'section-2', label: '2. HOW DO WE PROCESS YOUR INFORMATION?' },
  { id: 'section-3', label: '3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?' },
  { id: 'section-4', label: '4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?' },
  { id: 'section-5', label: '5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?' },
  { id: 'section-6', label: '6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?' },
  { id: 'section-7', label: '7. HOW LONG DO WE KEEP YOUR INFORMATION?' },
  { id: 'section-8', label: '8. DO WE COLLECT INFORMATION FROM MINORS?' },
  { id: 'section-9', label: '9. WHAT ARE YOUR PRIVACY RIGHTS?' },
  { id: 'section-10', label: '10. CONTROLS FOR DO-NOT-TRACK FEATURES' },
  { id: 'section-11', label: '11. DO WE MAKE UPDATES TO THIS NOTICE?' },
  { id: 'section-12', label: '12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' },
  { id: 'section-13', label: '13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?' },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-0 flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-10">
      <article className="mx-auto max-w-3xl rounded-2xl border border-indigo-100/80 bg-white/95 p-8 shadow-lg backdrop-blur sm:p-10">
        <p className="text-sm font-medium text-indigo-700">Legal</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-indigo-950">PRIVACY NOTICE</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated __________</p>

        <section className="mt-10 space-y-4 text-base leading-relaxed text-slate-800">
          <p>
            This Privacy Notice for Pentabyte (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), describes how and why we
            might access, collect, store, use, and/or share (&quot;process&quot;) your personal information when you use
            our services (&quot;Services&quot;).
          </p>
          <p>
            Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and
            choices. We are responsible for making decisions about how your personal information is processed. If you
            do not agree with our policies and practices, please do not use our Services.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-base leading-relaxed text-slate-800">
          <h2 className="text-lg font-semibold text-indigo-950">SUMMARY OF KEY POINTS</h2>
          <p>
            <span className="font-semibold text-slate-900">What personal information do we process?</span> When you
            visit, use, or navigate our Services, we may process personal information depending on how you interact
            with us and the Services, the choices you make, and the products and features you use.
          </p>
          <p>
            <span className="font-semibold text-slate-900">Do we process any sensitive personal information?</span> We
            do not process sensitive personal information.
          </p>
          <p>
            <span className="font-semibold text-slate-900">Do we collect any information from third parties?</span> We
            may collect information from public databases, marketing partners, social media platforms, and other
            outside sources.
          </p>
          <p>
            <span className="font-semibold text-slate-900">How do we process your information?</span> We process your
            information to provide, improve, and administer our Services, communicate with you, for security and fraud
            prevention, and to comply with law.
          </p>
          <p>
            <span className="font-semibold text-slate-900">
              In what situations and with which parties do we share personal information?
            </span>{' '}
            We may share information in specific situations and with specific third parties.
          </p>
          <p>
            <span className="font-semibold text-slate-900">What are your rights?</span> Depending on where you are
            located geographically, the applicable privacy law may mean you have certain rights regarding your personal
            information.
          </p>
          <p>
            <span className="font-semibold text-slate-900">How do you exercise your rights?</span> The easiest way to
            exercise your rights is by submitting a data subject access request, or by contacting us.
          </p>
        </section>

        <nav
          aria-label="Table of contents"
          className="mt-12 rounded-xl border border-indigo-100 bg-indigo-50/50 p-6"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-900">Table of contents</h2>
          <ol className="mt-4 grid list-decimal gap-2 pl-5 text-sm text-slate-700 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2">
            {tocItems.map((item) => (
              <li key={item.id} className="pl-1 marker:font-medium marker:text-indigo-800">
                <a
                  href={`#${item.id}`}
                  className="text-indigo-700 underline decoration-indigo-300 underline-offset-2 transition hover:text-indigo-900 hover:decoration-indigo-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-14 space-y-14 text-base leading-relaxed text-slate-800">
          <section id="section-1" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">1. WHAT INFORMATION DO WE COLLECT?</h2>
            <h3 className="text-base font-semibold text-slate-900">Personal information you disclose to us</h3>
            <p className="italic text-slate-700">
              In Short: We collect personal information that you provide to us.
            </p>
            <p>
              We collect personal information that you voluntarily provide to us when you register on the Services,
              express an interest in obtaining information about us or our products and Services, when you participate
              in activities on the Services, or otherwise when you contact us.
            </p>
            <p>Sensitive Information. We do not process sensitive information.</p>
            <p>
              All personal information that you provide to us must be true, complete, and accurate, and you must
              notify us of any changes to such personal information.
            </p>
            <h3 className="text-base font-semibold text-slate-900">Information automatically collected</h3>
            <p className="italic text-slate-700">
              In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device
              characteristics — is collected automatically when you visit our Services.
            </p>
            <p>
              We automatically collect certain information when you visit, use, or navigate the Services. This
              information does not reveal your specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address, browser and device characteristics,
              operating system, language preferences, referring URLs, device name, country, location, information
              about how and when you use our Services, and other technical information. This information is primarily
              needed to maintain the security and operation of our Services, and for our internal analytics and
              reporting purposes.
            </p>
            <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
          </section>

          <section id="section-2" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
            <p className="italic text-slate-700">
              In Short: We process your information to provide, improve, and administer our Services, communicate with
              you, for security and fraud prevention, and to comply with law. We may also process your information for
              other purposes with your consent.
            </p>
            <p>
              We process your personal information for a variety of reasons, depending on how you interact with our
              Services.
            </p>
          </section>

          <section id="section-3" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">
              3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h2>
            <p className="italic text-slate-700">
              In Short: We may share information in specific situations described in this section and/or with the
              following third parties.
            </p>
            <p>We may need to share your personal information in the following situations:</p>
            <p>
              <span className="font-semibold text-slate-900">Business Transfers.</span> We may share or transfer your
              information in connection with, or during negotiations of, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business to another company.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Affiliates.</span> We may share your information with our
              affiliates, in which case we will require those affiliates to honor this Privacy Notice. Affiliates
              include our parent company and any subsidiaries, joint venture partners, or other companies that we
              control or that are under common control with us.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Business Partners.</span> We may share your information
              with our business partners to offer you certain products, services, or promotions.
            </p>
          </section>

          <section id="section-4" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">
              4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </h2>
            <p className="italic text-slate-700">
              In Short: We may use cookies and other tracking technologies to collect and store your information.
            </p>
            <p>
              We may use cookies and similar tracking technologies (like web beacons and pixels) to gather
              information when you interact with our Services. Some online tracking technologies help us maintain the
              security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site
              functions.
            </p>
            <p>
              We also permit third parties and service providers to use online tracking technologies on our Services
              for analytics and advertising purposes.
            </p>
          </section>

          <section id="section-5" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
            <p className="italic text-slate-700">
              In Short: If you choose to register or log in to our Services using a social media account, we may have
              access to certain information about you.
            </p>
            <p>
              Our Services offer you the ability to register and log in using your third-party social media account
              details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile
              information about you from your social media provider. The profile information we receive may vary
              depending on the social media provider concerned, but will often include your name, email address,
              friends list, and profile picture, as well as other information you choose to make public on such a
              social media platform.
            </p>
            <p>
              We will use the information we receive only for the purposes that are described in this Privacy Notice.
              We do not control, and are not responsible for, other uses of your personal information by your
              third-party social media provider.
            </p>
          </section>

          <section id="section-6" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">
              6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
            </h2>
            <p className="italic text-slate-700">
              In Short: We may transfer, store, and process your information in countries other than your own.
            </p>
            <p>
              Our servers are located in the United States. Regardless of your location, please be aware that your
              information may be transferred to, stored by, and processed by us in our facilities and in the
              facilities of the third parties with whom we may share your personal information.
            </p>
            <p>
              If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then
              these countries may not necessarily have data protection laws or other similar laws as comprehensive as
              those in your country. However, we will take all necessary measures to protect your personal information
              in accordance with this Privacy Notice and applicable law.
            </p>
          </section>

          <section id="section-7" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <p className="italic text-slate-700">
              In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this
              Privacy Notice unless otherwise required by law.
            </p>
            <p>
              We will only keep your personal information for as long as it is necessary for the purposes set out in
              this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax,
              accounting, or other legal requirements).
            </p>
            <p>
              When we have no ongoing legitimate business need to process your personal information, we will either
              delete or anonymize such information, or securely store your personal information and isolate it from
              any further processing until deletion is possible.
            </p>
          </section>

          <section id="section-8" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">
              8. DO WE COLLECT INFORMATION FROM MINORS?
            </h2>
            <p className="italic text-slate-700">
              In Short: We do not knowingly collect data from or market to children under 18 years of age.
            </p>
            <p>
              We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we
              knowingly sell such personal information. By using the Services, you represent that you are at least 18
              or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the
              Services.
            </p>
            <p>
              If we learn that personal information from users less than 18 years of age has been collected, we will
              deactivate the account and take reasonable measures to promptly delete such data from our records. If
              you become aware of any data we may have collected from children under age 18, please contact us at
              pentabyte@gmail.com.
            </p>
          </section>

          <section id="section-9" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <p className="italic text-slate-700">
              In Short: You may review, change, or terminate your account at any time, depending on your country,
              province, or state of residence.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Withdrawing your consent:</span> If we are relying on
              your consent to process your personal information, you have the right to withdraw your consent at any
              time by contacting us using the contact details provided in section 12 below.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Account Information:</span> If you would at any time like
              to review or change the information in your account or terminate your account, please contact us. Upon
              your request to terminate your account, we will deactivate or delete your account and information from
              our active databases. However, we may retain some information in our files to prevent fraud,
              troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with
              applicable legal requirements.
            </p>
          </section>

          <section id="section-10" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">
              10. CONTROLS FOR DO-NOT-TRACK FEATURES
            </h2>
            <p>
              Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track
              (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. We do not currently respond to DNT browser
              signals or any other mechanism that automatically communicates your choice not to be tracked online.
            </p>
            <p>
              If a standard for online tracking is adopted that we must follow in the future, we will inform you
              about that practice in a revised version of this Privacy Notice.
            </p>
          </section>

          <section id="section-11" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">
              11. DO WE MAKE UPDATES TO THIS NOTICE?
            </h2>
            <p className="italic text-slate-700">
              In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
            </p>
            <p>
              We may update this Privacy Notice from time to time. The updated version will be indicated by an updated
              &quot;Revised&quot; date at the top of this Privacy Notice. If we make material changes to this Privacy
              Notice, we may notify you either by prominently posting a notice of such changes or by directly sending
              you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we
              are protecting your information.
            </p>
          </section>

          <section
            id="section-12"
            className="scroll-mt-24 space-y-4 rounded-xl border border-slate-200 bg-slate-50/80 p-6"
          >
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">
              12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h2>
            <p>If you have questions or comments about this notice, you may contact us at:</p>
            <address className="not-italic">
              <p className="font-semibold text-slate-900">Pentabyte</p>
              <p>14 Mint Plaza</p>
              <p>San Francisco, CA 94103</p>
              <p>United States</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:pentabyte@gmail.com"
                  className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-900"
                >
                  pentabyte@gmail.com
                </a>
              </p>
            </address>
          </section>

          <section id="section-13" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">
              13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
            </h2>
            <p>
              Based on the applicable laws of your country, you may have the right to request access to the personal
              information we collect from you, details about how we have processed it, correct inaccuracies, or delete
              your personal information.
            </p>
            <p>
              You may also have the right to withdraw your consent to our processing of your personal information. To
              request to review, update, or delete your personal information, please contact us at
              {' '}
              <a
                href="mailto:pentabyte@gmail.com"
                className="font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-900"
              >
                pentabyte@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
          <Link href="/login" className="font-medium text-indigo-600 hover:underline">
            Back to log in
          </Link>
          <span className="mx-2 text-slate-300">·</span>
          <Link href="/" className="font-medium text-indigo-600 hover:underline">
            Home
          </Link>
        </p>
      </article>
    </div>
  );
}
