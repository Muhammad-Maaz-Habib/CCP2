import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Voice AI Coach',
  description: 'Terms and Conditions for Voice AI Coach',
};

const tocItems = [
  { id: 'section-1', label: '1. OUR SERVICES' },
  { id: 'section-2', label: '2. INTELLECTUAL PROPERTY RIGHTS' },
  { id: 'section-3', label: '3. USER REPRESENTATIONS' },
  { id: 'section-4', label: '4. USER REGISTRATION' },
  { id: 'section-5', label: '5. PROHIBITED ACTIVITIES' },
  { id: 'section-6', label: '6. USER GENERATED CONTRIBUTIONS' },
  { id: 'section-7', label: '7. CONTRIBUTION LICENSE' },
  { id: 'section-8', label: '8. SERVICES MANAGEMENT' },
  { id: 'section-9', label: '9. PRIVACY POLICY' },
  { id: 'section-10', label: '10. TERM AND TERMINATION' },
  { id: 'section-11', label: '11. MODIFICATIONS AND INTERRUPTIONS' },
  { id: 'section-12', label: '12. GOVERNING LAW' },
  { id: 'section-13', label: '13. DISPUTE RESOLUTION' },
  { id: 'section-14', label: '14. CORRECTIONS' },
  { id: 'section-15', label: '15. DISCLAIMER' },
  { id: 'section-16', label: '16. LIMITATIONS OF LIABILITY' },
  { id: 'section-17', label: '17. INDEMNIFICATION' },
  { id: 'section-18', label: '18. USER DATA' },
  { id: 'section-19', label: '19. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES' },
  { id: 'section-20', label: '20. CALIFORNIA USERS AND RESIDENTS' },
  { id: 'section-21', label: '21. MISCELLANEOUS' },
  { id: 'section-22', label: '22. CONTACT US' },
];

