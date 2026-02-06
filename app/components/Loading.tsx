import { common } from '../content';

interface LoadingProps {
  companyName?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Loading({ 
  companyName = common.companyName, 
  size = 'md',
  className = ""
}: LoadingProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-dark-950 ${className}`}>
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className={`${sizeClasses[size]} border-4 border-primary-500/30 rounded-full`}></div>
          <div className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-primary-500 border-t-transparent rounded-full animate-spin`}></div>
        </div>
        <span className={`text-primary-400 font-heading font-semibold ${textSizeClasses[size]}`}>
          {companyName}
        </span>
      </div>
    </div>
  );
}
