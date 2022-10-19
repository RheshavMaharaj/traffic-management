from geopy import distance
import numpy as np

def reduce_to_latlng(station):
    return {'lat': float(station['wgs84_latitude']), 'lng': float(station['wgs84_longitude'])}

def within_radius(center_point, test_point, radius):
    center_point_tuple = tuple(center_point.values())
    test_point_tuple = tuple(test_point.values())

    dis = distance.distance(center_point_tuple, test_point_tuple).km

    if dis <= radius:
        return test_point

def get_stations(center_point, test_stations, radius):
    coordinates = map(reduce_to_latlng, test_stations)
    coords_array = np.array(list(coordinates))
    final_stations = []

    for coordinate in coords_array:
        point = within_radius(center_point[0], coordinate, radius)
        if point:
            final_stations.append(point)
    
    return final_stations
    
    