export default function TermsPage() {
  return (
    <div className="min-h-0 flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-10">
      <article className="mx-auto max-w-3xl rounded-2xl border border-indigo-100/80 bg-white/95 p-8 shadow-lg backdrop-blur sm:p-10">
        <p className="text-sm font-medium text-indigo-700">Legal</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-indigo-950">
          TERMS AND CONDITIONS
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated April 03, 2026</p>

        <section className="mt-10 space-y-4 text-base leading-relaxed text-slate-800">
          <h2 className="text-lg font-semibold text-indigo-950">AGREEMENT TO OUR LEGAL TERMS</h2>
          <p>
            We are Pentabyte (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), a company registered
            in California, United States at 14 Mint Plaza, San Francisco, CA 94103.
          </p>
          <p>
            We operate the website{' '}
            <a
              href="https://ai-coaching-tool-vercel.vercel.app/"
              className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ai-coaching-tool-vercel.vercel.app/
            </a>{' '}
            (the &quot;Site&quot;), as well as any other related products and services that refer or link to these
            legal terms (the &quot;Legal Terms&quot;) (collectively, the &quot;Services&quot;).
          </p>
          <p className="italic text-slate-700">A voice-based AI coach for career and academic goals</p>
          <p>
            You can contact us by email at __________ or by mail to 14 Mint Plaza, San Francisco, CA 94103,
            United States.
          </p>
          <p>
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on
            behalf of an entity (&quot;you&quot;), and Pentabyte, concerning your access to and use of the Services.
            You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of
            these Legal Terms.{' '}
            <span className="font-semibold uppercase tracking-wide text-slate-900">
              IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
              SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </span>
          </p>
          <p>
            We will provide you with prior notice of any scheduled changes to the Services you are using. The
            modified Legal Terms will become effective upon posting or notifying you by pentabyte@gmail.com, as
            stated in the email message. By continuing to use the Services after the effective date of any changes,
            you agree to be bound by the modified terms.
          </p>
          <p>
            The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not
            permitted to use or register for the Services.
          </p>
          <p>We recommend that you print a copy of these Legal Terms for your records.</p>
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
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">1. OUR SERVICES</h2>
            <p>
              The information provided when using the Services is not intended for distribution to or use by any
              person or entity in any jurisdiction or country where such distribution or use would be contrary to
              law or regulation or which would subject us to any registration requirement within such jurisdiction or
              country. Accordingly, those persons who choose to access the Services from other locations do so on
              their own initiative and are solely responsible for compliance with local laws, if and to the extent
              local laws are applicable.
            </p>
            <p>California Companion Chatbot Act SB-243</p>
          </section>

          <section id="section-2" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">2. INTELLECTUAL PROPERTY RIGHTS</h2>
            <h3 className="text-base font-semibold text-slate-900">Our intellectual property</h3>
            <p>
              We are the owner or the licensee of all intellectual property rights in our Services, including all
              source code, databases, functionality, software, website designs, audio, video, text, photographs, and
              graphics in the Services (collectively, the &quot;Content&quot;), as well as the trademarks, service
              marks, and logos contained therein (the &quot;Marks&quot;).
            </p>
            <p>
              Our Content and Marks are protected by copyright and trademark laws (and various other intellectual
              property rights and unfair competition laws) and treaties in the United States and around the world.
            </p>
            <p>
              The Content and Marks are provided in or through the Services &quot;AS IS&quot; for your personal,
              non-commercial use or internal business purpose only.
            </p>
            <h3 className="text-base font-semibold text-slate-900">Your use of our Services</h3>
            <p>
              Subject to your compliance with these Legal Terms, including the &quot;PROHIBITED ACTIVITIES&quot;
              section below, we grant you a non-exclusive, non-transferable, revocable license to: access the
              Services; and download or print a copy of any portion of the Content to which you have properly gained
              access, solely for your personal, non-commercial use or internal business purpose.
            </p>
            <p>
              Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no
              Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any
              commercial purpose whatsoever, without our express prior written permission.
            </p>
            <p>
              We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
            </p>
            <p>
              Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms
              and your right to use our Services will terminate immediately.
            </p>
            <h3 className="text-base font-semibold text-slate-900">Your submissions</h3>
            <p>
              By directly sending us any question, comment, suggestion, idea, feedback, or other information about the
              Services (&quot;Submissions&quot;), you agree to assign to us all intellectual property rights in such
              Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and
              dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation
              to you.
            </p>
          </section>

          <section id="section-3" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">3. USER REPRESENTATIONS</h2>
            <p>
              By using the Services, you represent and warrant that: (1) all registration information you submit will
              be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and
              promptly update such registration information as necessary; (3) you have the legal capacity and you
              agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you
              reside; (5) you will not access the Services through automated or non-human means, whether through a
              bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose;
              and (7) your use of the Services will not violate any applicable law or regulation.
            </p>
          </section>

          <section id="section-4" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">4. USER REGISTRATION</h2>
            <p>
              You may be required to register to use the Services. You agree to keep your password confidential and
              will be responsible for all use of your account and password. We reserve the right to remove, reclaim,
              or change a username you select if we determine, in our sole discretion, that such username is
              inappropriate, obscene, or otherwise objectionable.
            </p>
          </section>

          <section id="section-5" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">5. PROHIBITED ACTIVITIES</h2>
            <p>
              You may not access or use the Services for any purpose other than that for which we make the Services
              available. The Services may not be used in connection with any commercial endeavors except those that
              are specifically endorsed or approved by us.
            </p>
            <p>
              As a user of the Services, you agree not to: systematically retrieve data or other content from the
              Services to create or compile, directly or indirectly, a collection, compilation, database, or directory
              without written permission from us; trick, defraud, or mislead us and other users; circumvent, disable,
              or otherwise interfere with security-related features of the Services; disparage, tarnish, or otherwise
              harm us and/or the Services; use any information obtained from the Services in order to harass, abuse, or
              harm another person; make improper use of our support services or submit false reports of abuse or
              misconduct; use the Services in a manner inconsistent with any applicable laws or regulations; engage
              in unauthorized framing of or linking to the Services; upload or transmit viruses, Trojan horses, or
              other harmful material; engage in any automated use of the system; delete the copyright or other
              proprietary rights notice from any Content; attempt to impersonate another user or person; interfere
              with, disrupt, or create an undue burden on the Services; harass, annoy, intimidate, or threaten any of
              our employees or agents; attempt to bypass any security measures; copy or adapt the Services&apos;
              software; decipher, decompile, disassemble, or reverse engineer any of the software; use, launch,
              develop, or distribute any automated system; make any unauthorized use of the Services; use the Services
              as part of any effort to compete with us; use the Services to advertise or offer to sell goods and
              services; or sell or otherwise transfer your profile.
            </p>
          </section>

          <section id="section-6" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">6. USER GENERATED CONTRIBUTIONS</h2>
            <p>
              The Services may provide you with the opportunity to create, submit, post, display, transmit, perform,
              publish, distribute, or broadcast content and materials to us or on the Services, including but not
              limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal
              information or other material (collectively, &quot;Contributions&quot;). When you create or make
              available any Contributions, you represent and warrant that your Contributions comply with all
              applicable laws and these Legal Terms.
            </p>
          </section>

          <section id="section-7" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">7. CONTRIBUTION LICENSE</h2>
            <p>
              You and Services agree that we may access, store, process, and use any information and personal data
              that you provide and your choices (including settings). By submitting suggestions or other feedback
              regarding the Services, you agree that we can use and share such feedback for any purpose without
              compensation to you. We do not assert any ownership over your Contributions. You retain full ownership
              of all of your Contributions and any intellectual property rights associated with your Contributions.
            </p>
          </section>

          <section id="section-8" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">8. SERVICES MANAGEMENT</h2>
            <p>
              We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these
              Legal Terms; (2) take appropriate legal action against anyone who violates the law or these Legal Terms;
              (3) refuse, restrict access to, limit the availability of, or disable any of your Contributions; (4)
              remove from the Services or otherwise disable all files and content that are excessive in size or
              burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our
              rights and property.
            </p>
          </section>

          <section id="section-9" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">9. PRIVACY POLICY</h2>
            <p>
              We care about data privacy and security. By using the Services, you agree to be bound by our Privacy
              Policy posted on the Services, which is incorporated into these Legal Terms. The Services are hosted in
              the United States. If you access the Services from any other region of the world, you expressly consent
              to have your data transferred to and processed in the United States.
            </p>
          </section>

          <section id="section-10" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">10. TERM AND TERMINATION</h2>
            <p>
              These Legal Terms shall remain in full force and effect while you use the Services.
            </p>
            <p className="text-sm font-semibold uppercase leading-relaxed tracking-wide text-slate-900 sm:text-base">
              WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE
              DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES TO ANY PERSON FOR
              ANY REASON OR FOR NO REASON. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR
              ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE
              DISCRETION.
            </p>
          </section>

          <section id="section-11" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">11. MODIFICATIONS AND INTERRUPTIONS</h2>
            <p>
              We reserve the right to change, modify, or remove the contents of the Services at any time or for any
              reason at our sole discretion without notice. We cannot guarantee the Services will be available at
              all times. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the
              Services at any time or for any reason without notice to you.
            </p>
          </section>

          <section id="section-12" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">12. GOVERNING LAW</h2>
            <p>
              These Legal Terms and your use of the Services are governed by and construed in accordance with the laws
              of the State of California, without regard to its conflict of law principles.
            </p>
          </section>

          <section id="section-13" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">13. DISPUTE RESOLUTION</h2>
            <p>
              <span className="font-semibold text-slate-900">Informal Negotiations:</span> The Parties agree to first
              attempt to negotiate any Dispute informally for at least thirty (30) days before initiating
              arbitration.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Binding Arbitration:</span> If the Parties are unable to
              resolve a Dispute through informal negotiations, the Dispute will be finally and exclusively resolved by
              binding arbitration under the Commercial Arbitration Rules of the American Arbitration Association
              (&quot;AAA&quot;).{' '}
              <span className="font-semibold uppercase tracking-wide text-slate-900">
                YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY
                TRIAL.
              </span>{' '}
              The arbitration will take place in San Francisco, California.
            </p>
            <p>
              <span className="font-semibold text-slate-900">Restrictions:</span> Any arbitration shall be limited to
              the Dispute between the Parties individually. No arbitration shall be joined with any other proceeding,
              and there is no right or authority for any Dispute to be arbitrated on a class-action basis.
            </p>
          </section>

          <section id="section-14" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">14. CORRECTIONS</h2>
            <p>
              We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the
              information on the Services at any time, without prior notice.
            </p>
          </section>

          <section id="section-15" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">15. DISCLAIMER</h2>
            <p className="text-sm font-semibold uppercase leading-relaxed tracking-wide text-slate-900 sm:text-base">
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES
              WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS
              OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section id="section-16" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">16. LIMITATIONS OF LIABILITY</h2>
            <p className="text-sm font-semibold uppercase leading-relaxed tracking-wide text-slate-900 sm:text-base">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
              DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
              PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section id="section-17" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">17. INDEMNIFICATION</h2>
            <p>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all
              of our respective officers, agents, partners, and employees, from and against any loss, damage,
              liability, claim, or demand made by any third party due to or arising out of: (1) use of the Services;
              (2) breach of these Legal Terms; (3) any breach of your representations and warranties; (4) your
              violation of the rights of a third party; or (5) any overt harmful act toward any other user of the
              Services.
            </p>
          </section>

          <section id="section-18" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">18. USER DATA</h2>
            <p>
              We will maintain certain data that you transmit to the Services for the purpose of managing the
              performance of the Services. Although we perform regular routine backups of data, you are solely
              responsible for all data that you transmit or that relates to any activity you have undertaken using
              the Services.
            </p>
          </section>

          <section id="section-19" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">
              19. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </h2>
            <p>
              Visiting the Services, sending us emails, and completing online forms constitute electronic
              communications. You consent to receive electronic communications.
            </p>
            <p className="text-sm font-semibold uppercase leading-relaxed tracking-wide text-slate-900 sm:text-base">
              YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO
              ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR
              VIA THE SERVICES.
            </p>
          </section>

          <section id="section-20" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">20. CALIFORNIA USERS AND RESIDENTS</h2>
            <p>
              If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit
              of the Division of Consumer Services of the California Department of Consumer Affairs in writing at
              1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210
              or (916) 445-1254.
            </p>
          </section>

          <section id="section-21" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">21. MISCELLANEOUS</h2>
            <p>
              These Legal Terms and any policies or operating rules posted by us on the Services constitute the
              entire agreement and understanding between you and us. We may assign any or all of our rights and
              obligations to others at any time. If any provision of these Legal Terms is determined to be unlawful,
              void, or unenforceable, that provision is deemed severable from these Legal Terms and does not affect
              the validity and enforceability of any remaining provisions.
            </p>
          </section>

          <section
            id="section-22"
            className="scroll-mt-24 space-y-4 rounded-xl border border-slate-200 bg-slate-50/80 p-6"
          >
            <h2 className="text-xl font-bold tracking-tight text-indigo-950">22. CONTACT US</h2>
            <p>
              In order to resolve a complaint regarding the Services or to receive further information regarding use of
              the Services, please contact us at:
            </p>
            <address className="not-italic">
              <p className="font-semibold text-slate-900">Pentabyte</p>
              <p>14 Mint Plaza</p>
              <p>San Francisco, CA 94103</p>
              <p>United States</p>
            </address>
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
