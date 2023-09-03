from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Route for the home page
# @app.route('/', methods=['GET', 'POST'])
# def home():
#     if request.method == 'POST':
#         user_name = request.form['username']
#         lesson = request.form['lesson']
#         if lesson:
#             return redirect(url_for(lesson, username=user_name))
#     return render_template('home.html')
@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        user_name = request.form['username']
        return render_template('home.html', username=user_name)
        
        # Check if user_name is not empty
        # if user_name:
        #     return redirect(url_for('profile', username=user_name))
    
    return render_template('home.html')
# Route for the course module
@app.route('/profile')
def profile():
    return render_template('profile.html')

# Route for lesson 1
@app.route('/lesson1')
def lesson1():
    return render_template('lesson1.html')

# Route for lesson 2
@app.route('/lesson2')
def lesson2():
    return render_template('lesson2.html')

# Route for lesson 3
@app.route('/lesson3')
def lesson3():
    return render_template('lesson3.html')

@app.route('/lab')
def lab():
    return render_template('lab.html')

@app.route('/exam')
def exam():
    return render_template('exam.html')

if __name__ == '__main__':
    app.run(debug=True)


