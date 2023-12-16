import { Daily } from '../../types/dailies';
import November from './2023/11';
import December from './2023/12';

export const dailies: Daily[] = [...December, ...November];
