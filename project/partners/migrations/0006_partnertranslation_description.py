# Generated by Django 2.2.17 on 2021-04-29 20:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('partners', '0005_partner_career_link'),
    ]

    operations = [
        migrations.AddField(
            model_name='partnertranslation',
            name='description',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='description'),
        ),
    ]
