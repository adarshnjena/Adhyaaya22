DATA = """
{
    "DU1ZrX0rAncEYwLyWlwqgdEfjqA2": {
        "COV": {
            "event_code": "COV",
            "name": "Devansh Parapalli",
            "course": "FY",
            "registration_id": "DU1ZrX0rAncEYwLyWlwqgdEfjqA2-COV-1645969638818",
            "team": "",
            "transaction_status": "PAID",
            "email": "adhyaaya.gcoen@gmail.com",
            "college": "Government College of Engineering|Khapri|Nagpur|Maharashtra|India",
            "phone": "XXXXXXXXXXX"
        },
        "RPNBT": {
            "transaction_status": "PAID",
            "email": "adhyaaya.gcoen@gmail.com",
            "college": "Government College of Engineering|Khapri|Nagpur|Maharashtra|India",
            "event_code": "RPNBT",
            "course": "adadad",
            "phone": "XXXXXXXXXXX",
            "registration_id": "DU1ZrX0rAncEYwLyWlwqgdEfjqA2-RPNBT-1646074425858",
            "team": [
                {
                    "phone": "fafafaf",
                    "name": "adwagaga",
                    "email": "afafafa"
                },
                {
                    "phone": "afgasgasgaf",
                    "email": "agrrgaa",
                    "name": "fafafafaf"
                },
                {
                    "phone": "sfsfseserff",
                    "email": "22t43gsdgsfs",
                    "name": "wgwgws"
                }
            ],
            "name": "Devansh Parapalli"
        },
        "BSYD": {
            "college": "Government College of Engineering|Khapri|Nagpur|Maharashtra|India",
            "phone": "XXXXXXXXXXX",
            "event_code": "BSYD",
            "name": "Devansh Parapalli",
            "course": "afafafa",
            "registration_id": "DU1ZrX0rAncEYwLyWlwqgdEfjqA2-BSYD-1646074191542",
            "transaction_status": "PAID",
            "team": [
                {
                    "phone": "afa242",
                    "email": "fafatg@farfa.num",
                    "name": "afafafa"
                }
            ],
            "email": "adhyaaya.gcoen@gmail.com"
        }
    }
}
"""

_ = """
export const event_name_mapping = {
    VPM: 'Virtual Placement',
    CADMS: 'Cadddction Mechanical Solo',
    CADMD: 'Cadddction Mechanical Duo',
    CADCS: 'Cadddction Civil Solo',
    CADCD: 'Cadddction Civil Duo',
    VAV: 'Vaad Vivad',
    RPNBS: 'Respawn BGMI Squad',
    RPNBT: 'Respawn BGMI TeamDeathMatch',
    RPNVS: 'Respawn Valorant Squad',
    RPNCI: 'Respawn Chess Individual',
    MUNA: 'Model United Nations AIPPM',
    MUNU: 'Model United Nations UNHRC',
    COV: 'Code Venture',
    CSW: 'CSE Webinar',
    UPG: 'Upgrad',
    AVK: 'Avishkar',
    TSI: 'Trishakti Interview',
    COS: 'CAD-O-Shop',
    STG: 'StarGaze',
    FOH: 'Foodoholics',
    CCB: 'Cricbash',
    BSYD: 'Bornpsycos Duo',
    BSYT: 'Bornpsycos Team',
    // FOR DEV
    BSY: '[DEV] Bornpsycos',
};
"""
import pathlib

this_folder = pathlib.Path(__file__).parent.absolute()



parent_folder = this_folder.parent




EXPORT_FILE = parent_folder / 'registrations.csv'



import json

data = json.loads(DATA)
with open(EXPORT_FILE, "w") as f:
    f.write("registration_id,event_code,name,email,phone,college,course,transaction_status,TEAM?\n")
    for user_id, user_registrations in data.items():
        # print(key) # This is user_id,
        # print(value) # This is a dict of all the registrations

        for event_code, registration in user_registrations.items():
            # this is registration item
            # print(e_key, e_value)
            file_string = ""
            file_string += f"{registration['registration_id']},{event_code},{registration['name']},{registration['email']},{registration['phone']},{registration['college']},{registration['course']},{registration['transaction_status']},{'TEAM LEADER'}\n"
            for team_member in registration['team']:
                file_string += f"{registration['registration_id']},{event_code},{team_member['name']},{team_member['email']},{team_member['phone']},{'Not Required'},{'Not Required'},{registration['transaction_status']},{'TEAM MEMBER'}\n"
            f.write(file_string)