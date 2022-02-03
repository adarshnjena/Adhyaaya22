import type { profileDetails } from "$lib/types/profileDetails";
import type { taskDetails } from "$lib/types/taskDetails";
import { writable } from "svelte/store";


export const profileStore = writable<profileDetails>(null);

export const tasksStore = writable<Array<taskDetails>>(null);

export const userTasksStore = writable<Array<taskDetails>>(null);


