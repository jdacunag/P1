# Generated by Django 4.2.4 on 2023-11-09 05:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taskbar', '0007_proyecto_usuario'),
    ]

    operations = [
        migrations.AddField(
            model_name='proyecto',
            name='imagen',
            field=models.TextField(default=2),
            preserve_default=False,
        ),
    ]