import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countLetters: (str: string) => { [key: string]: number } = (str: string): { [key: string]: number } =>
  stringToArray(str.toLowerCase())
    .filter((letter) => letter != ' ')
    .reduce((currObject: { [key: string]: number }, newChar: string) => {
      const countOfNewChar: number = currObject[newChar] ? currObject[newChar] + 1 : 1;
      return { ...currObject, [newChar]: countOfNewChar };
    }, {});

/* Question 2 */
export const isPaired: (str: string) => boolean = (str: string): boolean => {
  const result = stringToArray(str)
    .filter((char) => isClosingPair(char) || isOpeningPair(char))
    .reduce((stack: string[], newBracket: string) => {
      if (isOpeningPair(newBracket)) {
        return R.append(newBracket, stack);
      } else if (isClosingPair(newBracket) && isPairMatch(R.last(stack) || '', newBracket)) {
        return R.init(stack);
      }
      return R.append(newBracket, stack);
    }, []);
  return R.isEmpty(result);
};

// HELPER FUNCTIONS:
const isOpeningPair: (bracket: string) => boolean = (bracket: string): boolean => ['(', '[', '{'].includes(bracket);
const isClosingPair: (bracket: string) => boolean = (bracket: string): boolean => [')', ']', '}'].includes(bracket);
const isPairMatch: (openBracket: string, closedBracket: string) => boolean = (openBracket: string, closedBracket: string): boolean => {
  if (openBracket === '(' && closedBracket === ')') return true;
  if (openBracket === '[' && closedBracket === ']') return true;
  if (openBracket === '{' && closedBracket === '}') return true;
  return false;
};






/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence : undefined = undefined

