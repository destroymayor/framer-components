import { InfoIcon, CheckCircleIcon, AlertCircleIcon, XCircleIcon } from '@/components/Icon';

export const iconMapping = {
  default: null,
  primary: <InfoIcon className="h-6 w-6 text-primary" />,
  success: <CheckCircleIcon className="h-6 w-6 text-success" />,
  warning: <AlertCircleIcon className="h-6 w-6 text-warning" />,
  error: <XCircleIcon className="h-6 w-6 text-error" />,
};
