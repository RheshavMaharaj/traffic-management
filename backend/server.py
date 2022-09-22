from flask import Flask, request
import csv
import model

app = Flask(__name__)

# Health Route
@app.route("/")
def health_check():
  return {"Success": "True"}

@app.route("/stations/daily")
def get_stations_daily():
  with open('./datasets/road_traffic_counts_hourly_sample.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
      print(row['station_key'], row['daily_total'])

@app.route("/stations", methods=['GET'])
def get_stations():
  args = request.args
  latitude = args.get('latitude')
  longitude = args.get('longitude')

  with open('./datasets/road_traffic_counts_station_reference.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    return list(reader)

@app.route('/classify',methods=['POST','GET'])
def classify_type():
    try:
        sepal_len = request.args.get('slen') 
        sepal_wid = request.args.get('swid') 
        petal_len = request.args.get('plen') 
        petal_wid = request.args.get('pwid') 

        variety = model.classify(sepal_len, sepal_wid, petal_len, petal_wid)

        return {'Result': variety}
    except:
        return 'Error'



if __name__ == "__main__":
  app.run(debug=True)