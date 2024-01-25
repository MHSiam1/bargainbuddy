# Generated by Django 5.0.1 on 2024-01-24 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0004_item_approval_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='approval_status',
            field=models.CharField(choices=[('Pending', 'Pending'), ('Approved', 'Approved'), ('Deleted', 'Deleted')], default='Pending', max_length=10),
        ),
    ]