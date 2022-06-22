#flask app template 
from flask import Flask,request,session,jsonify
import mysql.connector


app = Flask(__name__)
app.secret_key = 'iamfuckingcreazy'


# this is configuration for sql database connection 
mydb = mysql.connector.connect(
	host = "localhost", # your host address (yourservice.com)
	user = "root", # your yasername for sql database
	password = "", # your password 
    database = "codechef" # your database name
)

cursor = mydb.cursor()

# login api route 
@app.route('/login' , methods=['POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        cursor.execute("SELECT * FROM users WHERE username = '"+username+"' AND password = '"+password+"';")
        data = cursor.fetchall()
        if (len(data)==0 or len(data)>1):
            resp = jsonify({'message' : 'Invalid username or password'})
            resp.status_code = 400
            return resp
        else:
            session['username'] = username
            return jsonify({'message' : 'You are logged in successfully'})

#  register api route 
@app.route('/register' , methods=['POST'])
def register():
    if request.method == 'POST':
        #check confirm passowrd and password
        if request.form['password'] != request.form['confpassword']:
            resp = jsonify({'message':'Password and Confirm Password does not match'})
            resp.status_code = 401
            return resp
        #check if username already exists
        else:
            username = request.form['username']
            cursor.execute("SELECT * FROM users WHERE username = %s", [username])
            user = cursor.fetchone()
            if user:
                resp = jsonify({'message':'User already exists'})
                resp.status_code = 401
                return resp
            else:
                name = request.form['name']
                email = request.form['email']
                contact = request.form['contact']
                username = request.form['username']
                password = request.form['password']
                cursor.execute("INSERT INTO users (name,email,contact,username,password) VALUES (%s,%s,%s,%s,%s)",(name,email,contact,username,password))
                mydb.commit()
                jsonify({'message' : 'You are now registered and can log in'})


# logout route
@app.route('/logout', methods=['GET','POST'])
def logout():
    session.clear()
    return jsonify({'message' : 'You successfully logged out'})


# main app running function 
if '__main__' == __name__:
    app.run(debug=True,port=8090)
    