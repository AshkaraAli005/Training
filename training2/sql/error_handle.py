from flask import Blueprint


error = Blueprint("error",__name__)

@error.app_errorhandler(404)
def handle_404(e):
    return {
        "msg":"404 - you entered wrong url"
    }


@error.app_errorhandler(405)
def handle_405(e):
    return {
        "msg":"405 - Please check HTTP method"
    }


@error.app_errorhandler(500)
def handle_500(e):
    return {
        "msg":"500 error, something worng with server"
    }

@error.app_errorhandler(401)
def handle_401(e):
    return{
        "msg":"401 - Unauthorised entry"
    }


@error.app_errorhandler(400)
def handle_400(e):
    return{
        "msg":"400 - check input values syntax" }