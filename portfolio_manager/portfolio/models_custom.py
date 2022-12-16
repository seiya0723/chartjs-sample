
#【注意】これはER図を独自に解釈してカスタムしたモデルです。


from django.db import models
from django.utils import timezone

# 担当者のユーザーモデルと1対多を組むため、ユーザーモデルをimportする。
from django.contrib.auth.models import User


#最小値、最大値を指定する。(例えば、金額の場合、0円よりも小さい値を入力されてはいけない。そういう時はMinValueValidatorを使う。)
from django.core.validators import MinValueValidator,MaxValueValidator

AGGREEMENT  = [
        ("フランチャイズ契約"   , "フランチャイズ契約"  ),
        ("ライセンス契約"       , "ライセンス契約"      ),
        ("解約済み"             , "解約済み"            ),
        ]


#店舗テーブル
class Store(models.Model):

    name    = models.CharField(verbose_name="店舗名",max_length=30)
    manager = models.ForeignKey(User, verbose_name="担当者", on_delete=models.CASCADE)

    #選択肢から選ぶ場合はchoicesを用意する。これでこれ以外の文字列はDBには保存されない。
    status  = models.CharField(verbose_name="契約ステータス",choices=AGGREEMENT, max_length=15)


#データテーブル(※店舗のデータテーブルなのでStoreDataとした。)
class StoreData(models.Model):

    #対象店舗と年月で重複した記録を許さない場合、このようにunique_togetherを使う。
    class Meta:
        unique_together = ("store","date")

    store   = models.ForeignKey(Store,verbose_name="店舗",on_delete=models.CASCADE)

    #DateFieldでは年月だけ記録することはできないため、年月だけ記録したい場合は、バリデーション時に日付を1にして保存する。
    date    = models.DateField(verbose_name="記録年月")



#売上テーブル
class Sale(models.Model):

    pc      = models.IntegerField(verbose_name="PC"     , validators=[MinValueValidator(0)])
    phone   = models.IntegerField(verbose_name="スマホ" , validators=[MinValueValidator(0)])
    app     = models.IntegerField(verbose_name="アプリ" , validators=[MinValueValidator(0)])

    store_data  = models.ForeignKey(StoreData, verbose_name="データ", on_delete=models.CASCADE, unique=True)


#売上件数テーブル
class SaleAmount(models.Model):

    pc      = models.IntegerField(verbose_name="PC"     , validators=[MinValueValidator(0)])
    phone   = models.IntegerField(verbose_name="スマホ" , validators=[MinValueValidator(0)])
    app     = models.IntegerField(verbose_name="アプリ" , validators=[MinValueValidator(0)])

    store_data  = models.ForeignKey(StoreData, verbose_name="データ", on_delete=models.CASCADE, unique=True)

#アクセス人数テーブル
class Access(models.Model):

    pc      = models.IntegerField(verbose_name="PC"     , validators=[MinValueValidator(0)])
    phone   = models.IntegerField(verbose_name="スマホ" , validators=[MinValueValidator(0)])
    app     = models.IntegerField(verbose_name="アプリ" , validators=[MinValueValidator(0)])

    store_data  = models.ForeignKey(StoreData, verbose_name="データ", on_delete=models.CASCADE, unique=True)

#転換率テーブル
class ConversionRate(models.Model):

    pc      = models.FloatField(verbose_name="PC"       , validators=[MinValueValidator(0),MaxValueValidator(100)])
    phone   = models.FloatField(verbose_name="スマホ"   , validators=[MinValueValidator(0),MaxValueValidator(100)])
    app     = models.FloatField(verbose_name="アプリ"   , validators=[MinValueValidator(0),MaxValueValidator(100)])

    store_data  = models.ForeignKey(StoreData, verbose_name="データ", on_delete=models.CASCADE, unique=True)

