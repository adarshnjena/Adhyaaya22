export interface teamMemberDetail {
    name: string;
    email: string;
    phone: string;
}

export interface registrationDetails {
    registration_id: string;
    event_code: string;
    name: string;
    email: string;
    phone: string;
    college: string;
    // supposed to be City, State, Country
    //college_address: string;
    course: string;
    team: teamMemberDetail[];
    transaction_status: string;
}
