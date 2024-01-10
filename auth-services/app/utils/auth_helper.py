from flask import Blueprint, request
from app.models.constants import CONSTANTS

'''
@class AuthUtils
@description this class contains all the helper functions for Authorization APIs
'''
class AuthUtils:
    # For getting bearer token from Authorization Header
    def getToken():
        auth_header = request.headers.get(CONSTANTS.API_HEADERS.AUTHORIZATION)
        prefix = CONSTANTS.API_HEADERS.BEARER

        # Get Authorization Header and remove bearer text
        if auth_header.startswith(prefix):
            return auth_header[len(prefix):]
        return auth_header
    
