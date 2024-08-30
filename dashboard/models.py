from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class FieldData(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)  # Auto-generated timestamp
    soil_moisture_level = models.FloatField()  # Soil Moisture Level (%)
    temperature = models.FloatField()  # Temperature (°C)
    ph_level = models.FloatField()  # pH Level
    uv_intensity = models.FloatField()  # UV Intensity (arb. units)
    rainfall = models.FloatField()  # Rainfall (%)
    water_pressure = models.FloatField()  # Water Pressure (bar)
    tank_water_volume = models.FloatField()  # Tank Water Volume (liters)

    def __str__(self):
        return f"Field Data at {self.timestamp}"

    class Meta:
        verbose_name_plural = "Field Data"


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='profile_images', default='default-profile.png')

    def __str__(self):
        return f'{self.user.username} Profile'

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
