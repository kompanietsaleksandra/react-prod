import React from 'react';
import './Table.css';

interface Result {
    resultCount: number
    resultTitle: string
}

interface Budget {
    budgetCount: number
    budgetPeriod: string
}

interface Duration {
    startDate: string
    endDate: string
    days: number
}

interface Table {
    campaignName: string;
    status: string;
    results: Array<Result>;
    impression: number;
    budget: Array<Budget>
    duration: Array<Duration>;
    amountSpent: number
}
interface TableArray extends Array<Table>{}


const data: TableArray = [
    {
        campaignName: 'Campaign1',
        status: 'Active',
        results: [
            {
                resultCount: 1,
                resultTitle: 'test title'
            }
        ],
        impression: 666,
        budget: [
            {
                budgetCount: 30,
                budgetPeriod: 'day'
            }
        ],
        duration: [
            {
                startDate: '9 11 2016',
                endDate: '9 12 2016',
                days: 30
            }
        ],
        amountSpent: 20
    },
    {
        campaignName: 'Campaign2',
        status: 'Active',
        results: [
            {
                resultCount: 35,
                resultTitle: 'test title'
            }
        ],
        impression: 676,
        budget: [
            {
                budgetCount: 68,
                budgetPeriod: 'day'
            }
        ],
        duration: [
            {
                startDate: '9 10 2016',
                endDate: '9 11 2016',
                days: 30
            }
        ],
        amountSpent: 220
    },
];

const Table = () => {
    const tableElements = data.map((el) =>
        <div className="table-column">
            <div>{el.campaignName}</div>
            <div>{el.status}</div>
            <div>{el.results[0].resultCount}
                <div>{el.results[0].resultTitle}</div>
            </div>
            <div>{el.impression}</div>
            <div>{el.budget[0].budgetCount}
                <div> {el.budget[0].budgetPeriod}</div>
            </div>
            <div>
                <div>{el.duration[0].startDate}-{el.duration[0].endDate}</div>
                <div>{el.duration[0].days} days</div>
            </div>
            <div>{el.amountSpent}</div>

        </div>
    );

    return (
        <div className="table-wrapper">
            <div className="table">
                <div>Campaign Name</div>
                <div>Status</div>
                <div>Results</div>
                <div>Impression</div>
                <div>Budget</div>
                <div>Duration</div>
                <div>Amount Spent</div>
            </div>
            <div>
                {tableElements}
            </div>
        </div>
    );
}

export default Table;