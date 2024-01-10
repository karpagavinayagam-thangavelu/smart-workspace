
for creating user in database
auth.create_user_with_email_and_password("testuser1@gmail.om", "Password@123")


# Activate Virtual ENvironment
 source ./venv/bin/activate
 
 # To start the server
  export FLASK_APP=app.app
   python -m flask run