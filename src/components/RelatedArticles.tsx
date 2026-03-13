import Link from 'next/link';

export interface RelatedLink {
  href: string;
  label: string;
  description: string;
}

interface RelatedArticlesProps {
  links: RelatedLink[];
}

export default function RelatedArticles({ links }: RelatedArticlesProps) {
  if (links.length === 0) return null;

  return (
    <section className="mt-12 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        Related Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all"
          >
            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              {link.label}
            </h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
