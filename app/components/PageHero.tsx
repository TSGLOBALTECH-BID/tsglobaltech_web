interface PageHeroProps {
  badge?: string;
  title: string;
  titleGradient?: string;
  description: string;
  badgeColor?: 'primary' | 'secondary' | 'accent' | 'green' | 'cyan' | 'pink';
  gradientColors?: string;
  backgroundEffects?: boolean;
  className?: string;
}

export default function PageHero({
  badge,
  title,
  titleGradient,
  description,
  badgeColor = 'primary',
  gradientColors = 'from-primary-400 via-secondary-400 to-accent-400',
  backgroundEffects = true,
  className = '',
}: PageHeroProps) {
  const badgeColorClasses = {
    primary: 'bg-primary-500/10 border-primary-500/20 text-primary-400',
    secondary: 'bg-secondary-500/10 border-secondary-500/20 text-secondary-400',
    accent: 'bg-accent-500/10 border-accent-500/20 text-accent-400',
    green: 'bg-green-500/10 border-green-500/20 text-green-400',
    cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    pink: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
  };

  return (
    <section className={`pt-32 pb-20 relative overflow-hidden ${className}`}>
      {/* Background Effects */}
      {backgroundEffects && (
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        {badge && (
          <span className={`inline-block px-4 py-2 ${badgeColorClasses[badgeColor]} rounded-full text-sm font-medium mb-6`}>
            {badge}
          </span>
        )}
        
        {/* Title */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          {titleGradient ? (
            <>
              {title} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientColors}`}>{titleGradient}</span>
            </>
          ) : (
            title
          )}
        </h1>
        
        {/* Description */}
        <p className="text-lg text-dark-300 max-w-3xl mx-auto mb-10">
          {description}
        </p>
      </div>
    </section>
  );
}
