import { run as memoizeRun } from './memoize';
import { run as findLongestWordRun } from './findLongestWord';
import { run as factorialRun } from './factorial';
import { run as generateDashRun } from './generateDash';
import { run as flatArrayRun } from './flatArray';
import { run as promiseAllRun } from './promiseAll';
import { run as letterCounterRun } from './letterCounter';
import { run as customSetTimeoutRun } from './customSetTimeout';
import { run as mapFilterReduceRun } from './mapFilterReduce';
import { run as removeDuplicatesRun } from './removeDuplicates';
import { run as threeLettersDashRun } from './threeLettersDash';

import CarouselWorkspace from './Carousel';
import DebounceSearchWorkspace from './DebounceSearch';
import TicTacToeWorkspace from './TicTacToe';

export const jsWorkspaces: Record<string, () => void | Promise<void>> = {
  'memoize': memoizeRun,
  'find-longest-word': findLongestWordRun,
  'factorial': factorialRun,
  'generate-dash': generateDashRun,
  'flat-array': flatArrayRun,
  'promise-all': promiseAllRun,
  'letter-counter': letterCounterRun,
  'custom-settimeout': customSetTimeoutRun,
  'map-filter-reduce': mapFilterReduceRun,
  'remove-duplicates': removeDuplicatesRun,
  'three-letters-dash': threeLettersDashRun,
};

export const reactWorkspaces: Record<string, React.ComponentType> = {
  'use-debounce': DebounceSearchWorkspace,
  'carousel': CarouselWorkspace,
  'tic-tac-toe': TicTacToeWorkspace,
};
