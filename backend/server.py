from flask import Flask, request
import csv
import stations
import congestions

app = Flask(__name__)

# Health Route
@app.route("/")
def health_check():
  return {"Success": "True"}

@app.route("/stations", methods=['GET'])
def get_stations():
  args = request.args
  latitude = args.get('latitude')
  longitude = args.get('longitude')
  radius = args.get('radius')

  with open('./datasets/road_traffic_counts_station_reference.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    stations_list = list(reader)

    center_point = [{ 'lat': float(latitude), 'lng': float(longitude) }]
    radius = float(radius)

    close_stations = stations.get_stations(center_point, stations_list, radius)
    return close_stations

@app.route("/predict", methods=['GET'])
def get_congested_stations():
  args = request.args
  latitude = args.get('latitude')
  longitude = args.get('longitude')
  radius = args.get('radius')
  population = args.get('population')
  time= args.get('time')

  with open('./datasets/FINAL_DATASET.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    traffic_data = list(reader)

    center_point = [{ 'lat': float(latitude), 'lng': float(longitude) }]
    radius = float(radius)
    population = int(population)
    time = int(time)

    congested_stations = congestions.get_congested_stations(center_point, traffic_data, radius, population, time)
    return congested_stations



if __name__ == "__main__":
  app.run(debug=True)