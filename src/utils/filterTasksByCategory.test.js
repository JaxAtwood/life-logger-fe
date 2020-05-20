import expect from 'expect';

import { filterTasksByCategory } from './filterTasksByCategory';

describe('filterTasksByCategory', () => {
    it('successfully shows all tasks regardless of date', () => {
        const tasks = [
            {
                category: 1,
                event_et_tm: '2020-06-06T17:45:00.000Z',
                event_st_tm: '2020-06-05T17:11:00.000Z',
            },
            {
                category: 0,
                event_et_tm: '2020-05-16T17:45:00.000Z',
                event_st_tm: '2020-05-16T17:11:00.000Z',
            },
            {
                category: 0,
                event_et_tm: '2020-05-19T17:45:00.000Z',
                event_st_tm: '2020-05-19T17:11:00.000Z',
            },
            {
                category: 2,
                event_et_tm: '2020-06-02T17:45:00.000Z',
                event_st_tm: '2020-06-02T17:11:00.000Z',
            },
            {
                category: 1,
                event_et_tm: '2020-05-18T17:45:00.000Z',
                event_st_tm: '2020-05-18T17:11:00.000Z',
            },
            {
                category: 2,
                event_et_tm: '2020-05-19T17:45:00.000Z',
                event_st_tm: '2020-05-19T17:11:00.000Z',
            },
            {
                category: 1,
                event_et_tm: '2020-06-02T17:45:00.000Z',
                event_st_tm: '2020-06-02T17:11:00.000Z',
            },
        ];

        const sortStatus = 3; // sortStatus for getting all categories is 3
        const expectedLength = tasks.length;

        const actual = filterTasksByCategory(tasks, sortStatus);

        expect(actual.length).toBe(expectedLength);
    });
});