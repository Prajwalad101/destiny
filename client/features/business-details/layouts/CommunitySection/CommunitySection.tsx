import { SecondaryButton } from 'components';
import { useState } from 'react';
import { classNames } from 'utils/tailwind';
import QASection from '../QASection/QASection';
import ReviewSection from '../ReviewSection/ReviewSection';

interface CommunitySectionProps {
  className?: string;
}

export default function CommunitySection({
  className = '',
}: CommunitySectionProps) {
  const [selectedSection, setSelectedSection] = useState('reviews');

  return (
    <div className={classNames(className)}>
      <div className="mb-8 border-b border-gray-300" />
      <div className="mb-5 flex items-center justify-between">
        <h4 className="font-merriweather text-2xl font-bold">Community</h4>
        {selectedSection === 'reviews' && (
          <SecondaryButton className="px-6 py-2 sm:py-[10px]">
            Post Review
          </SecondaryButton>
        )}
        {selectedSection === 'q&a' && (
          <SecondaryButton className="px-6 py-2 sm:py-[10px]">
            Ask Question
          </SecondaryButton>
        )}
      </div>
      {/* Tabs */}
      <div className="mb-12 flex items-center gap-12">
        <button
          className={classNames(
            ' border-b-[3px] border-black px-3 py-2 text-xl font-medium',
            selectedSection !== 'reviews' ? 'border-black/0 text-black/60' : ''
          )}
          onClick={() => setSelectedSection('reviews')}
        >
          Reviews
        </button>
        <button
          className={classNames(
            'border-b-[3px] border-black px-3 py-2 text-xl font-medium',
            selectedSection !== 'q&a' ? 'border-black/0 text-black/60' : ''
          )}
          onClick={() => setSelectedSection('q&a')}
        >
          Q & A
        </button>
      </div>

      {selectedSection === 'reviews' && <ReviewSection />}
      {selectedSection === 'q&a' && <QASection />}
    </div>
  );
}
