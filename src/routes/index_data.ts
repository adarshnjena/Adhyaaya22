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

const top = ' mb-[50vh] '
const bottom = ' mt-[50vh] '

/* 
    +right to shift the text to the right, 
    +left to shift the text to the left
    no shift to keep the text centered
    transition the text using the visibility classes line 1 should be the first one to be visible
    frames are as per the images in the folder
    make sure to update the images properly
*/
export const frame_data = {
    100: {
        line_1 : ['TOP TEXT', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['BOTTOM TEXT', invisible]
    },
    102: {
        line_1 : ['TOP TEXT', visible_1 + left],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['BOTTOM TEXT', visible_1 + right]
    },
    104: {
        line_1 : ['TOP TEXT', visible_2 + left],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['BOTTOM TEXT', visible_2 + right]
    },
    105: {
        line_1 : ['TOP TEXT', visible_3 + left],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['BOTTOM TEXT', visible_3 + right]
    },
    107: {
        line_1 : ['TOP TEXT', visible_4 + left],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['BOTTOM TEXT', visible_4 + right]
    },
    
    215: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    216: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    217: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    218: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    219: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    220: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    221: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    222: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    223: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    224: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },

    225: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    226: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    227: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    228: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    229: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },

    230: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    231: {
        line_1 : ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    232: {
        line_1 : ['SHIT', visible_4],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
    
    243: {
        line_1 : ['TOP TEXT', visible_4],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    },
}

