export default function ImportantDateSelectorComponent() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      

      <p className="text-page-body text-jpm-gray-700 mb-6 leading-relaxed">
        Following our{' '}
        <a
          href="/blog/date-selector-challenges"
          className="text-jpm-brown-600 hover:text-jpm-brown-700 underline"
        >
          previous post about date input challenges
        </a>
        , this week we're diving into how we built our specialized
        ImportantDateSelector component. This case study covers the specific
        design decisions that transformed our user experience and boosted
        conversion rates.
      </p>

      <h2 className="text-page-h2 font-semibold text-jpm-blue-800 mt-12 mb-6">
        The Design Philosophy Shift
      </h2>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        After identifying the critical UX issues with traditional date pickers,
        we established core principles for our new component:
      </p>

      <ol className="text-page-body text-jpm-gray-700 mb-6 leading-relaxed list-decimal pl-6 space-y-2">
        <li>
          <strong className="text-jpm-blue-800">
            Manual entry first, calendar picker optional
          </strong>
        </li>
        <li>
          <strong className="text-jpm-blue-800">
            Separate fields for clarity
          </strong>{' '}
          (month/day/year)
        </li>
        <li>
          <strong className="text-jpm-blue-800">
            Real-time validation with helpful feedback
          </strong>
        </li>
        <li>
          <strong className="text-jpm-blue-800">
            Accessibility built-in, not bolted-on
          </strong>
        </li>
        <li>
          <strong className="text-jpm-blue-800">
            Mobile-optimized from the start
          </strong>
        </li>
      </ol>

      <p className="text-page-body text-jpm-gray-700 mb-6 leading-relaxed">
        These principles directly address the issues outlined in our{' '}
        <a
          href="https://github.com/jpmorgan-payments/embedded-finance/blob/main/embedded-components/src/components/ux/ImportantDateSelector/ANALYSIS.md#key-ux-strategies-for-date-input"
          target="_blank"
          rel="noopener noreferrer"
          className="text-jpm-brown-600 hover:text-jpm-brown-700 underline"
        >
          UX strategy analysis
        </a>
        .
      </p>

      <h2 className="text-page-h2 font-semibold text-jpm-blue-800 mt-12 mb-6">
        Key Design Decisions
      </h2>

      <h3 className="text-page-h3 font-semibold text-jpm-blue-700 mt-8 mb-4">
        1. Three Separate Fields Instead of One
      </h3>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        <strong className="text-jpm-blue-800">The Decision:</strong> Split date
        entry into distinct Month, Day, and Year fields.
      </p>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        <strong className="text-jpm-blue-800">Why It Works:</strong>
      </p>
      <ul className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed list-disc pl-6 space-y-1">
        <li>Eliminates format confusion (MM/DD/YYYY vs DD/MM/YYYY)</li>
        <li>Allows targeted validation per field</li>
        <li>Clearer mental model for users</li>
        <li>Better screen reader experience</li>
      </ul>

      <p className="text-page-body text-jpm-gray-700 mb-6 leading-relaxed">
        <strong className="text-jpm-blue-800">Implementation Detail:</strong> We
        use a Select component for months (preventing typos) and text inputs
        with{' '}
        <code className="bg-jpm-gray-100 text-jpm-blue-800 px-2 py-1 rounded text-page-small font-mono">
          inputmode="numeric"
        </code>{' '}
        for day and year fields.
      </p>

      <h3 className="text-page-h3 font-semibold text-jpm-blue-700 mt-8 mb-4">
        2. No Auto-Advance Focus
      </h3>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        <strong className="text-jpm-blue-800">The Decision:</strong> Don't
        automatically move focus between fields when users finish typing.
      </p>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        <strong className="text-jpm-blue-800">
          Critical for Accessibility:
        </strong>{' '}
        Auto-advance breaks keyboard navigation patterns and confuses screen
        reader users. This was non-negotiable for WCAG compliance.
      </p>

      <p className="text-page-body text-jpm-gray-700 mb-6 leading-relaxed">
        <strong className="text-jpm-blue-800">User Benefit:</strong> Gives users
        control over their navigation path, reducing errors and frustration.
      </p>

      <h3 className="text-page-h3 font-semibold text-jpm-blue-700 mt-8 mb-4">
        3. Input Type Strategy
      </h3>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        <strong className="text-jpm-blue-800">The Challenge:</strong>{' '}
        <code className="bg-jpm-gray-100 text-jpm-blue-800 px-2 py-1 rounded text-page-small font-mono">
          &lt;input type="number"&gt;
        </code>{' '}
        has inconsistent browser styling and behavior.
      </p>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        <strong className="text-jpm-blue-800">Our Solution:</strong> Use{' '}
        <code className="bg-jpm-gray-100 text-jpm-blue-800 px-2 py-1 rounded text-page-small font-mono">
          &lt;input type="text" inputmode="numeric" pattern="[0-9]*"&gt;
        </code>
      </p>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        <strong className="text-jpm-blue-800">Why This Works:</strong>
      </p>
      <ul className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed list-disc pl-6 space-y-1">
        <li>Triggers numeric keyboard on mobile devices</li>
        <li>Maintains consistent styling across browsers</li>
        <li>Avoids spinner controls that confuse users</li>
        <li>Better compatibility with validation patterns</li>
      </ul>

      <p className="text-page-body text-jpm-gray-700 mb-6 leading-relaxed">
        This approach follows{' '}
        <a
          href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-jpm-brown-600 hover:text-jpm-brown-700 underline"
        >
          GOV.UK Design System best practices
        </a>{' '}
        for numeric inputs.
      </p>

      <h2 className="text-page-h2 font-semibold text-jpm-blue-800 mt-12 mb-6">
        Technical Implementation Highlights
      </h2>

      <h3 className="text-page-h3 font-semibold text-jpm-blue-700 mt-8 mb-4">
        Smart Validation Logic
      </h3>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        Our validation approach handles edge cases that break standard date
        pickers:
      </p>

      <pre className="bg-jpm-gray-100 border border-jpm-gray-200 rounded-lg p-4 mb-6 overflow-x-auto">
        <code className="text-page-small font-mono text-jpm-blue-800">
          {`// Leap year validation example
const validateDate = (day: string, month: string, year: string) => {
  const date = new Date(yearNum, monthNum - 1, dayNum);
  
  // Check if the date "rolled over" to next month
  if (date.getFullYear() !== yearNum || 
      date.getMonth() !== monthNum - 1 || 
      date.getDate() !== dayNum) {
    return { isValid: false, errorMessage: 'Invalid date' };
  }
  
  // Additional range checks...
};`}
        </code>
      </pre>

      <h3 className="text-page-h3 font-semibold text-jpm-blue-700 mt-8 mb-4">
        Accessibility Features
      </h3>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        Our component includes comprehensive accessibility support:
      </p>

      <ul className="text-page-body text-jpm-gray-700 mb-6 leading-relaxed list-disc pl-6 space-y-2">
        <li>
          <strong className="text-jpm-blue-800">Semantic HTML:</strong> Proper{' '}
          <code className="bg-jpm-gray-100 text-jpm-blue-800 px-2 py-1 rounded text-page-small font-mono">
            &lt;label&gt;
          </code>{' '}
          associations and ARIA attributes
        </li>
        <li>
          <strong className="text-jpm-blue-800">Keyboard Navigation:</strong>{' '}
          Full keyboard accessibility without auto-advance
        </li>
        <li>
          <strong className="text-jpm-blue-800">Screen Reader Support:</strong>{' '}
          Clear field labels and error announcements
        </li>
        <li>
          <strong className="text-jpm-blue-800">Focus Management:</strong>{' '}
          Visible focus indicators and logical tab order
        </li>
      </ul>

      <h3 className="text-page-h3 font-semibold text-jpm-blue-700 mt-8 mb-4">
        Mobile Optimization
      </h3>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        Key mobile improvements:
      </p>

      <ul className="text-page-body text-jpm-gray-700 mb-6 leading-relaxed list-disc pl-6 space-y-2">
        <li>
          <strong className="text-jpm-blue-800">Numeric Keyboard:</strong>{' '}
          <code className="bg-jpm-gray-100 text-jpm-blue-800 px-2 py-1 rounded text-page-small font-mono">
            inputmode="numeric"
          </code>{' '}
          triggers the right keyboard
        </li>
        <li>
          <strong className="text-jpm-blue-800">Touch-Friendly Targets:</strong>{' '}
          Larger touch areas for easier interaction
        </li>
        <li>
          <strong className="text-jpm-blue-800">
            No Tiny Calendar Navigation:
          </strong>{' '}
          Eliminates frustrating month/year scrolling
        </li>
        <li>
          <strong className="text-jpm-blue-800">Responsive Layout:</strong>{' '}
          Adapts to different screen sizes gracefully
        </li>
      </ul>

      <h2 className="text-page-h2 font-semibold text-jpm-blue-800 mt-12 mb-6">
        Measurable Results
      </h2>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        After deploying our new ImportantDateSelector component, we tracked
        significant improvements:
      </p>

      <div className="bg-sellsense-secondary-bg border border-sellsense-secondary/20 rounded-lg p-6 mb-6">
        <ul className="text-page-body text-jpm-gray-700 leading-relaxed list-disc pl-6 space-y-2">
          <li>
            <strong className="text-jpm-blue-800">
              Significant reduction in form abandonment
            </strong>{' '}
            at date input steps
          </li>
          <li>
            <strong className="text-jpm-blue-800">
              Substantial decrease in support tickets
            </strong>{' '}
            related to date entry issues
          </li>
          <li>
            <strong className="text-jpm-blue-800">
              Strong WCAG compliance scores
            </strong>{' '}
            in accessibility audits
          </li>
          <li>
            <strong className="text-jpm-blue-800">
              Improved mobile completion rates
            </strong>{' '}
            across all user segments
          </li>
        </ul>
      </div>

      <h2 className="text-page-h2 font-semibold text-jpm-blue-800 mt-12 mb-6">
        Component API Design
      </h2>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        We designed the component API to be both flexible and opinionated:
      </p>

      <pre className="bg-jpm-gray-100 border border-jpm-gray-200 rounded-lg p-4 mb-6 overflow-x-auto">
        <code className="text-page-small font-mono text-jpm-blue-800">
          {`<ImportantDateSelector
  label="Date of Birth"
  value={dateValue}
  onChange={handleDateChange}
  minDate="1900-01-01"
  maxDate="2006-12-31"
  required
  errorMessage={validationError}
  helpText="Enter your birth date"
  className="custom-styling"
/>`}
        </code>
      </pre>

      <h2 className="text-page-h2 font-semibold text-jpm-blue-800 mt-12 mb-6">
        Lessons Learned
      </h2>

      <ol className="text-page-body text-jpm-gray-700 mb-6 leading-relaxed list-decimal pl-6 space-y-3">
        <li>
          <strong className="text-jpm-blue-800">
            Context Matters More Than Convention:
          </strong>{' '}
          Just because most sites use calendar pickers doesn't mean they're
          right for your use case.
        </li>
        <li>
          <strong className="text-jpm-blue-800">
            Accessibility Drives Innovation:
          </strong>{' '}
          Solving for screen readers led us to solutions that benefited all
          users.
        </li>
        <li>
          <strong className="text-jpm-blue-800">
            Validate Early and Often:
          </strong>{' '}
          Real-time validation prevents user frustration and reduces support
          burden.
        </li>
        <li>
          <strong className="text-jpm-blue-800">
            Mobile Constraints Improve Desktop UX:
          </strong>{' '}
          Optimizing for touch interfaces made our desktop experience cleaner
          too.
        </li>
      </ol>

      <h2 className="text-page-h2 font-semibold text-jpm-blue-800 mt-12 mb-6">
        Implementation Resources
      </h2>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        For teams interested in implementing similar solutions, check out our
        complete implementation:
      </p>

      <ul className="text-page-body text-jpm-gray-700 mb-6 leading-relaxed list-disc pl-6 space-y-2">
        <li>
          <a
            href="https://github.com/jpmorgan-payments/embedded-finance/blob/main/embedded-components/src/components/ux/ImportantDateSelector/ImportantDateSelector.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-jpm-brown-600 hover:text-jpm-brown-700 underline"
          >
            Complete component source code
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jpmorgan-payments/embedded-finance/blob/main/embedded-components/src/components/ux/ImportantDateSelector/PRD.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-jpm-brown-600 hover:text-jpm-brown-700 underline"
          >
            Product requirements documentation
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jpmorgan-payments/embedded-finance/blob/main/embedded-components/src/components/ux/ImportantDateSelector/ANALYSIS.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-jpm-brown-600 hover:text-jpm-brown-700 underline"
          >
            Detailed UX analysis and user research findings
          </a>
        </li>
      </ul>

      <h2 className="text-page-h2 font-semibold text-jpm-blue-800 mt-12 mb-6">
        What's Next?
      </h2>

      <p className="text-page-body text-jpm-gray-700 mb-4 leading-relaxed">
        Building this component taught us that solving real user problems often
        requires questioning established patterns. Our ImportantDateSelector
        isn't just a better date picker – it's a specialized tool designed for
        specific contexts.
      </p>

      <p className="text-page-body text-jpm-gray-700 mb-6 leading-relaxed">
        We're now applying these learnings to other form components, always
        starting with user research and real-world testing rather than
        assumptions about what "should" work.
      </p>

      <hr className="border-jpm-gray-200 my-8" />

      <p className="text-page-body text-jpm-gray-600 italic leading-relaxed">
        Want to discuss component design patterns or share your own UX
        challenges? Connect with our team or contribute to our open-source
        embedded finance components.
      </p>
    </div>
  );
}
