/* jshint esversion: 6 */

const words = (input) => {
    if (typeof input === 'string') {
        let inputWrapper = input.trim().split(/[\s,]+/),
            wordContainer = {};

        for (var i = 0; i < inputWrapper.length; i++) {
            if (!wordContainer.hasOwnProperty(inputWrapper[i])) {
                wordContainer[inputWrapper[i]] = 1;
            } else {
                wordContainer[inputWrapper[i]] += 1;
            }
        }
        return wordContainer;
    } else {
        return 'Input must be string';
    }
};
