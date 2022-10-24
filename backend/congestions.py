import joblib
from geopy import distance
import numpy as np
import pandas as pd

model = joblib.load('./models/threshold_model.joblib')

def predict(station_key, population, time):
  dataset_reference = pd.read_csv('./datasets/FINAL_DATASET.csv')
  print(dataset_reference)
  SKey = station_key
  PDSlider = population
  ToDSlider = time

  slider_calc = slider_calculation(PDSlider, ToDSlider)

  station_search = dataset_reference.loc[(dataset_reference["station_key"] == int(SKey))]
  selected_station = station_search.iloc[0]
  selected_station = selected_station.drop(['station_key', 'daily_total', 'full_name', 'wgs84_latitude', 'wgs84_longitude', 'threshold'])

  station_threshold = model.predict([selected_station])

  if slider_calc >= station_threshold:
    return station_key

def get_congested_stations(center_point, traffic_data, radius, population, time):
  final_station_keys = []
  final_stations = []
  searchable_data = unique(traffic_data)

  for station in searchable_data:
    coordinates = [reduce_to_latlng(station)]
    point = within_radius(center_point[0], coordinates[0], radius)
    if point:
      final_station_keys.append(station)
  
  for station in final_station_keys:
    prediction = predict(station['station_key'], population, time)
    print(prediction)
    if prediction is not None:
      final_stations.append(station)
    

  return final_stations


def unique(dicts):
    names = set()
    result = []
    for d in dicts:
        if not d['station_key'] in names:
            names.add(d['station_key'])
            result.append(d)
    return result

def within_radius(center_point, test_point, radius):
    center_point_tuple = tuple(center_point.values())
    test_point_tuple = tuple(test_point.values())

    dis = distance.distance(center_point_tuple, test_point_tuple).km

    if dis <= radius:
        return test_point

def reduce_to_latlng(station):
    return {'lat': float(station['wgs84_latitude']), 'lng': float(station['wgs84_longitude'])}


def slider_calculation(population_density, time_of_day):
  
  # Calculate population count based on slider position
  p_component = 20
  i = 0
  while i < population_density:
    p_component = p_component * 1.90
    i += 1
  
  # Calculate the impact of peak hours based on slider position
  t_component = 1
  if 6 <= time_of_day <= 10 or 14 <= time_of_day <= 18:
    t_component = 1.5
  
  # Calculate the simulated traffic
  s_traffic = p_component * t_component

  return s_traffic