import { GatedCTA } from './GatedCTA';
import { LeadForm } from './LeadForm';

interface GatedDownloadProps {
  buttonLabel: string;
  modalTitle: string;
  formType: string;
}

export function GatedDownload({ buttonLabel, modalTitle, formType }: GatedDownloadProps) {
  return (
    <GatedCTA label={buttonLabel} modalTitle={modalTitle} formType={formType}>
      <LeadForm
        id={`form-${formType}`}
        variant="inline"
        formType={formType}
        ctaLabel="Send My VIP Package"
      />
    </GatedCTA>
  );
}
