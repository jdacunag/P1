# Generated by Django 4.2.4 on 2023-11-09 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taskbar', '0009_remove_proyecto_imagen'),
    ]

    operations = [
        migrations.AddField(
            model_name='proyecto',
            name='img',
            field=models.TextField(default=2),
            preserve_default=False,
        ),
    ]
