import { PostReviewModal } from '@features/business-details/components';
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
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  return (
    <div className={classNames('relative', className)}>
      <div className="b mb-8 border-b border-gray-300" />
      <div className="mb-5 flex items-center justify-between">
        <h4 className="font-merriweather text-2xl font-bold">Community</h4>
        {selectedSection === 'reviews' && (
          <SecondaryButton
            className="px-6 py-2 sm:py-[10px]"
            onClick={() => setReviewModalOpen(true)}
          >
            Post Review
          </SecondaryButton>
        )}
        {selectedSection === 'q&a' && (
          // AskQuestion button is rendered here with portal
          <div id="ask-question-button" />
        )}
      </div>
      {/* Tabs */}
      <div className="mb-8 flex items-center gap-8">
        <button
          className={classNames(
            ' border-b-[3px]  border-black px-3 py-2 text-lg font-medium',
            selectedSection !== 'reviews' ? 'border-black/0 text-black/60' : ''
          )}
          onClick={() => setSelectedSection('reviews')}
        >
          Reviews
        </button>
        <button
          className={classNames(
            'border-b-[3px] border-black px-3 py-2 text-lg font-medium',
            selectedSection !== 'q&a' ? 'border-black/0 text-black/60' : ''
          )}
          onClick={() => setSelectedSection('q&a')}
        >
          Q & A
        </button>
      </div>
      <PostReviewModal
        isOpen={reviewModalOpen}
        closeModal={() => setReviewModalOpen(false)}
      />

      {selectedSection === 'reviews' && <ReviewSection />}
      {selectedSection === 'q&a' && <QASection />}
    </div>
  );
}
