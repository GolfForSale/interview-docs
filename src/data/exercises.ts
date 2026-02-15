import { Exercise } from '../types';

export const exercises: Exercise[] = [
  // ─── JAVASCRIPT EXERCISES ────────────────────────────────────────────
  {
    id: 'memoize',
    title: 'Memoize Function',
    category: 'javascript',
    description:
      'Implement a memoization higher-order function. It should cache results of function calls and return the cached result when the same inputs occur again.',
    filePath: 'src/workspace/memoize.ts',
    solution: `const memo = (fn) => {
  const cache = {};
  return (...args) => {
    const key = args.toString();
    if (cache[key] !== undefined) {
      console.log('  → from cache');
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    console.log('  → computed');
    return result;
  };
};

const add = (a, b) => a + b;
const memoAdd = memo(add);
console.log('calc', memoAdd(1, 2));
console.log('cache', memoAdd(1, 2));
console.log('calc', memoAdd(3, 4));`,
    testCases: [
      { input: 'memoAdd(1, 2)', expectedOutput: '3' },
      { input: 'memoAdd(1, 2) (cached)', expectedOutput: '3' },
      { input: 'memoAdd(3, 4)', expectedOutput: '7' },
    ],
  },

  {
    id: 'find-longest-word',
    title: 'Find Longest Word',
    category: 'javascript',
    description:
      'Write a function that takes a string of words and returns the longest word.',
    filePath: 'src/workspace/findLongestWord.ts',
    solution: `const findLongestWord = (text) => {
  const splittedText = text.split(' ');
  return splittedText.reduce((acc, word) => {
    if (acc.length > word.length) {
      return acc;
    }
    return word;
  }, '');
};

console.log(findLongestWord("The quick brown fox jumped"));
console.log(findLongestWord("I love javascript programming"));`,
    testCases: [
      { input: '"The quick brown fox jumped"', expectedOutput: 'jumped' },
      { input: '"I love javascript programming"', expectedOutput: 'programming' },
    ],
  },

  {
    id: 'factorial',
    title: 'Factorial',
    category: 'javascript',
    description:
      'Implement a recursive factorial function.\nExample: 5! = 5 × 4 × 3 × 2 × 1 = 120',
    filePath: 'src/workspace/factorial.ts',
    solution: `const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(5));   // 120
console.log(factorial(0));   // 1
console.log(factorial(1));   // 1
console.log(factorial(10));  // 3628800`,
    testCases: [
      { input: '5', expectedOutput: '120' },
      { input: '0', expectedOutput: '1' },
      { input: '10', expectedOutput: '3628800' },
    ],
  },

  {
    id: 'generate-dash',
    title: 'Generate Dash in Text',
    category: 'javascript',
    description:
      'Write a function that inserts a dash between two consecutive odd digits in a number string.\nInput: "112233" → Output: "1-1223-3"',
    filePath: 'src/workspace/generateDash.ts',
    solution: `const generateDash = (text) => {
  const splittedText = text.split('');
  return splittedText.reduce((acc, currentLetter, index) => {
    const nextLetter = splittedText[index + 1];
    if (currentLetter === nextLetter && currentLetter % 2 !== 0) {
      return [...acc, currentLetter, '-'];
    }
    return [...acc, currentLetter];
  }, []).join('');
};

console.log(generateDash("112233"));  // "1-1223-3"
console.log(generateDash("13579"));   // "1-3-5-7-9"`,
    testCases: [
      { input: '"112233"', expectedOutput: '1-1223-3' },
      { input: '"13579"', expectedOutput: '1-3-5-7-9' },
    ],
  },

  {
    id: 'flat-array',
    title: 'Flatten Array',
    category: 'javascript',
    description:
      'Write a function that flattens a deeply nested array into a single-level array.\nInput: [1, 2, 3, [4, 5, [5, 4]]] → Output: [1, 2, 3, 4, 5, 5, 4]',
    filePath: 'src/workspace/flatArray.ts',
    solution: `const flatArr = (arrayToFlat) => {
  const flatArray = [];
  const makeFlat = (arr) => {
    arr.forEach(el => {
      if (el instanceof Array) {
        makeFlat(el);
        return;
      }
      flatArray.push(el);
    });
  };
  makeFlat(arrayToFlat);
  return flatArray;
};

console.log(flatArr([1, 2, 3, [4, 5, [5, 4]]]));
console.log(flatArr([1, [2, [3, [4, [5]]]]]));`,
    testCases: [
      { input: '[1, 2, 3, [4, 5, [5, 4]]]', expectedOutput: '[1, 2, 3, 4, 5, 5, 4]' },
      { input: '[1, [2, [3, [4, [5]]]]]', expectedOutput: '[1, 2, 3, 4, 5]' },
    ],
  },

  {
    id: 'promise-all',
    title: 'Promise.all Implementation',
    category: 'javascript',
    description:
      'Implement your own version of Promise.all. It should take an array of values/promises and resolve when all of them are resolved, returning an array of results in the same order.',
    filePath: 'src/workspace/promiseAll.ts',
    solution: `const promiseAll = async (values) => {
  return new Promise((resolve) => {
    const results = [];
    let completed = 0;
    values.forEach((singlePromise, index) => {
      Promise.resolve(singlePromise).then((resolvedSingle) => {
        results[index] = resolvedSingle;
        completed++;
        if (values.length === completed) resolve(results);
      });
    });
  });
};

async function run() {
  const result = await promiseAll([
    5,
    Promise.resolve("test"),
    new Promise((resolve) => {
      setTimeout(() => resolve([8]), 500);
    }),
    new Promise((resolve) => {
      setTimeout(() => resolve("1234"), 1500);
    }),
    "abc",
  ]);
  console.log("result:", JSON.stringify(result));
}
run();`,
    testCases: [
      { input: '[5, Promise.resolve("test"), ...]', expectedOutput: '[5,"test",[8],"1234","abc"]' },
    ],
  },

  {
    id: 'letter-counter',
    title: 'Letter Counter',
    category: 'javascript',
    description:
      'Write a function that counts occurrences of each letter in a string.\nInput: "hello" → Output: { h: 1, e: 1, l: 2, o: 1 }',
    filePath: 'src/workspace/letterCounter.ts',
    solution: `const calcString = (text) => {
  return text.split('').reduce((acc, letter) => {
    if (acc[letter]) {
      return { ...acc, [letter]: acc[letter] + 1 };
    } else {
      return { ...acc, [letter]: 1 };
    }
  }, {});
};

console.log(JSON.stringify(calcString("hello")));
console.log(JSON.stringify(calcString("javascript")));`,
    testCases: [
      { input: '"hello"', expectedOutput: '{"h":1,"e":1,"l":2,"o":1}' },
    ],
  },

  {
    id: 'custom-settimeout',
    title: 'Custom setTimeout',
    category: 'javascript',
    description:
      'Implement your own setTimeout using requestAnimationFrame. The function should call the callback after the specified delay.',
    filePath: 'src/workspace/customSetTimeout.ts',
    solution: `const mySetTimeout = (fn, delay) => {
  const startTime = new Date().getTime();
  const checkTime = () => {
    const currentTime = new Date().getTime();
    if (currentTime - startTime < delay) {
      requestAnimationFrame(checkTime);
    } else {
      return fn();
    }
  };
  checkTime();
};

console.log("Starting timer...");
mySetTimeout(() => {
  console.log("Timer fired after ~1000ms!");
}, 1000);`,
    testCases: [
      { input: '() => "done", 1000', expectedOutput: 'Calls function after ~1000ms' },
    ],
  },

  {
    id: 'map-filter-reduce',
    title: 'Map, Filter, Reduce',
    category: 'javascript',
    description:
      'Implement your own versions of Array.map, Array.filter, and Array.reduce.',
    filePath: 'src/workspace/mapFilterReduce.ts',
    solution: `const myMap = (array, calculation) => {
  const result = [];
  array.forEach(element => {
    result.push(calculation(element));
  });
  return result;
};

const myFilter = (array, calculation) => {
  const result = [];
  array.forEach((element) => {
    if (calculation(element)) {
      result.push(element);
    }
  });
  return result;
};

const myReduce = (array, initialValue, calculation) => {
  let result = initialValue;
  array.forEach((el) => {
    result = calculation(result, el);
  });
  return result;
};

const myArray = [1, 2, 3, 4, 5];
console.log("map x2:", myMap(myArray, (x) => x * 2));
console.log("filter even:", myFilter(myArray, (x) => x % 2 === 0));
console.log("reduce sum:", myReduce(myArray, 0, (acc, x) => acc + x));`,
    testCases: [
      { input: '[1,2,3,4,5], x => x*2', expectedOutput: '[2, 4, 6, 8, 10]' },
      { input: '[1,2,3,4,5], x => x%2===0', expectedOutput: '[2, 4]' },
      { input: '[1,2,3,4,5], 0, (acc,x) => acc+x', expectedOutput: '15' },
    ],
  },

  {
    id: 'remove-duplicates',
    title: 'Remove Duplicates',
    category: 'javascript',
    description:
      'Write a function that removes duplicate values from an array. Try to implement it in multiple ways (filter+indexOf, Set, reduce).',
    filePath: 'src/workspace/removeDuplicates.ts',
    solution: `// Method 1: filter + indexOf
const removeDuplicates1 = (arr) => {
  return arr.filter((el, index) => arr.indexOf(el) === index);
};

// Method 2: Set
const removeDuplicates2 = (arr) => {
  return [...new Set(arr)];
};

// Method 3: reduce
const removeDuplicates3 = (arr) => {
  return arr.reduce((acc, el) => {
    if (!acc.includes(el)) {
      acc.push(el);
    }
    return acc;
  }, []);
};

const myArray = [1, 2, 3, 4, 1, 2, 5, 3];
console.log("filter+indexOf:", removeDuplicates1(myArray));
console.log("Set:", removeDuplicates2(myArray));
console.log("reduce:", removeDuplicates3(myArray));`,
    testCases: [
      { input: '[1, 2, 3, 4, 1, 2, 5, 3]', expectedOutput: '[1, 2, 3, 4, 5]' },
    ],
  },

  {
    id: 'three-letters-dash',
    title: 'Three Same Letters → Dash',
    category: 'javascript',
    description:
      'Write a function that replaces three or more consecutive identical characters with an underscore.\nExample: "aaabbc" → "_bc", "aabbcccc" → "aabb_"',
    filePath: 'src/workspace/threeLettersDash.ts',
    solution: `const handleText = (initText) => {
  const genText = initText
    .split("")
    .reduce((acc, el, index, currentArray) => {
      const prevEl = currentArray[index - 1];
      const nextEl1 = currentArray[index + 1];
      const nextEl2 = currentArray[index + 2];
      if (el === nextEl1 && el === nextEl2) {
        acc = acc + "_";
        return acc;
      }
      if (el === nextEl1 && el === prevEl) {
        return acc;
      }
      acc = acc + el;
      return acc;
    }, "");
  return genText;
};

console.log(handleText("aaabbc"));
console.log(handleText("aabbcccc"));
console.log(handleText("abcdddddef"));`,
    testCases: [
      { input: '"aaabbc"', expectedOutput: '_bc' },
      { input: '"aabbcccc"', expectedOutput: 'aabb_' },
    ],
  },

  // ─── REACT EXERCISES ─────────────────────────────────────────────────
  {
    id: 'use-debounce',
    title: 'useDebounce Hook',
    category: 'react',
    description:
      'Build a search input with debounce functionality. The search should only trigger after the user stops typing for a specified delay. Use useRef for the timer and useEffect for cleanup.',
    filePath: 'src/workspace/DebounceSearch.tsx',
    solution: `import { useState, useEffect, useRef } from 'react';

export default function DebounceSearch() {
  const [search, setSearch] = useState('React');
  const [debounceSearch, setDebounceSearch] = useState('React');
  const timer = useRef(null);

  useEffect(() => {
    if (debounceSearch) {
      console.log('Fetching for:', debounceSearch);
    }
  }, [debounceSearch]);

  useEffect(() => {
    const delay = 1000;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setDebounceSearch(search);
    }, delay);
    return () => clearTimeout(timer.current);
  }, [search]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search GitHub repos"
      />
      <p>Current: {search}</p>
      <p>Debounced (1s): {debounceSearch}</p>
    </div>
  );
}`,
  },

  {
    id: 'carousel',
    title: 'Carousel Component',
    category: 'react',
    description:
      'Build a carousel component that auto-advances through slides and has Previous/Next buttons. Use useEffect for the auto-play timer and useRef to manage the interval.',
    filePath: 'src/workspace/Carousel.tsx',
    solution: `import { useState, useEffect, useRef } from 'react';

function Carousel({ delay, children }) {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  const startTimer = () => {
    timer.current = setInterval(() => {
      setIndex(i => (i + 1) % children.length);
    }, delay);
  };

  const clearTimer = () => {
    clearInterval(timer.current);
  };

  useEffect(() => {
    clearTimer();
    startTimer();
    return () => clearTimer();
  }, []);

  const handlePrev = () => {
    setIndex(i => (i - 1 + children.length) % children.length);
    clearTimer();
    startTimer();
  };

  const handleNext = () => {
    setIndex(i => (i + 1) % children.length);
    clearTimer();
    startTimer();
  };

  return (
    <div>
      <div style={{ fontSize: '2em', margin: '20px 0' }}>
        {children[index]}
      </div>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default function CarouselDemo() {
  const slides = [
    <span>Slide 1</span>,
    <span>Slide 2</span>,
    <span>Slide 3</span>,
    <span>Slide 4</span>,
    <span>Slide 5</span>,
  ];
  return <Carousel delay={2000}>{slides}</Carousel>;
}`,
  },

  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe',
    category: 'react',
    description:
      'Build a Tic-Tac-Toe game with win detection. Players alternate between X and O. The game should detect when a player wins and allow resetting.',
    filePath: 'src/workspace/TicTacToe.tsx',
    solution: `import { useState } from 'react';

const possibleWin = [
  ['11','12','13'],
  ['21','22','23'],
  ['31','32','33'],
  ['11','21','31'],
  ['12','22','32'],
  ['13','23','33'],
  ['11','22','33'],
  ['13','22','31'],
];

export default function TicTacToe() {
  const [boardGame, setBoard] = useState({ X: [], Y: [] });
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState('');

  const checkWin = (board, currentPlayer) => {
    const isWin = possibleWin.some((winCords) => {
      return winCords.every(c => board[currentPlayer].includes(c));
    });
    if (isWin) { setWinner(currentPlayer); return currentPlayer; }
    return null;
  };

  const handlePlay = (x, y) => {
    if (winner) return;
    const cord = \\\`\\\${x}\\\${y}\\\`;
    if (boardGame.X.includes(cord) || boardGame.Y.includes(cord)) return;
    const newBoard = { ...boardGame, [player]: [...boardGame[player], cord] };
    setBoard(newBoard);
    checkWin(newBoard, player);
    setPlayer(player === 'X' ? 'Y' : 'X');
  };

  const resetGame = () => {
    setPlayer('X');
    setBoard({ X: [], Y: [] });
    setWinner('');
  };

  const getValue = (x, y) => {
    const found = Object.entries(boardGame).find(([_, cords]) =>
      cords.some(c => c === \\\`\\\${x}\\\${y}\\\`)
    );
    return found ? found[0] : '';
  };

  return (
    <div>
      {[1,2,3].map(row => (
        <div key={row} style={{ display: 'flex', gap: 4 }}>
          {[1,2,3].map(col => (
            <button key={col} onClick={() => handlePlay(row, col)}
              style={{ width: 60, height: 60, fontSize: 24, fontWeight: 'bold', cursor: 'pointer' }}>
              {getValue(row, col)}
            </button>
          ))}
        </div>
      ))}
      {winner && (
        <div style={{ marginTop: 16 }}>
          <strong>Winner: {winner}</strong>
          <button onClick={resetGame} style={{ marginLeft: 8 }}>Reset</button>
        </div>
      )}
    </div>
  );
}`,
  },
];

export const jsExercises = exercises.filter(e => e.category === 'javascript');
export const reactExercises = exercises.filter(e => e.category === 'react');
