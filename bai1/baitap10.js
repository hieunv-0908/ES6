function groupAnagrams(words) {
    const groups = {};

    for (const word of words) {
        const sorted = word.split('').sort().join('');

        if (!groups[sorted]) {
            groups[sorted] = [];
        }

        groups[sorted].push(word);
    }
    return Object.values(groups);
}
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result);
