# Generated by Django 3.2 on 2022-07-01 20:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Selection', '0008_auto_20220702_0150'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='DataAttributeType',
            new_name='DataEntries',
        ),
        migrations.RenameField(
            model_name='mappedtable',
            old_name='dataAttributeType',
            new_name='DataEntries',
        ),
    ]
