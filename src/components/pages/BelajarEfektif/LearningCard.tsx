import { LucideIcon } from "lucide-react";

interface LearningCardProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function LearningCard({ number, title, description, icon: Icon }: LearningCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 hover:border-[#7e57c2] group">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#7e57c2]/10 flex items-center justify-center group-hover:bg-[#7e57c2] transition-colors duration-300">
            <Icon className="w-6 h-6 text-[#7e57c2] group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#7e57c2] opacity-60">{number.toString().padStart(2, '0')}</span>
            <h3 className="text-lg">{title}</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
