# Generated by Django 4.2.4 on 2023-09-12 18:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('taskbar', '0004_usuario_groups_usuario_is_superuser_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='tasks',
            name='proyecto',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='taskbar.proyecto'),
            preserve_default=False,
        ),
    ]