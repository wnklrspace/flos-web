import { Daily } from '../../types/dailies';
import November from './2023/11';
import December from './2023/12';
import January from './2024/01';

export const dailies: Daily[] = [...January, ...December, ...November];
