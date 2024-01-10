import pyrebase
from app.config.env import EnvConfig

# initialize FIrebase Application and get authorization
firebase = pyrebase.initialize_app(EnvConfig.firebase_config)
firebase_auth = firebase.auth()

sessionIndex = {} # stores live session information

