# Generated by Django 5.0.1 on 2024-01-24 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0003_alter_item_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='approval_status',
            field=models.CharField(choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Deleted', 'Deleted')], default='Pending', max_length=20),
        ),
    ]
