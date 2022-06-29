# Generated by Django 3.2 on 2022-06-28 23:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Selection', '0006_rename_dataattributetye_dataattributetype'),
    ]

    operations = [
        migrations.CreateModel(
            name='MappedTable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('entriesID', models.CharField(max_length=100)),
                ('LMP', models.FloatField()),
                ('intervalIndex', models.IntegerField()),
                ('timestamp', models.DateTimeField()),
                ('freq', models.CharField(max_length=100)),
                ('market', models.CharField(max_length=100)),
                ('baName', models.CharField(max_length=100)),
                ('localTime', models.DateTimeField()),
                ('DST', models.IntegerField()),
                ('dataAttributeType', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Selection.dataattributetype')),
            ],
        ),
    ]
