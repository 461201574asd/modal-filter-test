const GROUP_FILTER_DATA = [
    {
        label: '流水号(requestId)',
        value: 'requestId',
        belongList: [
            {
                label: '流水号1',
                value: 'requestId1',
            },
            {
                label: '流水号2',
                value: 'requestId2',
            },
        ]
    },
    {
        label: 'URL(url)',
        value: 'url',
        belongList: [
            {
                label: 'URL1',
                value: 'url1',
            },
            {
                label: 'URL2',
                value: 'url2',
            },
        ]
    },
    {
        label: '内容(contents)',
        value: 'contents',
        belongList: [
            {
                label: '内容1',
                value: 'contents1',
            },
            {
                label: '内容2',
                value: 'contents2',
            },
        ]
    },
];

const OPERATION_LIST = [
    {
        label: '等于',
        value: 'equal',
    },
    {
        label: '属于',
        value: 'belong',
    },
];

export {
    GROUP_FILTER_DATA,
    OPERATION_LIST,
};
