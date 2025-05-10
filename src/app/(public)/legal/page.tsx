import Wrapper from "@/components/Wrapper";

// app/legal/page.tsx
export default function LegalPage() {
  return (
  <Wrapper>
      <main className="prose dark:prose-invert max-w-4xl mx-auto px-4 py-20">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. We collect minimal personal data necessary to
        deliver our services effectively. This includes your email address for account
        creation and newsletter delivery.
      </p>
      <p>
        We do not sell or share your data with third parties without consent, except when
        required by law. You may unsubscribe at any time using the link in our emails.
      </p>

      <h2>Cookies</h2>
      <p>
        Our website uses cookies to enhance user experience. These cookies are only used
        for basic analytics and session persistence.
      </p>

      <h1 className="mt-16">Terms of Service</h1>
      <p>
        By using our service, you agree not to misuse the platform, violate any laws, or
        infringe on others' rights. We reserve the right to terminate access for
        violations.
      </p>

      <h2>Account Responsibilities</h2>
      <p>
        You are responsible for safeguarding your account and password. Please notify us
        immediately if you suspect unauthorized use.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms occasionally. Users will be notified of significant
        changes via email or in-app announcements.
      </p>

      <p className="text-sm text-gray-500 mt-10">
        Last updated: April 17, 2025
      </p>

      <h1 className="mt-24">Contact & Support</h1>
      <p>
        Have questions, feedback, or need help? We're here to support you. Reach out
        through any of the methods below:
      </p>

      <ul>
        <li>
          📧 <strong>Email:</strong> <a href="mailto:support@yournewsletterapp.com">support@yournewsletterapp.com</a>
        </li>
        <li>
          💬 <strong>Live Chat:</strong> Available on the bottom right of every page
        </li>
        <li>
          📄 <strong>Help Center:</strong> <a href="/help">/help</a> – FAQs and guides
        </li>
        <li>
          🐦 <strong>Twitter:</strong> <a href="https://twitter.com/yourapp">@yourapp</a>
        </li>
      </ul>

      <p>
        Our support team is available Monday to Friday, 9AM – 6PM UTC.
      </p>
    </main>
  </Wrapper>
  );
}

