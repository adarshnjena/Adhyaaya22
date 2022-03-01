
# pip install firebase_admin
from firebase_admin import firestore
import json
from dateutil.parser import parse
import firebase_admin
from firebase_admin import credentials
import pathlib

this_folder = pathlib.Path(__file__).parent.absolute()
cred = credentials.Certificate(this_folder / 'serviceAccountKey.json')
app = firebase_admin.initialize_app(cred)


parent_folder = this_folder.parent

client = firestore.client()


#k = []
# with open(parent_folder / 'src' / 'tasks.json', 'r') as f:
#    data = json.load(f)
#    for item in data:
#        item['end_date'] = int(parse(item['end_date']).timestamp())
#        k.append(item)
#ref = client.document('tasks', item['task_id'])
# print(ref.set(item))

k = {}
with open(parent_folder / 'src' / 'registrations.json', 'w') as f:
    snapshots = list(client.collection('registrations').get())
    print(snapshots[0])
    for snapshot in snapshots:
        print(snapshot.id)
        k[snapshot.id] = snapshot.to_dict()
        
    f.write(json.dumps(k, indent=4))
    # f.write(json.dumps(k))

"""


with open(parent_folder / 'src' / 'tasks.json', 'r') as f:
    data = json.load(f)
    for item in data: 
        ref = db.reference(f"/tasklist/{item['task_id']}", app, url="https://adhyaaya-staging-dev-default-rtdb.asia-southeast1.firebasedatabase.app")
        ref.set(item)
"""
