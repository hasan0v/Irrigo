from dashboard.models import FieldData
from django.contrib.auth import login, authenticate, logout
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from .forms import CustomUserCreationForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import ProfileUpdateForm
from django.views import View


def home_view(request):
    # Extracting data from the FieldData model
    field_data = FieldData.objects.all().order_by('id')
    rainfall_t = [data.rainfall for data in field_data][-40:-1]
    rainfall = [int(value) for value in rainfall_t]
    print(rainfall[15:-1])
    # Formatting data for ECharts
    context = {
        'timestamps': [str(data.timestamp.strftime('%H:%M')) for data in field_data][-40:-1],  # Format to show only hour and minute
        'soil_moisture_values': [data.soil_moisture_level for data in field_data][-40:-1],
        'temperature_values': [data.temperature for data in field_data][-40:-1],
        'ph_level_values': [data.ph_level for data in field_data][-40:-1],
        'uv_intensity_values': [data.uv_intensity for data in field_data][-40:-1],
        'rainfall_values': rainfall,
        'water_pressure_values': [data.water_pressure for data in field_data][-40:-1],
        'tank_water_volume_values': [data.tank_water_volume for data in field_data][-40:-1],
    }

    return render(request, 'dashboard/index.html', context)



def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = CustomUserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})



@login_required
def profile(request):
    if request.method == 'POST':
        form = ProfileUpdateForm(request.POST, request.FILES, instance=request.user.profile)
        if form.is_valid():
            form.save()
            return redirect('profile')
    else:
        form = ProfileUpdateForm(instance=request.user.profile)
    return render(request, 'profile.html', {'form': form})


def get_started(request):
    return render(request, 'get_started.html')


def about_view(request):
    return render(request, 'about.html')

def water_engine_status(request):
    engine_data = [
        {"lat": "25%", "lng": "30%", "status": "working"},
        {"lat": "40%", "lng": "50%", "status": "issue"},
        {"lat": "75%", "lng": "65%", "status": "not_working"},
    ]
    
    context = {
        'engine_data': engine_data
    }
    
    return render(request, 'map.html', context)


def kontrol_view(request):
    return render(request, 'kontrol.html')