import { businessTypes } from '@destiny/common/data';
import { ValueOf } from '@destiny/common/types';

export type BusinessType = ValueOf<typeof businessTypes>;
