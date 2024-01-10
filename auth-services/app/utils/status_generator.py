from flask import jsonify
from app.models.constants import RESPONSE 
'''
    @class StatusGenerator
    @description To prepare Status Code format
'''
class StatusGenerator:

    # This function sets valid status code and data for successful get Response
    def getResponse(response):
        return jsonify(response),200
    
    # This function sets valid status code and data for failed get Response
    def onGetFailed(response):
        return jsonify(response),400
    
    # This function sets valid status code for successful delete response
    def onDeleteSuccess(message=""):
        if len(message) != 0 :
            return jsonify({"message": message}),200
        else :
            return jsonify({"message": "Deleted !!!"}),204
        
    # This function sets valid status code for failed delete response
    def onDeleteFailed(message):
        return jsonify({"message": message}),400

