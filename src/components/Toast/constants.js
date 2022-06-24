import { InfoIcon, CheckCircleIcon, AlertCircleIcon, XCircleIcon } from '@/components/Icon';

export const iconMapping = {
  default: null,
  primary: <InfoIcon className="h-6 w-6 text-sky-600" />,
  success: <CheckCircleIcon className="h-6 w-6 text-green-600" />,
  warning: <AlertCircleIcon className="h-6 w-6 text-amber-600" />,
  error: <XCircleIcon className="h-6 w-6 text-rose-600" />,
};
