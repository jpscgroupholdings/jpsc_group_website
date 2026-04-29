import { ArrowRightIcon } from "lucide-react";

const CTAButton = () => {
  return (
    <div className="py-8 flex flex-col items-center">
      <p className="mb-2 font-semibold uppercase tracking-widest text-gray-400">
        Ready to begin?
      </p>
      <p className="mb-5 text-lg font-medium text-center text-brand-primary-500">
        Take the next step in managing your business transactions.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-brand-primary-500 px-6 py-2.5 text-2xl font-semibold text-white transition hover:bg-brand-primary-600 hover:-translate-y-px"
      >
        Get started
        <ArrowRightIcon className="w-4 h-4" />
      </a>
      <div className="mt-8 w-full flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400 whitespace-nowrap">
          or reach out directly
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
    </div>
  );
};

export default CTAButton;
