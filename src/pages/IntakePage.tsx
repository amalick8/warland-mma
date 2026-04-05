import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';
import { PRICING, PROGRAMS } from '../data/siteData';

type PricingType = 'Standard Pricing' | 'Founding 50' | 'Non-Recurring Payments' | 'Not Sure Yet';
type IntakeAgeGroup = 'Adult' | 'Youth' | 'Family';
type ExperienceLevel = 'Beginner' | 'Some Experience' | 'Advanced';
type ContactMethod = 'Call' | 'Text' | 'Email';

interface IntakeLocationState {
  pricingCategory?: string;
  ageGroup?: string;
  plan?: string;
  price?: string;
  programName?: string;
}

interface MembershipOption {
  label: string;
  pricingCategory: PricingType;
  ageGroup: IntakeAgeGroup;
  plan: string;
  price: string;
}

interface CustomDropdownProps {
  label: string;
  value: string;
  placeholder: string;
  options: string[];
  onChange: (value: string) => void;
}

function CustomDropdown({ label, value, placeholder, options, onChange }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', onDocumentClick);
    return () => document.removeEventListener('mousedown', onDocumentClick);
  }, []);

  return (
    <div ref={rootRef} className="space-y-2">
      <label className="text-sm font-bold uppercase tracking-wider text-gray-500">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all cursor-pointer"
      >
        <span className={value ? 'text-brand-black' : 'text-gray-400'}>{value || placeholder}</span>
        <ChevronDown size={18} className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="border border-gray-200 rounded-xl bg-white shadow-lg overflow-hidden"
          >
            <div className="max-h-64 overflow-y-auto">
              {options.map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`w-full px-6 py-3 text-left transition-colors cursor-pointer ${value === option ? 'bg-brand-orange text-white' : 'text-brand-black hover:bg-gray-50'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function IntakePage() {
  const location = useLocation();
  const state = (location.state as IntakeLocationState | null) ?? null;

  const validPricingCategory = (value?: string): PricingType =>
    value === 'Standard Pricing' || value === 'Founding 50' || value === 'Non-Recurring Payments'
      ? value
      : 'Not Sure Yet';

  const validAgeGroup = (value?: string): IntakeAgeGroup | '' =>
    value === 'Adult' || value === 'Youth' || value === 'Family' ? value : '';

  const membershipOptions = useMemo<MembershipOption[]>(
    () =>
      PRICING.flatMap((group) =>
        group.tiers.flatMap((tier) =>
          tier.options.map((option) => ({
            label: `${tier.category} ${option.label}`,
            pricingCategory: group.title as PricingType,
            ageGroup: tier.category as IntakeAgeGroup,
            plan: option.label,
            price: option.price,
          })),
        ),
      ),
    [],
  );

  const matchedMembership = useMemo(
    () =>
      membershipOptions.find(
        (item) =>
          item.pricingCategory === state?.pricingCategory &&
          item.ageGroup === state?.ageGroup &&
          item.plan === state?.plan &&
          item.price === state?.price,
      ),
    [membershipOptions, state?.ageGroup, state?.plan, state?.price, state?.pricingCategory],
  );

  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ageGroup, setAgeGroup] = useState<IntakeAgeGroup | ''>(validAgeGroup(state?.ageGroup));
  const [programInterest, setProgramInterest] = useState(state?.programName ?? '');
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel | ''>('');
  const [preferredContactMethod, setPreferredContactMethod] = useState<ContactMethod | ''>('');
  const [contactValue, setContactValue] = useState('');
  const [bestTimeToContact, setBestTimeToContact] = useState('');
  const [goalInterest, setGoalInterest] = useState('');
  const [messageNotes, setMessageNotes] = useState('');
  const [paymentPreference, setPaymentPreference] = useState<PricingType>(validPricingCategory(state?.pricingCategory));
  const [membershipPreference, setMembershipPreference] = useState<string>(matchedMembership?.label ?? '');

  const selectedSummary = matchedMembership
    ? `You selected: ${matchedMembership.pricingCategory} -> ${matchedMembership.ageGroup} -> ${matchedMembership.plan} (${matchedMembership.price})`
    : state?.programName
      ? `You selected program: ${state.programName}`
      : '';

  useEffect(() => {
    setContactValue('');
  }, [preferredContactMethod]);

  const pricingTypeOptions: PricingType[] = ['Standard Pricing', 'Founding 50', 'Non-Recurring Payments', 'Not Sure Yet'];
  const membershipSelectionOptions = [
    'Adult 1 Class Membership',
    'Adult 2 Class Membership',
    'Adult Unlimited',
    'Youth 1 Class Membership',
    'Youth 2 Class Membership',
    'Youth Unlimited',
    'Family 1 Class Membership',
    'Family 2 Class Membership',
    'Family Unlimited',
  ];

  return (
    <section className="pt-40 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-bold mb-4 text-center text-brand-black">
              Start Your <span className="text-brand-orange">Intake</span>
            </h1>
            <p className="text-lg text-gray-600 text-center mb-12">
              Complete this quick form and our team will contact you to confirm your trial class or membership setup.
            </p>

            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
              {selectedSummary !== '' && (
                <div className="mb-8 p-5 rounded-2xl bg-gray-50 border border-gray-200">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-2">Selected Plan</p>
                  <p className="text-sm md:text-base font-semibold text-brand-black">{selectedSummary}</p>
                </div>
              )}

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Full Name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                    <input
                      type="email"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Phone Number</label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <CustomDropdown
                    label="Age Group"
                    value={ageGroup}
                    placeholder="Select Age Group"
                    options={['Adult', 'Youth', 'Family']}
                    onChange={(value) => setAgeGroup(value as IntakeAgeGroup)}
                  />
                </div>

                <CustomDropdown
                  label="Program of Interest"
                  value={programInterest}
                  placeholder="Select Program"
                  options={[...PROGRAMS.map((program) => program.name), 'Not Sure Yet']}
                  onChange={setProgramInterest}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CustomDropdown
                    label="Experience Level"
                    value={experienceLevel}
                    placeholder="Select Experience"
                    options={['Beginner', 'Some Experience', 'Advanced']}
                    onChange={(value) => setExperienceLevel(value as ExperienceLevel)}
                  />
                  <CustomDropdown
                    label="Preferred Contact Method"
                    value={preferredContactMethod}
                    placeholder="Select Contact Method"
                    options={['Call', 'Text', 'Email']}
                    onChange={(value) => setPreferredContactMethod(value as ContactMethod)}
                  />
                </div>

                {preferredContactMethod !== '' && (
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">
                      {preferredContactMethod === 'Email'
                        ? 'Email Address'
                        : preferredContactMethod === 'Call'
                          ? 'Phone Number'
                          : 'Mobile Number'}
                    </label>
                    <input
                      type={preferredContactMethod === 'Email' ? 'email' : 'tel'}
                      value={contactValue}
                      onChange={(e) => setContactValue(e.target.value)}
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                      placeholder={
                        preferredContactMethod === 'Email'
                          ? 'you@example.com'
                          : preferredContactMethod === 'Call'
                            ? '(555) 000-0000'
                            : '(555) 111-2222'
                      }
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Best Time to Contact</label>
                  <input
                    type="text"
                    value={bestTimeToContact}
                    onChange={(e) => setBestTimeToContact(e.target.value)}
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                    placeholder="Weekdays after 5 PM"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Goal / What are you interested in?</label>
                  <textarea
                    rows={3}
                    value={goalInterest}
                    onChange={(e) => setGoalInterest(e.target.value)}
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all resize-none"
                    placeholder="Fitness, self-defense, competition, discipline, etc."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Message / Notes</label>
                  <textarea
                    rows={4}
                    value={messageNotes}
                    onChange={(e) => setMessageNotes(e.target.value)}
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all resize-none"
                    placeholder="Share anything else that would help us guide you."
                  />
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-6">
                  <h3 className="text-xl font-bold text-brand-black">Payment Preference</h3>

                  <CustomDropdown
                    label="Pricing Type"
                    value={paymentPreference}
                    placeholder="Select Pricing Type"
                    options={pricingTypeOptions}
                    onChange={(value) => setPaymentPreference(value as PricingType)}
                  />

                  <CustomDropdown
                    label="Membership Selection"
                    value={membershipPreference}
                    placeholder="Select Membership"
                    options={membershipSelectionOptions}
                    onChange={setMembershipPreference}
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full py-5">
                  SUBMIT INTAKE
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
