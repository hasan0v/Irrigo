import csv
from django.core.management.base import BaseCommand
from dashboard.models import FieldData

class Command(BaseCommand):
    help = 'Load field data from a CSV file into the database'

    def handle(self, *args, **kwargs):
        # Path to the CSV file
        file_path = 'C:/Users/alien/Downloads/Su_Nemlik/Irrigo/Irrigo/data/field_data.csv'
        
        with open(file_path, 'r') as file:
            reader = csv.reader(file)
            next(reader)  # Skip the header row
            for row in reader:
                # Create a new FieldData object for each row
                FieldData.objects.create(
                    timestamp=row[0],  # Ensure this matches the structure of your CSV
                    soil_moisture_level=float(row[1]),
                    temperature=float(row[2]),
                    ph_level=float(row[3]),
                    uv_intensity=float(row[4]),
                    rainfall=float(row[5]),
                    water_pressure=float(row[6]),
                    tank_water_volume=float(row[7])
                )
        
        self.stdout.write(self.style.SUCCESS('Successfully loaded data from field_data.csv'))
