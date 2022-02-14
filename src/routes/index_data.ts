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
    100: {
        line_1: [' ', invisible],
        line_3: ['Meet ASU-77', visible_1],
        line_2: [' ', invisible],
        line_4: ['Guide You, It will', visible_1],
    },
    102: {
        line_1: [' ', invisible],
        line_3: ['Meet ASU-77', visible_2],
        line_2: [' ', invisible],
        line_4: ['Guide You, It will', visible_2],
    },
    103: {
        line_1: [' ', invisible],
        line_3: ['Meet ASU-77', visible_3],
        line_2: [' ', invisible],
        line_4: ['Guide You, It will', visible_3],
    },
    104: {
        line_1: [' ', invisible],
        line_3: ['Meet ASU-77', visible_4],
        line_2: [' ', invisible],
        line_4: ['Guide You, It will', visible_4],
    },
    105: {
        line_1: [' ', invisible],
        line_3: ['Meet ASU-77', visible_4],
        line_2: [' ', invisible],
        line_4: ['Guide You, It will', visible_4],
    },
}