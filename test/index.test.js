import trigram from '../src/index';
const input = "I wish I may I wish I might";
const startingWords = ['I'];
test('begins with a starting word', () => {
	const output = trigram(input);
	const splitOutput = [...output];
	const firstWord = splitOutput[0];
	expect(startingWords).toContain(firstWord);
});

test('does not end with a starting word', () => {
	const output = trigram(input);
	const splitOutput = [...output];
	const lastWord = splitOutput[splitOutput.length - 1];
	expect(startingWords).not.toContain(lastWord);
});

test('is not the same as the previously generated trigram', () => {
	const firstOutput = trigram(input);
	const secondOutput = trigram(input);
	expect(firstOutput).not.toEqual(secondOutput);
});