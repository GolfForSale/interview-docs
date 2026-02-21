export type ExerciseCategory = 'javascript' | 'typescript' | 'react';

export interface TestCase {
  input: string;
  expectedOutput: string;
}

export interface Exercise {
  id: string;
  title: string;
  category: ExerciseCategory;
  description: string;
  filePath: string;
  solution: string;
  testCases?: TestCase[];
}
