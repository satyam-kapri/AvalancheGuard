# app.py
from flask import Flask,jsonify,request
import joblib
import requests
from flask_cors import CORS
import numpy as np
app = Flask(__name__)
CORS(app) 
newmodel=joblib.load('./avalanchepredict_model.pkl')
model = joblib.load('./avalancheprediction_model.pkl')
headers= {
    'X-RapidAPI-Key': '166c66ffd2msh2e4d14eed209c18p1ac09ajsnf4a13f85f57c',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }

url= 'https://weatherapi-com.p.rapidapi.com/current.json'



@app.route('/')
def hello():
   return "hello from me"

@app.post('/getforecast')
def getforecast():
        
        coordinates = request.json.get('coordinates')
        lat = coordinates.get('lat')
        lon = coordinates.get('lng')
      
        params={'q':f"{lat},{lon}"}
        response = requests.get(url, headers=headers,params=params)
        weather_data = response.json()
        air_pressure=weather_data['current']['pressure_mb']
        humidity=weather_data['current']['humidity']    
        temp=weather_data['current']['temp_c']
        precip=weather_data['current']['precip_mm']
        wind=weather_data['current']['wind_kph'] 
        accident=np.random.randint(0,10)
        freq=np.random.randint(0,20)
        newprediction=newmodel.predict([[np.random.uniform(0,1),precip,temp,wind,np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1),np.random.uniform(0,1)]])
        prediction = model.predict([[air_pressure,humidity,temp,precip,wind,5,13]])
        return jsonify({'air-pressure':air_pressure,'humidity':humidity,'temp':temp,'precipitation':precip,'wind':wind,'past-accidents':accident,'prediction': str(newprediction[0])})

if __name__ == '__main__':
    app.run(debug=True)



# pressure humidity temprature precipitaion windspeed accident frequency