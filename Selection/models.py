from django.db import models

class DropDown1(models.Model):
    name = models.CharField(max_length=700)

    def __str__(self):
            return self.name

class DropDown2(models.Model):
    dropDown1 = models.ForeignKey(DropDown1, on_delete=models.CASCADE)
    name = models.CharField(max_length=700)

    def __str__(self):
            return self.name