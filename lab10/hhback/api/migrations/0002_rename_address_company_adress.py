# Generated by Django 5.0.3 on 2024-04-09 19:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='company',
            old_name='address',
            new_name='adress',
        ),
    ]
