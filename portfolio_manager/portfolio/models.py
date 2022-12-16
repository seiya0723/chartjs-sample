from django.db import models
from django.utils import timezone

#店舗テーブル
class Store(models.Model):

    name    = models.CharField(verbose_name="店舗名",max_length=30)

    #CHECK1: この担当者は管理サイトへログインするユーザーである場合、ユーザーモデルと1対多を組んだほうが良いかも。
    manager = models.CharField(verbose_name="担当者",max_length=10)

    #CHECK2: この契約ステータスは複数のステータスから選ぶ形式の場合、CharFieldのchoicesを使う方が良いかも。
    # https://noauto-nolife.com/post/django-models-choices/ 
    status  = models.IntegerField(verbose_name="契約ステータス")
    


#データテーブル(※店舗のデータテーブルなのでStoreDataとした。)
class StoreData(models.Model):

    store   = models.ForeignKey(Store,verbose_name="店舗",on_delete=models.CASCADE)

    #CHECK3: 記録するものが年月だけであればDateFieldでも良いかも。
    dt      = models.DateTimeField(verbose_name="年月",default=timezone.now)

    #CHECK4: ER図によると売上ID、アクセスID、転換率ID、客単価IDの4つがある。しかし、それらはこのStoreDataのidでよいのでは？


#売上テーブル
class Sale(models.Model):

    dt      = models.DateTimeField(verbose_name="年月",default=timezone.now)

    pc      = models.IntegerField(verbose_name="PC")
    phone   = models.IntegerField(verbose_name="スマホ")
    app     = models.IntegerField(verbose_name="アプリ")


    store_data  = models.ForeignKey(StoreData, verbose_name="データ", on_delete=models.CASCADE)


#売上件数テーブル
class SaleAmount(models.Model):

    dt      = models.DateTimeField(verbose_name="年月",default=timezone.now)

    pc      = models.IntegerField(verbose_name="PC")
    phone   = models.IntegerField(verbose_name="スマホ")
    app     = models.IntegerField(verbose_name="アプリ")

    store_data  = models.ForeignKey(StoreData, verbose_name="データ", on_delete=models.CASCADE)

#アクセス人数テーブル
class Access(models.Model):

    dt      = models.DateTimeField(verbose_name="年月",default=timezone.now)

    pc      = models.IntegerField(verbose_name="PC")
    phone   = models.IntegerField(verbose_name="スマホ")
    app     = models.IntegerField(verbose_name="アプリ")

    store_data  = models.ForeignKey(StoreData, verbose_name="データ", on_delete=models.CASCADE)

#転換率テーブル
class ConversionRate(models.Model):

    dt      = models.DateTimeField(verbose_name="年月",default=timezone.now)

    pc      = models.FloatField(verbose_name="PC")
    phone   = models.FloatField(verbose_name="スマホ")
    app     = models.FloatField(verbose_name="アプリ")

    store_data  = models.ForeignKey(StoreData, verbose_name="データ", on_delete=models.CASCADE)

