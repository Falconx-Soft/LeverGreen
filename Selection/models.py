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

class DataAttribute(models.Model):
    dropDown1 = models.ForeignKey(DropDown1, on_delete=models.CASCADE, null=True)
    dropDown2 = models.ForeignKey(DropDown2, on_delete=models.CASCADE)
    name = models.CharField(max_length=700)

    def __str__(self):
            return self.name

class DataAttributeType(models.Model):
    dataAttribute = models.ForeignKey(DataAttribute, on_delete=models.CASCADE)
    name = models.CharField(max_length=700)

    def __str__(self):
            return self.name+","+self.dataAttribute.name+","+self.dataAttribute.dropDown2.name

class MappedTable(models.Model):
    dataAttributeType = models.ForeignKey(DataAttributeType, on_delete=models.CASCADE)
    entriesID = models.CharField(max_length=100)
    LMP = models.FloatField()
    intervalIndex = models.IntegerField()
    timestamp = models.DateTimeField()
    freq =  models.CharField(max_length=100)
    market = models.CharField(max_length=100)
    baName = models.CharField(max_length=100)
    localTime = models.DateTimeField()
    DST = models.IntegerField()

    def __str__(self):
            return self.dataAttributeType.name