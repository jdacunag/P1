# Generated by Django 4.2.4 on 2023-09-07 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taskbar', '0002_proyecto'),
    ]

    operations = [
        migrations.CreateModel(
            name='usuario',
            fields=[
                ('username', models.CharField(max_length=50, unique=True)),
                ('password', models.CharField(max_length=50, unique=True)),
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('correo', models.TextField(max_length=50, unique=True)),
            ],
        ),
    ]
