# Generated by Django 3.2 on 2022-06-28 21:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Selection', '0003_dataattribute'),
    ]

    operations = [
        migrations.AddField(
            model_name='dataattribute',
            name='dropDown1',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Selection.dropdown1'),
        ),
    ]
