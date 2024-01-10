from flask import Blueprint, request
from flask_restful import Resource
from app.db.auth_config import firebase_auth,sessionIndex
from app.utils.status_generator import StatusGenerator
from app.utils.auth_helper import AuthUtils
from app.models.constants import METHODS,RESOURCES
auth = Blueprint('auth', __name__)

class PASSWORD_AUTHENTICATOR:
    class LOGIN:
        class PAYLOAD:
            USERNAME = 'username'
            PASSWORD = 'password'

@auth.route(RESOURCES.AUTH.LOGIN, methods=[METHODS.POST])
def loginWithEmailPassword():
    _payload = request.json
    _username = _payload[PASSWORD_AUTHENTICATOR.LOGIN.PAYLOAD.USERNAME]
    _password = _payload[PASSWORD_AUTHENTICATOR.LOGIN.PAYLOAD.PASSWORD]
    
    try:
        session = firebase_auth.sign_in_with_email_and_password(_username, _password)
        
        user = firebase_auth.get_account_info(session['idToken'])
        sessionIndex[session['idToken']] = user
        
        return StatusGenerator.getResponse(session)
    except:
        return StatusGenerator.onGetFailed({
            "message": "User not found!!!"
        })
    

@auth.route(RESOURCES.AUTH.LOGOUT, methods=[METHODS.POST])
def logout():
    token = AuthUtils.getToken()
    if(sessionIndex.get(token)):
        sessionIndex.pop(token)
        return StatusGenerator.onDeleteSuccess()
    else:
        return StatusGenerator.onDeleteFailed("Token already Expired")

