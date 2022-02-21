export interface teamMemberDetail {
    name: string;
    email: string;
    phone: string;
    about: string;
}

export interface registrationDetails {
    event_code: string;
    name: string;
    email: string;
    phone: string;
    college: string;
    // supposed to be City, State, Country
    college_address: [string, string, string];
    course: string;
    team: Array<teamMemberDetail>;
    transaction_status: string;
}

