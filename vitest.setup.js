// Include any code that should run before tests
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import 'whatwg-fetch';

expect.extend(matchers);
