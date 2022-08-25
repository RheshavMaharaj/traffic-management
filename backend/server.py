from flask import Flask

app = Flask(__name__)

# Health Route
@app.route("/")
def health_check():
  return {"Success": "True"}


if __name__ == "__main__":
  app.run(debug=True)