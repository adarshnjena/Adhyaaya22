from firebase_admin import firestore
import json
from dateutil.parser import parse
from time import time
import firebase_admin
from firebase_admin import credentials
import pathlib


this_folder = pathlib.Path(__file__).parent.absolute()
parent_folder = this_folder.parent


FIREBASE_SA_KEY = this_folder / 'serviceAccountKey.json'


print('[INFO] Authenticating...')
cred = credentials.Certificate(FIREBASE_SA_KEY)
app = firebase_admin.initialize_app(cred)


print('[INFO] Instantiating Client')
client = firestore.client()

registration_ref = client.collection('registrations').document('<USERID>')



EVENT_CODE = "CCB"
# JSON DOC
REGISTRATION = {}




registration_ref.set({
    f'{EVENT_CODE}': REGISTRATION
}, merge=True)

