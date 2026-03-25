import '@testing-library/jest-dom'
import 'cross-fetch/polyfill';

jest.mock('next/navigation');

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
    useStore: jest.fn(),
    // dispatch: jest.fn(),
}));
