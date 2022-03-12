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
main_app = firebase_admin.initialize_app(main_cred, name='MAIN2')
