# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-09-14 11:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_profile_is_deleted_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='is_deleted_user',
            field=models.BooleanField(db_index=True, default=False),
        ),
    ]
