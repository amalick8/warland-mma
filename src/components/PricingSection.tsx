import { useNavigate } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import PricingCard from './PricingCard';
import { PRICING } from '../data/siteData';

interface PricingSectionProps {
  className?: string;
}

export default function PricingSection({ className = 'py-24 bg-gray-50' }: PricingSectionProps) {
  const navigate = useNavigate();

  return (
    <section className={className}>
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Membership Pricing"
          subtitle="Transparent pricing options for individuals and families. Choose the plan that fits your lifestyle."
        />

        <div className="space-y-16">
          {PRICING.map((group) => (
            <div key={group.title} className="space-y-8">
              <div className="flex items-center space-x-4">
                <h3 className="text-2xl font-bold text-brand-black">{group.title}</h3>
                <div className="flex-grow h-px bg-gray-200" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.tiers.map((tier) => (
                  <PricingCard
                    key={`${group.title}-${tier.category}`}
                    tier={tier}
                    ctaLabel="SIGN UP"
                    onSelect={(option) =>
                      navigate('/intake', {
                        state: {
                          pricingCategory: group.title,
                          ageGroup: tier.category,
                          plan: option.label,
                          price: option.price,
                        },
                      })
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
