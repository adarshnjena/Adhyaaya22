
# pip install firebase_admin
from firebase_admin import firestore
import json
from dateutil.parser import parse
import firebase_admin
from firebase_admin import credentials
import pathlib

this_folder = pathlib.Path(__file__).parent.absolute()
parent_folder = this_folder.parent


##### USER CONFIG SECTION #####
# Replace this value with the collection you would like to clone
COLLLECTION_NAME = 'registrations'

JSON_EXPORT_FILE = parent_folder / f'{COLLLECTION_NAME}.json'
CSV_EXPORT_FILE = parent_folder / f'{COLLLECTION_NAME}.csv'
# This is a service account for firebase.
# You will need to download and save this file next to this script before running the script.
# To generate a private key file for your service account:
# In the Firebase console, open Settings > Service Accounts.
# Click Generate New Private Key, then confirm by clicking Generate Key.
# Securely store the JSON file containing the key.
# Rename it to serviceAccountKey.json (if you have extensions enabled) or serviceAccountKey
# and place it in the same folder as this script.
FIREBASE_SA_KEY = this_folder / 'serviceAccountKey.json'
##### END USER CONFIG SECTION #####
# [Warning]
## Do not modify the code beyond this without understanding how and what it does. 
# You may ruin the data permanently. 
# Contact Devansh Parapalli CSE FY for more info


print('[INFO] Authenticating...')
cred = credentials.Certificate(FIREBASE_SA_KEY)
app = firebase_admin.initialize_app(cred)


print('[INFO] Instantiating Client')
client = firestore.client()


k = {}
print('[INFO] Writing JSON Document...')
with open(JSON_EXPORT_FILE, 'w') as f:
    print('[INFO] Fetching Registrations...')
    snapshots = list(client.collection('registrations').get())
    print('[INFO] Registraions Fetched')
    for snapshot in snapshots:
        k[snapshot.id] = snapshot.to_dict()
        
    f.write(json.dumps(k, indent=4))
    # f.write(json.dumps(k))
print('[INFO] Finished Writing JSON Document')


# This is a sample of the event mapping. The events might not be finalized here. 
# Check /src/lib/firebase/registrationDetails.ts for the up to date mapping.
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
};
"""

if COLLLECTION_NAME != 'registrations':
    print('[ERR3] No definitions found for this collection. Exiting...')
    exit(3)

print('[INFO] Writing CSV Document...')
with open(CSV_EXPORT_FILE, "w") as f:
    f.write("registration_id,event_code,refferal_code,name,email,phone,college,course,transaction_status,TEAM?\n")
    for user_id, user_registrations in k.items():
        # print(key) # This is user_id,
        # print(value) # This is a dict of all the registrations

        for event_code, registration in user_registrations.items():
            # this is registration item
            # print(e_key, e_value)
            file_string = ""
            file_string += f"{registration['registration_id']},{event_code},{registration['refferal_code']},{registration['name']},{registration['email']},{registration['phone']},{registration['college']},{registration['course']},{registration['transaction_status']},{'TEAM LEADER'}\n"
            for team_member in registration['team']:
                if isinstance(team_member, str):
                    file_string += f"{registration['registration_id']},{event_code},{registration['refferal_code']},{team_member},{team_member},{team_member},{'Not Required'},{'Not Required'},{registration['transaction_status']},{'TEAM MEMBER'}\n"
                    continue
                file_string += f"{registration['registration_id']},{event_code},{registration['refferal_code']},{team_member['name']},{team_member['email']},{team_member['phone']},{'Not Required'},{'Not Required'},{registration['transaction_status']},{'TEAM MEMBER'}\n"
            f.write(file_string)
print('[INFO] Finished Writing CSV Document')