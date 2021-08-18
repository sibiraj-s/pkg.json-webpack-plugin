import { ValidationError } from 'schema-utils';
import PackageJsonWebpackPlugin from '../src/index.ts';
import getCompiler from './helpers/getCompiler';

const tests = [
  [
    'include is not an array',
    {
      options: {
        include: null,
      },
      expectedErrMessage: 'include should be an array',
    },
  ],
  [
    'include has an empty string',
    {
      options: {
        include: ['name', ''],
      },
      expectedErrMessage: 'include\\[1\\] should be a non-empty string',
    },
  ],
  [
    'include has a non string value',
    {
      options: {
        include: ['name', true],
      },
      expectedErrMessage: 'include\\[1\\] should be a non-empty string',
    },
  ],
  [
    'rootDir is not a string',
    {
      options: {
        rootDir: true,
      },
      expectedErrMessage: 'rootDir should be a non-empty string',
    },
  ],
  [
    'key is not a string',
    {
      options: {
        key: true,
      },
      expectedErrMessage: 'key should be a non-empty string',
    },
  ],
  [
    'normalize is not a boolan',
    {
      options: {
        normalize: 'true',
      },
      expectedErrMessage: 'normalize should be a boolean',
    },
  ],
];

test.each(tests)('should throw schema validation error if %s', (_, { options, expectedErrMessage }) => {
  const t = () => {
    const compiler = getCompiler();
    new PackageJsonWebpackPlugin(options).apply(compiler);
  };

  expect(t).toThrow(ValidationError);
  expect(t).toThrowWithMessage(Error, new RegExp(expectedErrMessage));
});
