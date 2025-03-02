import { convertNoAngleBracketTypeAssertion } from "../no-angle-bracket-type-assertion";

describe(convertNoAngleBracketTypeAssertion, () => {
    test("conversion without arguments", () => {
        const result = convertNoAngleBracketTypeAssertion({
            ruleArguments: [],
        });

        expect(result).toEqual({
            rules: [
                {
                    ruleName: "@typescript-eslint/no-angle-bracket-type-assertion",
                },
            ],
        });
    });
});
