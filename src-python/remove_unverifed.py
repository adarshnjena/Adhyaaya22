from firebase_admin import firestore
import json
from dateutil.parser import parse
import firebase_admin
from firebase_admin import credentials
import pathlib
from time import time

this_folder = pathlib.Path(__file__).parent.absolute()
parent_folder = this_folder.parent

FIREBASE_SA_KEY = this_folder / 'serviceAccountKey.json'
FIREBASE_CA_SA_KEY = this_folder / 'serviceAccountKeyCA.json'

print('[INFO] Authenticating MAIN...')
main_cred = credentials.Certificate(FIREBASE_SA_KEY)
main_app = firebase_admin.initialize_app(main_cred, name='MAIN3')

print('[INFO] Instantiating Client')
client = firestore.client(app=main_app)


COLLECTION_NAME = 'registrations'
JSON_EXPORT_FILE = parent_folder / f'unverified_registrations-{int(float(time())*100)}.json'

with open(JSON_EXPORT_FILE, 'w', encoding="utf-8") as f:
    print('[INFO] Fetching Registrations...')
    snapshots = list(client.collection(COLLECTION_NAME).get())
    print('[INFO] Registraions Fetched')
    for snapshot in snapshots:
        for event_code, registration in snapshot.to_dict().items():
            if registration['transaction_status'] != 'PAID':
                f.write(json.dumps(registration, indent=4))
                f.write('\n')
                current_ref = client.collection(COLLECTION_NAME).document(snapshot.id)
                current_ref.update({
                    f'{event_code}': firestore.DELETE_FIELD
                })
                print(registration)
    # f.write(json.dumps(k))
print('[INFO] Finished Writing JSON Document')
