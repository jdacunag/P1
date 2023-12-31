# Generated by Django 4.2.4 on 2023-11-15 17:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Taskhub', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tasks',
            name='slug',
        ),
        migrations.AlterField(
            model_name='proyecto',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='proyecto_creador', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='tasks',
            name='estado',
            field=models.CharField(default='ToDo', max_length=20),
        ),
        migrations.AlterField(
            model_name='tasks',
            name='nombre',
            field=models.CharField(max_length=100),
        ),
        migrations.CreateModel(
            name='RolProyecto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rol', models.CharField(choices=[('member', 'member'), ('leader', 'leader'), ('expecter', 'expecter')], default='member', max_length=20)),
                ('Proyecto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Taskhub.proyecto')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='proyecto',
            name='usuarios',
            field=models.ManyToManyField(related_name='proyectos_asociados', through='Taskhub.RolProyecto', to=settings.AUTH_USER_MODEL),
        ),
    ]
