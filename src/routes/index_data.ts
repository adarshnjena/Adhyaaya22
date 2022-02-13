const invisible = 'invisible';
const visible_1 = 'opacity-25 -translate-y-4';
const visible_2 = 'opacity-50 -translate-y-2';
const visible_3 = 'opacity-75 -translate-y-1';
const visible_4 = 'opacity-100 transform-none';
const visible_5 = 'opacity-75 translate-y-1';
const visible_6 = 'opacity-50 translate-y-2';
const visible_7 = 'opacity-25 translate-y-4';
// const invisible = ...
const left = ' xl:mr-[50vw] '
const right = ' xl:ml-[50vw] '

/* 
    +right to shift the text to the right, 
    +left to shift the text to the left
    no shift to keep the text centered
    transition the text using the visibility classes line 1 should be the first one to be visible
    frames are as per the images in the folder
    make sure to update the images properly
*/
export const frame_data = {
    23: {
        line_1: ['TEXT', invisible],
        line_2: ['TEXT', invisible],
        line_3: ['TEXT', invisible],
        line_4: ['TEXT', invisible]
    },
    24: {
        line_1: ['TEXT', visible_1],
        line_2: ['TEXT', invisible],
        line_3: ['TEXT', invisible],
        line_4: ['TEXT', invisible]
    },
    25: {
        line_1: ['TEXT', visible_2],
        line_2: ['TEXT', visible_1],
        line_3: ['TEXT', invisible],
        line_4: ['TEXT', invisible]
    },
    26: {
        line_1: ['TEXT', visible_3],
        line_2: ['TEXT', visible_2],
        line_3: ['TEXT', visible_1],
        line_4: ['TEXT', invisible]
    },
    27: {
        line_1: ['TEXT', visible_4 + left],
        line_2: ['TEXT', visible_3],
        line_3: ['TEXT', visible_2],
        line_4: ['TEXT', visible_1]
    },
    28: {
        line_1: ['TEXT', visible_4 + left],
        line_2: ['TEXT', visible_4 + left],
        line_3: ['TEXT', visible_3],
        line_4: ['TEXT', visible_2]
    },
    29: {
        line_1: ['TEXT', visible_4 + left],
        line_2: ['TEXT', visible_4 + left],
        line_3: ['TEXT', visible_4 + left],
        line_4: ['TEXT', visible_3]
    },
    30: {
        line_1: ['TEXT', visible_4 + left],
        line_2: ['TEXT', visible_4 + left],
        line_3: ['TEXT', visible_4 + left],
        line_4: ['TEXT', visible_4 + left]
    },
    31: {
        line_1: ['TEXT', visible_4 + left],
        line_2: ['TEXT', visible_4 + left],
        line_3: ['TEXT', visible_4 + left],
        line_4: ['TEXT', visible_4 + left]
    },
    32: {
        line_1: ['TEXT', visible_4 + left],
        line_2: ['TEXT', visible_4 + left],
        line_3: ['TEXT', visible_4 + left],
        line_4: ['TEXT', visible_4 + left]
    },
    33: {
        line_1: ['TEXT', visible_4 + left],
        line_2: ['TEXT', visible_4 + left],
        line_3: ['TEXT', visible_4 + left],
        line_4: ['TEXT', visible_4 + left]
    },
    34: {
        line_1: ['TEXT', visible_4 + left],
        line_2: ['TEXT', visible_4 + left],
        line_3: ['TEXT', visible_4 + left],
        line_4: ['TEXT', visible_4 + left]
    },
    35: {
        line_1: ['TEXT', visible_5],
        line_2: ['TEXT', visible_5],
        line_3: ['TEXT', visible_5],
        line_4: ['TEXT', visible_5]
    },
    36: {
        line_1: ['TEXT', visible_6],
        line_2: ['TEXT', visible_6],
        line_3: ['TEXT', visible_6],
        line_4: ['TEXT', visible_6]
    },
    37: {
        line_1: ['TEXT', visible_7],
        line_2: ['TEXT', visible_7],
        line_3: ['TEXT', visible_7],
        line_4: ['TEXT', visible_7]
    },
    38: {
        line_1: ['TEXT', invisible],
        line_2: ['TEXT', invisible],
        line_3: ['TEXT', invisible],
        line_4: ['TEXT', invisible]
    }
}