const CTAButton = () => {
  return (
    <div className="my-16 text-center">
      <p className="mb-6 text-lg font-medium text-brand-primary-500">
        Take the next step in managing your business transactions.
      </p>

      <a
        href="/"
        className="text-2xl inline-flex items-center justify-center rounded-full bg-brand-primary-500 px-8 py-3 font-semibold text-white transition hover:bg-brand-primary-600"
      >
        Get Started
      </a>
    </div>
  );
};

export default CTAButton;
