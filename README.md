# Household

家計簿だそうです

Nextjs でいい感じのグラフを表示する勉強

## Model

適当にRelationがいくつかアレば良い

後々統計を取るためのデータが欲しい

* Household
  + cost
  + expense
  + income
  + Date
  + [Genre]
  + [Shop]
  + createdAt(必要?)
  + updatedAt(いる?)

* Genre
  + 食費 grocery
  + sanitary
  + party
  + snack

* Shop
  + 7-11
  + am-pm
  + Seiyu

## Statistics

毎月何にいくら使っているかの内訳

くらいか

円グラフにしたり、棒グラフにしたり　それをTopPageにいい感じに表示する

## components

* html
  + body
    - Container
      - Header
      * Inner
        - Sidebar
        - Main
