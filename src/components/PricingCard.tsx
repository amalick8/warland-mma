import { motion } from 'motion/react';
import type { PricingTier } from '../data/siteData';
import Button from './Button';

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500"
    >
      <h4 className="text-brand-orange font-bold text-sm uppercase tracking-[0.2em] mb-6">{tier.category}</h4>
      <div className="space-y-6">
        {tier.options.map((option) => (
          <div key={option.label} className="flex justify-between items-center pb-4 border-b border-gray-50 last:border-0 last:pb-0">
            <span className="font-medium text-gray-700">{option.label}</span>
            <span className="text-2xl font-display font-bold text-brand-black">{option.price}</span>
          </div>
        ))}
      </div>
      <Button variant="primary" className="w-full mt-8 py-3 text-sm">
        SELECT PLAN
      </Button>
    </motion.div>
  );
}
