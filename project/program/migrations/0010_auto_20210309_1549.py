# Generated by Django 2.2.17 on 2021-03-09 13:49

from django.db import migrations, models
import versatileimagefield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('program', '0009_auto_20200302_0614'),
    ]

    operations = [
        migrations.AddField(
            model_name='presenter',
            name='image_alt',
            field=versatileimagefield.fields.VersatileImageField(blank=True, height_field='image_alt_height', null=True, upload_to='presenters/', verbose_name='Image alt', width_field='image_alt_width'),
        ),
        migrations.AddField(
            model_name='presenter',
            name='image_alt_height',
            field=models.PositiveIntegerField(editable=False, null=True),
        ),
        migrations.AddField(
            model_name='presenter',
            name='image_alt_width',
            field=models.PositiveIntegerField(editable=False, null=True),
        ),
    ]
