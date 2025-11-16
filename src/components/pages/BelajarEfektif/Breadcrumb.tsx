import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
          {item.href ? (
            <a
              href={item.href}
              className="text-gray-600 hover:text-[#7e57c2] transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-[#7e57c2]">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
