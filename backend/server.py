from flask import Flask, request
import csv

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



if __name__ == "__main__":
  app.run(debug=True)